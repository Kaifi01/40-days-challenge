
let box=document.getElementById("box");
let buttons=document.querySelectorAll("button");
function changeColor(color,btn){
box.style.backgroundColor=color;
buttons.forEach(b=>b.classList.remove("active"));
  btn.classList.add("active")

}