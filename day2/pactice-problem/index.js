// 1)1-10 print using loop
// for (let index = 1; index <=10; index++) {
  
//     console.log(index);
    
// }

//even number

// 2) for (let index = 1; index <=10; index++) {
//    if (index%2===0) {
//       console.log(index);
      
//    }
    
// }

//3)array sum

// const arr=[2,2,3,7,9];

// let sum=0;
   
// for (let index = 0; index < arr.length; index++) {
//    sum=arr[index]+sum
    
// }
// console.log(sum);

//4)array odd number filter
// 
// const arr=[1,5,2,6,4,3,9,8];

// let res=arr.filter((item,ind,arr)=>{
//  return   item %2===0
// })
// console.log(res);

// 5)names array theke every name uppercase

// const arr=["kaifi","roni","ppathalk","nalpona"];
//  const res=arr.map((val,ind,arra)=>{
//    let fcapi=val.charAt(0).toUpperCase();
//     let res2=fcapi+val.slice(1)

    
//     return  res2
     
//  })
//  console.log( res);
 
//6) find first number  > 10

const arr=[10,5,12,15,9,8];

const res=arr.find((item,ind,arr)=>{
      return item >10
})
console.log(res);
