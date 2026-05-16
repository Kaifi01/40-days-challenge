const load=document.getElementById("loding");
const name1=document.getElementById("name");
const email=document.getElementById("email");
const img=document.getElementById("user-img")
const btn=document.getElementById("btn");

async function getuser() {
    load.style.display="block";
    img.style.display="none";
    name1.textContent="";
    email.textContent="";
    try {
        const res= await fetch("https://randomuser.me/api/");
        const data= await res.json();
         const user=data.results[0];
         console.log(user);
         
    img.src=user.picture.large;
    name1.textContent=`${user.name.first} ${user.name.last}`;
    email.textContent=`${user.email}`;
    load.style.display="none";
    img.style.display="block"

        
    } catch (error) {
        load.textContent="Error Loading user";
        console.log(error);
        
    }
    
}
btn.addEventListener("click",getuser);
//1 time load
getuser()