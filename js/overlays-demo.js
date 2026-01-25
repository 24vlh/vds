/**
 * VDS Overlays — Pure Instant Version (no animation timing)
 *
 * Contract:
 *   data-target="key"   → open overlay with data-overlay="key"
 *   data-close="key"    → close overlay with data-overlay="key"
 *   data-action="export-archive" → demo task flow before showing actions
 *
 * Matching overlay structure examples:
 *   <div class="backdrop" data-overlay="modal-basic"></div>
 *   <div class="modal" data-overlay="modal-basic"></div>
 *   <div class="drawer" data-overlay="drawer-left"></div>
 *   <div class="overlay-inline" data-overlay="inline-overlay"></div>
 */

(function () {
    "use strict";

    let bound = false;

    // -----------------------------------------------------
    // Pure helpers
    // -----------------------------------------------------

    function normalizeKey(key) {
        if (!key) return null;
        return key.replace(/^__/, "");
    }

    function isPreviewElement(el) {
        return Boolean(el && el.closest && el.closest(".doc-block__preview"));
    }

    function getOverlayKey(el) {
        if (!el) return null;
        if (el.dataset && el.dataset.overlay) return el.dataset.overlay;
        const classKey = [...el.classList].find((cls) => cls.startsWith("__"));
        return classKey ? classKey.replace(/^__/, "") : null;
    }

    function getOverlayElements(key) {
        const cleanKey = normalizeKey(key);
        if (!cleanKey) return {};

        const byData = {
            backdrop: document.querySelector(`.backdrop[data-overlay="${cleanKey}"]`),
            inline: document.querySelector(`.overlay-inline[data-overlay="${cleanKey}"]`),
            modal: document.querySelector(`.modal[data-overlay="${cleanKey}"]`),
            drawer: document.querySelector(`.drawer[data-overlay="${cleanKey}"]`),
        };

        if (byData.backdrop || byData.inline || byData.modal || byData.drawer) {
            return byData;
        }

        const legacyKey = key && key.startsWith("__") ? key : `__${cleanKey}`;
        return {
            backdrop: document.querySelector(`.backdrop.${legacyKey}`),
            inline: document.querySelector(`.overlay-inline.${legacyKey}`),
            modal: document.querySelector(`.modal.${legacyKey}`),
            drawer: document.querySelector(`.drawer.${legacyKey}`),
        };
    }

    function updateBodyLock() {
        const anyModalOpen = [...document.querySelectorAll(".modal.modal--active")].some(
            (modal) => !isPreviewElement(modal)
        );
        const anyDrawerOpen = [...document.querySelectorAll(".drawer:not(.drawer--hidden)")].some(
            (drawer) => !isPreviewElement(drawer)
        );
        const anyStillOpen = anyModalOpen || anyDrawerOpen;

        if (anyStillOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }

    function setModalState(modal, state) {
        if (!modal) return;
        modal.dataset.state = state;
        modal.querySelectorAll("[data-state]").forEach((node) => {
            node.hidden = node.dataset.state !== state;
        });
    }

    function showOverlay(key) {
        const { backdrop, inline, modal, drawer } = getOverlayElements(key);

        if (backdrop) {
            backdrop.classList.add("backdrop--active");
        }

        if (modal) {
            modal.classList.add("modal--active");
            updateBodyLock();
            return modal;
        }

        if (drawer) {
            drawer.classList.remove("drawer--hidden");
            updateBodyLock();
            return drawer;
        }

        if (inline) {
            inline.classList.add("overlay-inline--active");
        }

        return null;
    }

    function hideOverlay(key) {
        const { backdrop, inline, modal, drawer } = getOverlayElements(key);

        if (modal) {
            modal.classList.remove("modal--active");
        }

        if (drawer) {
            drawer.classList.add("drawer--hidden");
        }

        if (inline) {
            inline.classList.remove("overlay-inline--active");
        }

        if (backdrop) {
            backdrop.classList.remove("backdrop--active");
        }

        updateBodyLock();
    }

    function runAction(action, key) {
        if (action !== "export-archive") {
            showOverlay(key);
            return;
        }

        const modal = showOverlay(key);
        if (!modal) return;

        modal.classList.add("modal--loading");
        setModalState(modal, "loading");

        window.setTimeout(() => {
            modal.classList.remove("modal--loading");
            setModalState(modal, "ready");
        }, 1200);
    }

    // -----------------------------------------------------
    // Delegated click/ESC
    // -----------------------------------------------------

    function onClick(e) {
        const openBtn = e.target.closest("[data-target]");
        if (openBtn) {
            const action = openBtn.dataset.action;
            const key = openBtn.dataset.target;
            const targets = getOverlayElements(key);
            const hasOverlay =
                targets.backdrop || targets.inline || targets.modal || targets.drawer;

            if (!hasOverlay) return;

            e.preventDefault();
            if (action) {
                runAction(action, key);
            } else {
                showOverlay(key);
            }
            return;
        }

        const closeBtn = e.target.closest("[data-close]");
        if (closeBtn) {
            const keys = closeBtn.dataset.close.split(/\s+/).filter(Boolean);
            const validKeys = keys.filter((key) => {
                const targets = getOverlayElements(key);
                return targets.backdrop || targets.inline || targets.modal || targets.drawer;
            });

            if (!validKeys.length) return;

            e.preventDefault();
            validKeys.forEach((key) => hideOverlay(key));
        }
    }

    function onKeydown(e) {
        if (e.key !== "Escape" && e.key !== "Esc") return;

        // Close whichever modal/drawer is currently active
        const openModal = getTopmost(".modal.modal--active");
        const openDrawer = getTopmost(".drawer:not(.drawer--hidden)");
        const openBackdrop = getTopmost(".backdrop.backdrop--active");
        const openOverlayInline = getTopmost(".overlay-inline.overlay-inline--active");

        if (openModal) {
            if (openModal.dataset.blocking === "true") return;
            const key = getOverlayKey(openModal);
            if (key) hideOverlay(key);
            return;
        }

        if (openDrawer) {
            const key = getOverlayKey(openDrawer);
            if (key) hideOverlay(key);
            return;
        }

        if (openBackdrop) {
            const key = getOverlayKey(openBackdrop);
            if (key) hideOverlay(key);
            return;
        }

        if (openOverlayInline) {
            const key = getOverlayKey(openOverlayInline);
            if (key) hideOverlay(key);
        }
    }

    function getTopmost(selector) {
        const nodes = [...document.querySelectorAll(selector)].filter(
            (node) => !isPreviewElement(node)
        );
        return nodes.length ? nodes[nodes.length - 1] : null;
    }

    // -----------------------------------------------------
    // INIT
    // -----------------------------------------------------

    function bindHandlers() {
        document.addEventListener("click", onClick, true);
        document.addEventListener("keydown", onKeydown, true);
    }

    function unbindHandlers() {
        document.removeEventListener("click", onClick, true);
        document.removeEventListener("keydown", onKeydown, true);
    }

    function reset() {
        document.querySelectorAll(".modal.modal--active").forEach((modal) => {
            if (isPreviewElement(modal)) return;
            modal.classList.remove("modal--active");
            modal.classList.remove("modal--loading");
        });

        document.querySelectorAll(".drawer:not(.drawer--hidden)").forEach((drawer) => {
            if (isPreviewElement(drawer)) return;
            drawer.classList.add("drawer--hidden");
        });

        document.querySelectorAll(".backdrop.backdrop--active").forEach((backdrop) => {
            if (isPreviewElement(backdrop)) return;
            backdrop.classList.remove("backdrop--active");
        });

        document.querySelectorAll(".overlay-inline.overlay-inline--active").forEach((panel) => {
            if (isPreviewElement(panel)) return;
            panel.classList.remove("overlay-inline--active");
        });

        updateBodyLock();
    }

    function init(options = {}) {
        const force = options && options.force;
        if (bound && !force) return;

        if (bound) {
            unbindHandlers();
        }

        bindHandlers();
        bound = true;
    }

    // -----------------------------------------------------
    // Export API
    // -----------------------------------------------------

    window.VDSOverlay = {
        init,
        reset,
        open: showOverlay,
        close: hideOverlay,
    };

    document.addEventListener("DOMContentLoaded", () => {
        if (window.VDSOverlay) {
            window.VDSOverlay.init({ force: true });
        }
    });

})();
