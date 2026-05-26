document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("doc-content");
    if (!container) return;

    const searchInput = document.getElementById("doc-search");
    const searchResults = document.getElementById("doc-search-results");
    const searchStatus = document.getElementById("doc-search-status");
    const canonicalLinks = Array.from(document.querySelectorAll("a[data-doc][data-path]"));
    const routes = new Map();
    const records = [];

    function normalizePath(value) {
        return String(value || "home")
            .replace(/^\/+|\/+$/g, "")
            .toLowerCase() || "home";
    }

    function routeUrl(path) {
        return `/${normalizePath(path)}`;
    }

    function escapeHTML(value) {
        const span = document.createElement("span");
        span.textContent = String(value);
        return span.innerHTML;
    }

    canonicalLinks.forEach((link) => {
        const path = normalizePath(link.getAttribute("data-path"));
        const doc = link.getAttribute("data-doc");
        if (!path || !doc) return;

        link.setAttribute("href", routeUrl(path));

        const record = routes.get(path) || {
            path,
            doc,
            file: doc.split("/").pop(),
            label: link.textContent.trim().replace(/\s+/g, " ") || path,
            links: [],
        };

        record.links.push(link);
        routes.set(path, record);
    });

    routes.forEach((record) => records.push(record));

    function setStatus(message) {
        if (searchStatus) searchStatus.textContent = message;
    }

    function setActiveRoute(path) {
        const activePath = normalizePath(path);
        records.forEach((record) => {
            record.links.forEach((link) => {
                if (record.path === activePath) {
                    link.setAttribute("aria-current", "page");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        });
    }

    function setLoading(path) {
        container.setAttribute("aria-busy", "true");
        container.innerHTML = `
            <section class="section section--lg">
                <div class="section__inner section__stack section__stack-lg">
                    <article class="doc-block doc-block--surface" role="status" aria-live="polite">
                        <header class="doc-block__header">
                            <p class="doc-block__eyebrow">Loading</p>
                            <h1 class="doc-block__title">Loading ${escapeHTML(path)}</h1>
                            <p class="doc-block__summary">Fetching the documentation fragment.</p>
                        </header>
                    </article>
                </div>
            </section>`;
    }

    function clearLoading() {
        container.setAttribute("aria-busy", "false");
    }

    function initializeInjectedBehavior() {
        if (typeof docBlock === "function") {
            docBlock();
        }

        if (window.VDSOverlay && typeof window.VDSOverlay.init === "function") {
            window.VDSOverlay.init({force: true});
            if (typeof window.VDSOverlay.reset === "function") {
                window.VDSOverlay.reset();
            }
        }

        if (window.VDSCommand && typeof window.VDSCommand.init === "function") {
            window.VDSCommand.init();
        }
    }

    function setDocumentTitle(title) {
        document.title = title ? `${title} — VDS` : "VDS Documentation";
    }

    function renderError(path, message) {
        clearLoading();
        setActiveRoute("");
        setDocumentTitle("Documentation not available");
        container.innerHTML = `
            <section class="section section--lg">
                <div class="section__inner section__stack section__stack-lg">
                    <article class="doc-block doc-block--surface" role="alert">
                        <header class="doc-block__header">
                            <p class="doc-block__eyebrow">Docs error</p>
                            <h1 class="doc-block__title">Documentation not available</h1>
                            <p class="doc-block__summary">${escapeHTML(message)}</p>
                        </header>
                        <div class="doc-block__body">
                            <div class="section__inline section__inline-wrap">
                                <button class="button button--primary" type="button" data-doc-retry="${escapeHTML(path)}">Retry</button>
                                <button class="button button--outline" type="button" data-doc-home>Open start guide</button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>`;

        const retry = container.querySelector("[data-doc-retry]");
        const home = container.querySelector("[data-doc-home]");

        if (retry) {
            retry.addEventListener("click", () => loadRoute(retry.getAttribute("data-doc-retry"), {push: false}));
        }

        if (home) {
            home.addEventListener("click", () => loadRoute("home", {push: true}));
        }
    }

    async function loadRoute(path, options = {}) {
        const normalized = normalizePath(path);
        const record = routes.get(normalized);
        const shouldPush = options.push === true;
        const shouldScroll = options.scroll !== false;

        if (!record) {
            renderError(normalized, `No documentation route exists for "${normalized}".`);
            return;
        }

        if (shouldPush && window.location.pathname !== routeUrl(record.path)) {
            history.pushState({docPath: record.path}, "", routeUrl(record.path));
        }

        setActiveRoute(record.path);
        setLoading(record.label);

        try {
            const response = await fetch(record.doc, {cache: "no-cache"});
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const html = await response.text();
            const temp = document.createElement("div");
            temp.innerHTML = html;

            const heading = temp.querySelector("h1, h2, h3");
            const title = heading ? heading.innerText.trim() : record.label;

            container.innerHTML = html;
            clearLoading();
            setDocumentTitle(title);

            if (shouldScroll) {
                window.scrollTo({top: 0, behavior: "smooth"});
            }

            initializeInjectedBehavior();
        } catch (error) {
            renderError(record.path, `The shell could not load ${record.file}. ${error.message}`);
        }
    }

    function routeFromLocation() {
        return normalizePath(window.location.pathname.split("/").filter(Boolean).pop() || "home");
    }

    function clearSearch() {
        if (searchInput) searchInput.value = "";
        if (searchResults) {
            searchResults.innerHTML = "";
            searchResults.hidden = true;
        }
        setStatus("Search documentation by component or topic.");
    }

    function renderSearch(query) {
        if (!searchResults) return [];

        const term = query.trim().toLowerCase();
        searchResults.innerHTML = "";

        if (!term) {
            searchResults.hidden = true;
            setStatus("Search documentation by component or topic.");
            return [];
        }

        const matches = records.filter((record) => {
            return record.label.toLowerCase().includes(term)
                || record.path.includes(term)
                || record.file.toLowerCase().includes(term);
        });

        searchResults.hidden = false;

        if (matches.length === 0) {
            searchResults.innerHTML = `<p>No docs match "${escapeHTML(query)}".</p>`;
            setStatus(`No documentation results for ${query}.`);
            return [];
        }

        searchResults.innerHTML = matches.map((record) => {
            return `<a class="nav__link" href="${routeUrl(record.path)}" role="option" data-doc-search-path="${escapeHTML(record.path)}">${escapeHTML(record.label)}</a>`;
        }).join("");

        setStatus(`${matches.length} documentation result${matches.length === 1 ? "" : "s"} for ${query}.`);
        return matches;
    }

    canonicalLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            clearSearch();
            loadRoute(link.getAttribute("data-path"), {push: true});
        });
    });

    if (searchInput && searchResults) {
        searchInput.addEventListener("input", () => renderSearch(searchInput.value));

        searchInput.addEventListener("keydown", (event) => {
            const matches = renderSearch(searchInput.value);

            if (event.key === "Escape") {
                clearSearch();
                event.preventDefault();
            }

            if (event.key === "Enter" && matches[0]) {
                event.preventDefault();
                clearSearch();
                loadRoute(matches[0].path, {push: true});
            }

            if (event.key === "ArrowDown") {
                const firstResult = searchResults.querySelector("[data-doc-search-path]");
                if (firstResult) {
                    event.preventDefault();
                    firstResult.focus();
                }
            }
        });

        searchResults.addEventListener("click", (event) => {
            const result = event.target.closest("[data-doc-search-path]");
            if (!result) return;

            event.preventDefault();
            const path = result.getAttribute("data-doc-search-path");
            clearSearch();
            loadRoute(path, {push: true});
        });

        searchResults.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                clearSearch();
                searchInput.focus();
                event.preventDefault();
            }
        });
    }

    window.addEventListener("popstate", () => {
        clearSearch();
        loadRoute(routeFromLocation(), {push: false});
    });

    loadRoute(routeFromLocation(), {push: false, scroll: false});
});
