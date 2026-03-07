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


let topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "18px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
document.body.appendChild(topBtn);

window.addEventListener("scroll", function(){
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: "smooth"});
});
