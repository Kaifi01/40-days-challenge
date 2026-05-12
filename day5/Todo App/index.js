const taskInput=document.getElementById("taskInput");
const addbtn=document.getElementById("addbtn");
const tasklist=document.getElementById("tasklist");
const error=document.getElementById("error");
const taskcount=document.getElementById("taskcount");

let count=0;
addbtn.addEventListener("click",function(){
   const taskText=taskInput.value.trim();
   //Empty validation
   if (taskText==="") {
       error.innerText="Please Enter a Task!";
       return
   }
   error.innerHTML="";
   //create Li
   const li=document.createElement("li");
  //task text
  const span=document.createElement("span");
  span.innerHTML=taskText;

  //toogle completed
  span.addEventListener("click",()=>{
  span.classList.toggle("completed")
  })
  //delete button
  const deleteBtn=document.createElement("button");
  deleteBtn.innerHTML="Delete";

  deleteBtn.addEventListener("click",()=>{
   li.remove();
   count--;
   taskcount.innerText=count;
  })

  li.appendChild(span);
   li.appendChild(deleteBtn)
  tasklist.appendChild(li)
    //count update
    count++;
    taskcount.innerText=count;
    //clear input
    taskInput.value="";
})