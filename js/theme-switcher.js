setTimeout(function () {
    const root = document.documentElement;
    const radios = document.querySelectorAll('.theme-switcher input[type="radio"]');

    const saved = localStorage.getItem('vg-theme');
    if (saved) root.setAttribute('data-theme', saved);

    radios.forEach(r => {
        if (r.value === root.getAttribute('data-theme')) r.checked = true;
        r.addEventListener('change', () => {
            root.setAttribute('data-theme', r.value);
            localStorage.setItem('vg-theme', r.value);
        });
    });
}, 300);

/* Collapse logic */
document.addEventListener("DOMContentLoaded", () => {
    const panel = document.getElementById('themePanel');
    const toggle = document.getElementById('themeToggleBtn');
    const closeBtn = document.getElementById('themeCloseBtn');

    if (!panel || !toggle || !closeBtn) return;

    function openPanel() {
        panel.classList.remove('theme-switcher-hidden');
        toggle.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'true');
    }

    function closePanel(options = {}) {
        panel.classList.add('theme-switcher-hidden');
        toggle.classList.remove('hidden');
        toggle.setAttribute('aria-expanded', 'false');

        if (options.restoreFocus) {
            toggle.focus();
        }
    }

    toggle.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', () => closePanel({restoreFocus: true}));

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !panel.classList.contains('theme-switcher-hidden')) {
            closePanel({restoreFocus: true});
        }
    });
});
