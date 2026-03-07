/* =========================
   SEARCH, HIGHLIGHT & ALERT
========================= */
function runSearch() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!input) {
        alert("Please type something to search.");
        return;
    }

    // Remove previous highlights
    document.querySelectorAll(".highlighted").forEach(el => {
        el.replaceWith(document.createTextNode(el.textContent));
    });

    // Find matches in paragraphs and headings
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a");
    let found = false;

    elements.forEach(el => {
        const text = el.textContent;
        const regex = new RegExp(`(${input})`, "gi");
        if (regex.test(text)) {
            const newHTML = text.replace(regex, '<span class="highlighted">$1</span>');
            el.innerHTML = newHTML;
            found = true;
        }
    });

    if (!found) {
        alert("No results found.");
        return;
    }

    // Scroll to first match
    const firstMatch = document.querySelector(".highlighted");
    if (firstMatch) firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Enter key triggers search
document.getElementById("searchInput")?.addEventListener("keypress", function(e) {
    if (e.key === "Enter") runSearch();
});


/* =========================
   BACK TO TOP BUTTON
========================= */
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "70px"; // higher so it doesn't block footer icons
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

// Show button when scrolling
window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
