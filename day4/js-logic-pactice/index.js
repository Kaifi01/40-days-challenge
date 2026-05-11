//1) remove duplicate from array
// const arr=[5,9,5,8,2,4,5];
// const res=arr.filter((val,ind,arr)=>{
//      return arr.indexOf(val)===ind
// })
// console.log(res);
//2) find scoend largest number


// const arr = [10, 5, 8, 20, 15];
// let largest=arr[0];
// let scoendlargest=arr[0];
// for (const num of  arr) {
//       if (num >largest) {
//              scoendlargest=largest
//           largest=num
//       }

//       if ( num >scoendlargest && num!==largest) {
//             scoendlargest=num
//       }
// }
// console.log("scoend largest: "+scoendlargest);

//3) Count how many times a character appears
// const str="javascript";
// const char="a";
// let count=0;
// for (const ch of str) {
//      if (char===ch) {
//             count++
//      }
// }
// console.log(count);
// //4)Swap Two Variables in JavaScript
// let a=10;
// let b=20;

// // let temp =a;
// // a=b;
// // b=temp
// [a,b]=[b,a]
// console.log(a);
// console.log(b);
//5) prime number check

// function prime(num){
//   if (num <=1) return false;
  
//   for (let i=2 ; i<num; i++) {
//      if (num %i===0) {
//            return false
//      }
     
//   }

  
//   return true

// }
// console.log(prime(11));
