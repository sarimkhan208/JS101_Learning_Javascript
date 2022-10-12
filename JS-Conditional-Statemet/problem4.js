// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


//--> data that stored 

let stored_username = "masai123@gmail.com";
let stored_pass = "masai123";

//--> data that give as input

let input_username = "masai123@gmail.com"
let input_pass = "masai123";

if((stored_username == input_username) & (stored_pass == input_pass)){
  console.log("Login Successfull");
}
else{
  console.log("Incorrect!")
}

// -- sorry for long variable declaration name-:)
