let text=document.getElementById("text");
let count=document.getElementById("count");
let warning=document.getElementById("warning");

text.addEventListener("input",function(){
 let length=text.value.length;
  count.innerText=length;

  if (length >50) {
     warning.innerHTML="Limit exceeded!";
     text.style.border="2px solid red"
  }else{
     warning.innerText = "";
        text.style.border = "1px solid black";
  }

})