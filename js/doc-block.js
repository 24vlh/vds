/************************************************************
 * VDS — Documentation Interactions
 *
 * Responsibilities:
 *   • Copy code
 *   • Expand/Collapse long code blocks
 *   • Button active logic
 ************************************************************/

let docBlock = function initDocBlocks() {
    document.querySelectorAll(".doc-block__code").forEach(block => {
        block.addEventListener("mouseup", () => {
            const selection = document.getSelection().toString().trim();
            if (!selection) return;

            navigator.clipboard.writeText(selection);
            block.classList.add("is-copied");
            setTimeout(() => block.classList.remove("is-copied"), 800);
        });
    });

    document.querySelectorAll(".doc-block__code--numbered code").forEach(codeEl => {
        const raw = codeEl.innerHTML.split("\n");   // preserves markup

        const out = raw.map(line => {
            if (line.trim() === "") {
                // empty line → wrap for consistency
                return "<span></span>";
            }

            // Detect markup: angle-brackets that aren't escaped
            const hasHTML = /<\/?[a-z][\s\S]*>/i.test(line);

            if (hasHTML) {
                // line already contains structure → do NOT wrap
                return line;
            } else {
                // pure text → safe to wrap
                return `<span>${line}</span>`;
            }
        });

        codeEl.innerHTML = out.join("\n");  // restore newline separators
    });

    function setCorrectLabel(block, button) {
        const isCollapsed = block.classList.contains("doc-block--collapsed");
        const isExpanded  = block.classList.contains("doc-block--expanded");

        // if (isExpanded) {
        //     button.textContent = "Collapse";
        // } else if (isCollapsed) {
        //     button.textContent = "Expand";
        // } else {
        //     // Default to collapsed state if neither is explicitly set
        //     block.classList.add("doc-block--collapsed");
        //     button.textContent = "Expand";
        // }

        if (isCollapsed) {
            button.textContent = "Expand";
        } else {
            button.textContent = "Collapse";
        }
    }

    function toggle(block, button) {
        const isCollapsed = block.classList.contains("doc-block--collapsed");

        if (isCollapsed) {
            block.classList.remove("doc-block--collapsed");
            block.classList.add("doc-block--expanded");
            button.textContent = "Collapse";
        } else {
            block.classList.add("doc-block--collapsed");
            block.classList.remove("doc-block--expanded");
            button.textContent = "Expand";
        }
    }

    function bindExpandCollapse(block) {
        const actions = block.querySelector(".doc-block__actions");
        if (!actions) return;

        // Only the Expand/Collapse buttons
        const toggleButtons = Array.from(actions.querySelectorAll(".doc-block__action"))
            .filter(btn => btn.textContent.trim().match(/^(Expand|Collapse)$/i));

        if (toggleButtons.length === 0) return;

        toggleButtons.forEach(btn => {
            // 1. Sync correct label on page load
            setCorrectLabel(block, btn);

            // 2. Bind toggle logic
            btn.addEventListener("click", e => {
                e.stopPropagation();
                toggle(block, btn);
            });
        });
    }

    function findCodeBlockRoot(button) {
        // Ascend to the nearest doc-block__code
        let el = button;
        while (el && !el.classList.contains("doc-block__code")) {
            el = el.parentElement;
        }
        return el;
    }

    async function copyCode(codeRoot) {
        if (!codeRoot) return;

        const pre = codeRoot.querySelector("pre");
        const code = codeRoot.querySelector("code");

        if (!pre || !code) return;

        // Extract full text (preserves formatting, ignores line numbers)
        const text = code.innerText;

        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error("Clipboard write failed:", err);
            return false;
        }
    }

    function bindCopyButtons(root = document) {
        const copyButtons = root.querySelectorAll('.doc-block__action');

        copyButtons.forEach(btn => {
            const label = btn.textContent.trim();

            // Only bind buttons labeled "Copy"
            if (!/^Copy$/i.test(label)) return;

            btn.addEventListener("click", async e => {
                e.stopPropagation();

                const codeRoot = findCodeBlockRoot(btn);
                if (!codeRoot) return;

                const success = await copyCode(codeRoot);
                if (!success) return;

                // Add visual copied state
                codeRoot.classList.add("is-copied");

                // Temporary button label change
                const originalLabel = btn.textContent;
                btn.textContent = "Copied";

                // Reset after timeout
                setTimeout(() => {
                    codeRoot.classList.remove("is-copied");
                    btn.textContent = originalLabel;
                }, 1600);
            });
        });
    }

    function init(root = document) {
        const blocks = root.querySelectorAll(".doc-block");
        blocks.forEach(bindExpandCollapse);
    }

    init();
    bindCopyButtons();
};
