/* =========================
   SEARCH, HIGHLIGHT & ALERT
========================= */
function runSearch() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!input) {
        alert("Please type something to search.");
        return;
    }

    // Remove old highlights
    document.querySelectorAll(".highlighted").forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
    });

    // Search text and highlight
    const bodyText = document.body.innerHTML;
    const regex = new RegExp(`(${input})`, "gi");
    const newText = bodyText.replace(regex, '<span class="highlighted">$1</span>');

    if (bodyText === newText) {
        alert("No results found.");
        return;
    }

    document.body.innerHTML = newText;

    // Scroll to first match
    const firstMatch = document.querySelector(".highlighted");
    if (firstMatch) firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Allow Enter key to search
document.getElementById("searchInput")?.addEventListener("keypress", function(e) {
    if (e.key === "Enter") runSearch();
});


/* =========================
   BACK TO TOP BUTTON
========================= */
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "70px"; // moved up to not block footer icons
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "18px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show button after scroll
window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
