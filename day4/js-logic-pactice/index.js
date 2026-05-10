//1) remove duplicate from array
const arr=[5,9,5,8,2,4,5];
const res=arr.filter((val,ind,arr)=>{
     return arr.indexOf(val)===ind
})
console.log(res);
