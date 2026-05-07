let showi = document.getElementById("show");
let showhead= document.getElementById("show1")
let decbtn = document.getElementById("disa");

function buttondisable(){
     let curval=Number(showi.innerText);
     if (curval===0) {
        decbtn.disabled=true;
     }else{
        decbtn.disabled=false
     }
}
function increase() {
  let curval = Number(showi.innerText);

  if (curval < 5 ) {
    showi.innerText = curval + 1;
     showi.style.color="green"
    showhead.style.color="green"
  }   
    else{
     showi.style.color="black"
    showhead.style.color="black"
  }


 if( curval===5){
 showi.style.color="red"
    showhead.style.color="red"
  }
   buttondisable()
}


function decrease() {
    let curval = Number(showi.innerText);
   if (curval > 0 ) {
        
        showi.innerText = curval - 1;
         showi.style.color="green"
    showhead.style.color="green"
    }
     if ( curval-1 === 0){
         showi.style.color="black"
    showhead.style.color="black"
      
    }
    buttondisable()
}

function reset(){
  
     showi.innerText = 0;
      showi.style.color="black"
    showhead.style.color="black"
    buttondisable()
}