(function () {
    "use strict";

    let initialized = false;

    function getActiveElement(cls) {
        const nodes = document.querySelectorAll(cls);
        for (const m of nodes) {
            if ([...m.classList].some(c => c.startsWith("__"))) return m;
        }
        return null;
    }

    function showOverlay(key) {
        const command  = getActiveElement(`.command.${key}`);

        if (command) {
            command.classList.add("command--open");
        }
    }

    function hideOverlay() {
        const command  = getActiveElement(".command.command--open");

        if (command) {
            command.classList.remove("command--open");
        }
    }

    function onClick(e) {
        const openBtn = e.target.closest("[data-target]");
        if (openBtn) {
            e.preventDefault();
            showOverlay(openBtn.dataset.target);
        }
    }

    function onKeydown(e) {
        if (e.key !== "Escape" && e.key !== "Esc") return;
        hideOverlay();
    }

    function init() {
        if (initialized) return;
        initialized = true;

        document.addEventListener("click", onClick, false);
        document.addEventListener("keydown", onKeydown, false);
    }

    window.VDSCommand = {
        init,
        open: showOverlay,
        close: hideOverlay,
    };

})();
