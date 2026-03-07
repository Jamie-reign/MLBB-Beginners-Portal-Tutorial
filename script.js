function runSearch() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();
    
    if(input === ""){
        alert("Please type something to search.");
        return;
    }
    let elements = document.querySelectorAll("h1, p, a");
    let found = false;

    elements.forEach(el => {
        el.style.backgroundColor = "";
        if(el.innerText.toLowerCase().includes(input)){
            if(!found) {
                el.scrollIntoView({behavior: "smooth", block: "center"});
                found = true;
            }
            el.style.backgroundColor = "#ffff0040";
            setTimeout(() => { el.style.backgroundColor = ""; }, 1500);
        }
    });

    if(!found){
        alert("No results found.");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    let searchBox = document.getElementById("searchInput");

    if(searchBox){
        searchBox.addEventListener("keypress", function(e){
            if(e.key === "Enter"){
                runSearch();
            }
        });
    }
});

document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e){
        let target = document.querySelector(this.getAttribute("href"));
        if(target){
            e.preventDefault();
            target.scrollIntoView({behavior: "smooth"});
        }
    });
});


/* =========================
   BACK TO TOP BUTTON FIXED
========================= */

let topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "80px"; // start above footer
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "18px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.border = "none";
topBtn.style.borderRadius = "5px";
topBtn.style.backgroundColor = "#5a82c1";
topBtn.style.color = "white";
topBtn.style.zIndex = "1000";

document.body.appendChild(topBtn);

window.addEventListener("scroll", function() {
    let footer = document.querySelector("footer");
    let footerTop = footer.getBoundingClientRect().top;

    // Show button if scrolled down and footer is not in view
    if(window.scrollY > 300 && footerTop > window.innerHeight){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Smooth scroll to top on click
topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
