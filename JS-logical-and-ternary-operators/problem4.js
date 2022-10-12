// Problem 4: Given 3 numbers (all different values), print which is greatest

let a = 101;
let b = 7;
let c = 8;

if(a>b && a>c){
  console.log(a,"is greater than both",b,c)
}
else if(b>a && b>c){
  console.log(b,"is greater than both",a,c)
}
else if(c>b && c>a){
  console.log(c,"is greater than both",a,b)
}