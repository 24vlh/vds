/**
 * VDS Overlays — Pure Instant Version (no animation timing)
 *
 * Contract:
 *   data-target="__key"   → open overlay with class="__key"
 *   data-close="__key"    → close overlay with class="__key"
 *
 * Matching overlay structure examples:
 *   <div class="backdrop __modal-basic"></div>
 *   <div class="modal __modal-basic"></div>
 *   <div class="drawer __drawer-left"></div>
 *   <div class="overlay-inline __inline-overlay"></div>
 */

(function () {
    "use strict";

    let initialized = false;

    // -----------------------------------------------------
    // Pure helpers
    // -----------------------------------------------------

    function showOverlay(key) {
        const backdrop  = getActiveElement(`.backdrop.${key}`);
        const inline  = getActiveElement(`.overlay-inline.${key}`);
        const modal  = getActiveElement(`.modal.${key}`);
        const drawer = getActiveElement(`.drawer.${key}`);

        // Backdrop
        if (backdrop) {
            backdrop.classList.add("backdrop--active");
        }

        // Modal
        if (modal) {
            modal.classList.add("modal--active");
            document.body.classList.add("modal-open");
            return;
        }

        // Drawer
        if (drawer) {
            drawer.classList.remove("drawer--hidden");
            document.body.classList.add("modal-open");
            return;
        }

        // Inline Overlay
        if (inline) {
            inline.classList.add("overlay-inline--active");
            return;
        }
    }

    function hideOverlay() {
        const backdrop  = getActiveElement(".backdrop.backdrop--active");
        const inline  = getActiveElement(".overlay-inline.overlay-inline--active");
        const modal  = getActiveElement(".modal.modal--active");
        const drawer = getActiveElement(".drawer:not(.drawer--hidden)");

        // Modal
        if (modal) {
            modal.classList.remove("modal--active");
            if (backdrop) backdrop.classList.remove("backdrop--active");

            const anyStillOpen =
                document.querySelector(".modal.modal--active") ||
                document.querySelector(".drawer:not(.drawer--hidden)");

            if (!anyStillOpen) {
                document.body.classList.remove("modal-open");
            }

            return;
        }

        // Drawer
        if (drawer) {
            drawer.classList.add("drawer--hidden");
            if (backdrop) backdrop.classList.remove("backdrop--active");

            const anyStillOpen =
                document.querySelector(".modal.modal--active") ||
                document.querySelector(".drawer:not(.drawer--hidden)");

            if (!anyStillOpen) {
                document.body.classList.remove("modal-open");
            }

            return;
        }

        // Inline
        if (inline) {
            inline.classList.remove("overlay-inline--active");
            return;
        }

        // Backdrop-only
        if (backdrop) {
            backdrop.classList.remove("backdrop--active");
        }
    }

    // -----------------------------------------------------
    // Delegated click/ESC
    // -----------------------------------------------------

    function onClick(e) {
        // OPEN
        const openBtn = e.target.closest("[data-target]");
        if (openBtn) {
            e.preventDefault();
            showOverlay(openBtn.dataset.target);
            return;
        }

        // CLOSE
        const closeBtn = e.target.closest("[data-close]");
        if (closeBtn) {
            e.preventDefault();
            hideOverlay(closeBtn.dataset.close);
            return;
        }
    }

    function getActiveElement(cls) {
        const nodes = document.querySelectorAll(cls);
        for (const m of nodes) {
            if ([...m.classList].some(c => c.startsWith("__"))) return m;
        }
        return null;
    }

    function onKeydown(e) {
        if (e.key !== "Escape" && e.key !== "Esc") return;

        // Close whichever modal/drawer is currently active
        const openBackdrop  = getActiveElement(".backdrop.backdrop--active");
        const openOverlayInline  = getActiveElement(".overlay-inline.overlay-inline--active");
        const openModal  = getActiveElement(".modal.modal--active");
        const openDrawer = getActiveElement(".drawer:not(.drawer--hidden)");

        if (openModal) {
            const key = [...openModal.classList].find(c => c.startsWith("__"));
            if (key) hideOverlay(key);
            return;
        }

        if (openDrawer) {
            const key = [...openDrawer.classList].find(c => c.startsWith("__"));
            if (key) hideOverlay(key);
            return;
        }

        if (openBackdrop) {
            const key = [...openBackdrop.classList].find(c => c.startsWith("__"));
            if (key) hideOverlay(key);
            return;
        }

        if (openOverlayInline) {
            const key = [...openOverlayInline.classList].find(c => c.startsWith("__"));
            if (key) hideOverlay(key);
            return;
        }
    }

    // -----------------------------------------------------
    // INIT
    // -----------------------------------------------------

    function init() {
        if (initialized) return;
        initialized = true;

        document.addEventListener("click", onClick, false);
        document.addEventListener("keydown", onKeydown, false);
    }

    // -----------------------------------------------------
    // Export API
    // -----------------------------------------------------

    window.VDSOverlay = {
        init,
        open: showOverlay,
        close: hideOverlay,
    };

})();
