// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let i = 0;
let sum = 0;
let count = 0;
while (i<=100){
  if(i%2==0){
    sum = sum+i;
    count++;
  }
  i++
}
console.log("Total sum = ",sum," Total count = ",count," and Average = ",sum/count);