//after 2 scoend message show
// setTimeout(()=>{
//  console.log("hi");
 
// },2000)


// setTimeout(display,2000);
// function display(){
//     console.log("display function");
    
// }
// const save=document.querySelector(".save-btn");
// const message=document.querySelector(".message");
// save.addEventListener("click",saveuser);
// function saveuser(){
//     message.textContent="user registrtion sucessfully";
//     setTimeout(() => {
//          message.textContent="";
//     }, 2000);
// }

//set interval
// const save=document.querySelector(".save-btn");
// const message=document.querySelector(".message");

// save.addEventListener("click",dispalycount);
// function dispalycount(){
//        let count=0;
//     message.textContent=count;
//     setInterval(()=>{
//     count++
//  message.textContent=count
//     },2000)
// }


//callback and higher order function
// function greet(callback){
//    callback();
// }
// function name(){
//     console.log("my name is kaifi ali mallick");
    
// }
// greet(name)

//promise


// const task=new Promise((resolve,reject)=>{
//     let completed=true;
//     if (completed) {
//          resolve("Login sucessfull")
//     }else{
//         reject("login failur")
//     }
// })
// task.then((res)=>{
//     console.log(res);
    
// })
// console.log("kaifi");
//Api data console log with fetch
// async function getdata() {
//     const res=await fetch("https://randomuser.me/api/");
//     const res1=res.json();
//     console.log(res1);
    
// }
//  getdata()