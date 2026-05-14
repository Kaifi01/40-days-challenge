let locativiondiv=document.querySelector(".location-div");

let p1=locativiondiv.children[0];
p1.textContent=location.href;

let p2=locativiondiv.children[1];
p2.textContent=location.protocol;

let p3=locativiondiv.children[2];
p3.textContent=location.hostname;

let p4=locativiondiv.children[3];
p4.textContent=location.port;
 
let p5=locativiondiv.children[4];
p5.textContent=location.pathname;

const visitbutton=document.getElementById("visit-button");
visitbutton.addEventListener("click",function(){
    location.assign("https://www.google.com/")
})