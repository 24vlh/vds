document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("doc-content");
    if (!container) return;

    // Attach loader to any link with data-doc="path/to/file.html"
    document.querySelectorAll("a[data-doc]").forEach(link => {
        link.addEventListener("click", async function (e) {
            e.preventDefault();

            const url = this.getAttribute("data-doc");
            if (!url) return;

            // Update browser URL based on data-path
            const newPath = this.getAttribute("data-path");
            if (newPath) {
                history.pushState({}, "", "/" + newPath);
            }

            // Load remote HTML fragment
            const response = await fetch(url, {cache: "no-cache"});
            const html = await response.text();

            const temp = document.createElement("div");
            temp.innerHTML = html;

            const h1 = temp.querySelector("h1");
            const title = h1 ? h1.innerText : "";

            container.innerHTML = html;

            if (title) document.title = title;

            window.scrollTo({top: 0, behavior: "smooth"});

            docBlock();
            VDSOverlay.init();
            VDSCommand.init();
        });
    });

    // Auto-click link based on last URL segment
    let segment = window.location.pathname
        .split("/")
        .filter(Boolean)
        .pop();

    if(!segment) segment = 'home';

    if (segment) {
        const norm = segment.toLowerCase();

        // Strategy 1 — match link text
        let link = Array.from(document.querySelectorAll("a[data-path]"))
            .find(a => a.textContent.trim().toLowerCase() === norm);

        // Strategy 2 — fallback: match segment in data-doc filename
        if (!link) {
            link = Array.from(document.querySelectorAll("a[data-path]"))
                .find(a => a.getAttribute("data-path").toLowerCase().includes(norm));
        }

        if (link) {
            link.click();
        }
    }
});
