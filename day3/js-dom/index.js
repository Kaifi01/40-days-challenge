let inputfeild = document.querySelector("#inputfeild");
 let showtext=document.querySelector("#showtext")
inputfeild.addEventListener("input", function () {

    if (inputfeild.value === "") {
        inputfeild.placeholder = "Please type something";
        showtext.innerHTML="please type something"
    }  else{
  showtext.innerHTML=inputfeild.value
    }
       
    

});