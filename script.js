function runSearch() {

    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!input) return;

    document.querySelectorAll(".search-highlight").forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });

    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a");

    let found = false;

    elements.forEach(el => {

        const text = el.textContent.toLowerCase();

        if (text.includes(input)) {

            const regex = new RegExp(`(${input})`, "gi");

            const replaced = el.innerHTML.replace(
                regex,
                `<span class="search-highlight" style="background:yellow;">$1</span>`
            );

            if (replaced !== el.innerHTML) {
                el.innerHTML = replaced;
                found = true;
            }

        }

    });

    if (!found) {
        alert("No results found.");
        return;
    }

    const first = document.querySelector(".search-highlight");

    if (first) {
        first.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

}


document.addEventListener("DOMContentLoaded", function(){

    const searchBox = document.getElementById("searchInput");

    if (searchBox) {
        searchBox.addEventListener("keypress", function(e){
            if (e.key === "Enter") {
                runSearch();
            }
        });
    }

});

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "80px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 14px";
topBtn.style.fontSize = "18px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "100";

document.body.appendChild(topBtn);

window.addEventListener("scroll", function(){

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
