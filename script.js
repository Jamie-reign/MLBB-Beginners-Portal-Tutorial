// =========================
// SEARCH FUNCTIONALITY
// =========================
function runSearch() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let content = document.body.innerText.toLowerCase();

    if (input === "") {
        alert("Please type something to search.");
        return;
    }

    if (content.includes(input)) {
        alert("Found results for: " + input);
    } else {
        alert("No results found.");
    }
}

// Trigger search when Enter key is pressed
document.addEventListener("DOMContentLoaded", function() {
    let searchBox = document.getElementById("searchInput");
    if (searchBox) {
        searchBox.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                runSearch();
            }
        });
    }
});


// =========================
// BACK TO TOP BUTTON (SAFE ABOVE FOOTER)
// =========================

// Create button
let topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.style.position = "fixed";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "18px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.border = "none";
topBtn.style.borderRadius = "5px";
topBtn.style.backgroundColor = "#5a82c1";
topBtn.style.color = "white";
topBtn.style.zIndex = "1000"; // On top
document.body.appendChild(topBtn);

// Footer height detection
let footer = document.querySelector("footer");

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;
    let bodyHeight = document.body.scrollHeight;
    let footerHeight = footer.offsetHeight;

    // Show button after scrolling 300px
    if (scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    // Move button above footer if near bottom
    if (scrollY + windowHeight >= bodyHeight - footerHeight) {
        topBtn.style.bottom = (footerHeight + 20) + "px";
    } else {
        topBtn.style.bottom = "20px";
    }

    topBtn.style.right = "20px";
});

// Scroll to top
topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
