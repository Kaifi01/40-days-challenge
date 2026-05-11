const users = [
 {id:1,name:"Rahul",age:20,salary:2000},
 {id:2,name:"Aman",age:17,salary:3000},
]
//1)get all  name
// for (const key in users) {
   
//   console.log(users[key].name);
  
    
    
// }
// const res=users.map((val)=>{
//     return val.name
// })
// console.log(res);
//2) Filter 18+ users
 
// const res=users.filter((val)=>{
//     return  val.age >18
// })
// console.log(res);
//3)  Total salary

// const res=users.reduce((acc,cur)=>{
//   return acc=cur.salary+acc
// },0)
// console.log(res);
//4)find user by id
// const res=users.find((val,ind,arr)=>{
//     return val.id===2
// })
// console.log(res);
//check every student passed or not
// const students = [
//   { name: "Rahim", marks: 80 },
//   { name: "Karim", marks: 30 },
//   { name: "Sohan", marks: 60 }
// ];
// const result=students.every((val)=>{
//     return val.marks >33
// })
// console.log(result);
