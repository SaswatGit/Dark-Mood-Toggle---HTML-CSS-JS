var icon = document.getElementById("icon");
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");

sun.style.display = "none";
icon.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        moon.style.display = "none";
        sun.style.display = "block";
    }else{
        moon.style.display = "block";
        sun.style.display = "none";
    }
});