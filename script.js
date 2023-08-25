/* ====== for painting background ====== */

var scenes = document.getElementsByClassName("scene"); 
var overflow = document.getElementById("overflow");

for (var i=0; i<scenes.length; i++) {
    scenes[i].addEventListener('mouseenter', paintingBg, false);
    scenes[i].addEventListener('mouseleave', removeClass, false);
}

function paintingBg(e) {
    e.stopPropagation();
    
    var paintArray = document.getElementsByClassName("paint");
    if(paintArray.length > 6) {
        paintArray[0].remove();
    }
    
    var paint = document.createElement("div");
    paint.setAttribute("class", "paint");
    overflow.appendChild(paint);

    var socialName = document.getElementById("socialName");
    socialName.textContent = e.target.dataset.social;
    socialName.classList.toggle("active");
    
    var socialIcon= e.target.firstElementChild.firstElementChild;
    var computedStyle = window.getComputedStyle(socialIcon);
    var color = computedStyle.getPropertyValue('background-color');
    
    paint.style.left = e.pageX + 'px';      
    paint.style.top = e.pageY - 50 + 'px';  
    
    if (computedStyle.getPropertyValue('background-image') === "none") {
        paint.style.backgroundImage = "none"; 
        paint.style.backgroundColor = color;
    } else paint.style.backgroundImage = computedStyle.getPropertyValue('background-image');
    
    paint.classList.add("hover");    
}


function removeClass () {
    document.getElementById("socialName").classList.toggle("active");
}