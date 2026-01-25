(function () {
    "use strict";

    let initialized = false;

    function normalizeKey(key) {
        if (!key) return null;
        return key.replace(/^__/, "");
    }

    function getCommandElement(key) {
        const cleanKey = normalizeKey(key);
        if (!cleanKey) return null;

        return (
            document.querySelector(`.command[data-command="${cleanKey}"]`) ||
            document.querySelector(`.command.__${cleanKey}`) ||
            document.querySelector(`.command.${key}`)
        );
    }

    function getOpenCommand() {
        return document.querySelector(".command.command--open");
    }

    function showOverlay(key) {
        const command = getCommandElement(key);

        if (command) {
            command.classList.add("command--open");
        }
    }

    function hideOverlay() {
        const command = getOpenCommand();

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
