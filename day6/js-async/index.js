// //message show after 2 scoend
// const btn=document.querySelector(".btn");
// const prag=document.querySelector(".prag");

// btn.addEventListener("click",()=>{
//    setTimeout(()=>{
//   prag.innerHTML="hello kaifi"
//    },2000)
// })

//promise create
// const task1= new Promise((resolve,reject)=>{
//     const task1completed=true;
//     if (task1completed) {
//          resolve("tas1 comleted")
//     }else{
//         reject("not completed")
//     }
// })

// const task2= new Promise((resolve,reject)=>{
//     const task2completed=false;
//     if (task2completed) {
//          resolve("task2 comleted")
//     }else{
//         reject("not completed")
//     }
// })
// const task3= new Promise((resolve,reject)=>{
//     const task3completed=true;
//     if (task3completed) {
//          resolve("task2 comleted")
//     }else{
//         reject("not completed")
//     }
// })


// task1.then((res)=>{
//     console.log(res);
//      return task2
// }).then((res)=>{
// console.log(res);
// return task3

// }).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

//Fetch with api data
// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((res)=>{
//   let res1=res.json();
//   return res1
    
// }).then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })