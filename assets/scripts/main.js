let menuIcon = document.getElementById("menu-icon")
let toggleTheme = document.getElementById("toggle-theme");
let menu =document.getElementById("menu");

let layer =document.createElement("div");
layer.className="layer";

menuIcon.onclick=()=>{
    if(menu.classList.contains("menu") ){
        menu.classList.remove("menu");
        layer.remove()
    }else{
        menu.classList.add("menu");
    document.querySelector("main").appendChild(layer);
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
fetch (`https://www.myjsons.com/v/b7d03829`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        let morningList ="";
        for(let i = 0;i<data["أذكار الصباح"].length; i++){
            morningList +=`
                <li><span>${data["أذكار الصباح"][i].content}</span>&nbsp;&nbsp;&nbsp;<span class="count">(${data["أذكار الصباح"][i].count})</span></li>
            `
        }
        document.getElementById("morning-remembrances").innerHTML = morningList;

        let eveningList ="";
        for(let i = 0;i<data["أذكار المساء"].length; i++){
            eveningList +=`
                <li><span>${data["أذكار المساء"][i].content}</span>&nbsp;&nbsp;&nbsp;<span class="count">(${data["أذكار المساء"][i].count})</span></li>
            `
        }
        document.getElementById("evening-remembrances").innerHTML = eveningList;

        let afterPrayerList ="";
        for(let i = 0;i<data["أذكار بعد السلام من الصلاة المفروضة"].length; i++){
            afterPrayerList +=`
                <li><span>${data["أذكار بعد السلام من الصلاة المفروضة"][i].content}</span>&nbsp;&nbsp;&nbsp;<span class="count">(${data["أذكار بعد السلام من الصلاة المفروضة"][i].count})</span></li>
            `
        }
        document.getElementById("after-prayer-remembrances").innerHTML = afterPrayerList;
        
        let rosariesList ="";
        for(let i = 0;i<data["تسابيح"].length; i++){
            rosariesList +=`
                <li><span>${data["تسابيح"][i].content}</span>&nbsp;&nbsp;&nbsp;<span class="count">(${data["تسابيح"][i].count})</span></li>
            `
        }
        document.getElementById("rosaries-remembrances").innerHTML = rosariesList;
        
        let sleepingList ="";
        for(let i = 0;i<data["أذكار النوم"].length; i++){
            sleepingList +=`
                <li><span>${data["أذكار النوم"][i].content}</span>&nbsp;&nbsp;&nbsp;<span class="count">(${data["أذكار النوم"][i].count})</span></li>
            `
        }
        document.getElementById("sleeping-remembrances").innerHTML = sleepingList;
        
        let wakeUpList ="";
        for(let i = 0;i<data["أذكار الاستيقاظ"].length; i++){
            wakeUpList +=`
                <li><span>${data["أذكار الاستيقاظ"][i].content}</span>&nbsp;&nbsp;&nbsp;<span class="count">(${data["أذكار الاستيقاظ"][i].count})</span></li>
            `
        }
        document.getElementById("wake-up-remembrances").innerHTML = wakeUpList;
        
        let quranSupplicationsList ="";
        for(let i = 0;i<data["أدعية قرآنية"].length; i++){
            quranSupplicationsList +=`
                <li><span>${data["أدعية قرآنية"][i].content}</span>&nbsp;&nbsp;&nbsp;<span class="count">(${data["أدعية قرآنية"][i].count})</span></li>
            `
        }
        document.getElementById("quran-supplications").innerHTML = quranSupplicationsList;
        
        let prophetsSupplicationsList ="";
        for(let i = 0;i<data["أدعية الأنبياء"].length; i++){
            prophetsSupplicationsList +=`
                <li><span>${data["أدعية الأنبياء"][i].content}</span>&nbsp;&nbsp;&nbsp;<span class="count">(${data["أدعية الأنبياء"][i].count})</span></li>
            `
        }
        document.getElementById("prophets-supplications").innerHTML = prophetsSupplicationsList;
        
    })