//Asking the user to chose between even or odd and validate it
let chose;
do{
  chose = prompt("Chose even or odd");
}while(chose.toLowerCase() !== 'even' && chose.toLowerCase() !== 'odd');

//Asking the user to pick a number between 1 and 5 and validate it
let userNumber;
do{
  userNumber = parseInt(prompt("Now chose a number between 1 and 5"));
}while(userNumber < 1 || userNumber > 5);

console.log("You chose " + chose.toLowerCase());
//Generate a random number for the IA
const AINumber = numberRandom(1,6);

//Check if the sum of AInumber and the userNumber is even and the user chose even, the user win
if(isEven(AINumber + userNumber) && chose.toLowerCase() == "even")
    console.log(`${AINumber} + ${userNumber} = ${AINumber + userNumber}  You win`)
//Check if the sum of AInumber and the userNumber is odd and the user chose odd, the user win
else if(!isEven(AINumber + userNumber) && chose.toLowerCase() == "odd")
    console.log(`${AINumber} + ${userNumber} = ${AINumber + userNumber}  You win`)
//else the user lose
else
    console.log(`${AINumber} + ${userNumber} = ${AINumber + userNumber}  You lose`)

//Random number function 
function numberRandom(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

//Function to check if the number is even
function isEven(n){  
  return (!(n%2)) ? true : false;
}
