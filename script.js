/* =========================
   SEARCH WITH HIGHLIGHT AND SCROLL
========================= */
function runSearch() {
    // Remove any previous highlights
    document.querySelectorAll('.highlighted').forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize(); // merge text nodes
    });

    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!input) {
        alert("Please type something to search.");
        return;
    }

    const contentAreas = document.querySelectorAll("main, header, nav, footer");
    let found = false;

    for (let area of contentAreas) {
        const html = area.innerHTML;
        const lowerHtml = html.toLowerCase();

        if (lowerHtml.includes(input)) {
            // wrap first occurrence with a span
            const regex = new RegExp(`(${input})`, "i");
            area.innerHTML = html.replace(regex, '<span class="highlighted">$1</span>');

            const highlight = area.querySelector('.highlighted');
            highlight.scrollIntoView({ behavior: "smooth", block: "center" });

            found = true;
            break;
        }
    }

    if (!found) {
        alert("No results found.");
    }
}

// Trigger search on Enter
document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchInput");
    if (searchBox) {
        searchBox.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                runSearch();
            }
        });
    }
});

/* =========================
   BACK TO TOP BUTTON
========================= */
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "70px"; // leave space for footer icons
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "18px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.border = "none";
topBtn.style.borderRadius = "5px";
topBtn.style.background = "#5a82c1";
topBtn.style.color = "white";
topBtn.style.zIndex = "50"; // above other elements

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   HIGHLIGHT STYLE
========================= */
const style = document.createElement('style');
style.innerHTML = `
.highlighted {
    background-color: #f1f05a;
    color: #14296a;
    padding: 2px 2px;
    border-radius: 3px;
}
`;
document.head.appendChild(style);
