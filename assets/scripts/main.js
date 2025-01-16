let menuIcon = document.getElementById("menu-icon")
let toggleTheme = document.getElementById("toggle-theme");
let menu =document.getElementById("menu");
menuIcon.onclick=()=>{
    if(menu.classList.contains("menu") ){
        menu.classList.remove("menu");
    }else{
        menu.classList.add("menu");
    }
}
toggleTheme.onclick=()=>{
    if(document.body.classList.contains("theme")){
        document.body.classList.remove("theme");
        toggleTheme.src="assets/icons/moon.webp";
        menuIcon.src="assets/icons/menu_light.webp"
    }else{
        document.body.classList.add("theme");
        toggleTheme.src="assets/icons/sun.webp";
        menuIcon.src="assets/icons/menu_dark.webp";
        }
    }