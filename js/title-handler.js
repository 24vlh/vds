document.addEventListener("DOMContentLoaded", function () {
    const source = document.getElementById("doc-title");
    if (!source) return;

    const titleText = source.dataset.title || "";

    // Update <title>
    document.title = titleText;

    // Update H1
    const h1 = document.getElementById("doc-title-target");
    if (h1) h1.textContent = titleText;
});