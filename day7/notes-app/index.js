

const noteinput=document.getElementById("noteinput");
const addbtn=document.getElementById("addBtn");
const nodelist=document.getElementById("nodelist");
const notes=JSON.parse(localStorage.getItem("notes")) || [];

addbtn.addEventListener(("click"),()=>{
    const notetext=noteinput.value.trim();
    if (notetext==="") return;
    notes.push(notetext);
    localStorage.setItem("notes",JSON.stringify(notes));
    displaynotes()
      noteinput.value="";
})
displaynotes()
function displaynotes(){
    nodelist.innerHTML="";
  
    notes.map((node,ind)=>{
          const li=document.createElement("li");
      li.innerHTML=`
        ${node}
        <button onclick="deletenotes(${ind})">Delete </button/>
        `
          nodelist.appendChild(li)
    })

  
}

function deletenotes(ind){
    notes.splice(ind,1);
    localStorage.setItem("notes",JSON.stringify(notes))
     displaynotes()
}