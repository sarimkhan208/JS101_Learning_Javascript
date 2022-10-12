// Problem 3 : Given an array of numbers find the average of all the even numbers.

let arr = [1,2,3,4,5,6,7,9,99,54,345];
let sum=0;
let count=0;
for(i=0; i<arr.length; i++){
  if(arr[i]%2==0){
    sum+=arr[i];
    count++;
  }
}
console.log(sum,count);