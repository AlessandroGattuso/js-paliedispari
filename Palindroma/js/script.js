//Asking the user a word
const word = prompt("Type a word");

//Check if the word is a palindrome word
(IsPalindrome(word)) ? 
  console.log("The word you chose is a palindrome word") :
  console.log("The word you chose is not a palindrome word");

//Check if the word is a palindrome word with optimal solution
(IsPalindrome_optimal(word)) ? 
  console.log("The word you chose is a palindrome word") :
  console.log("The word you chose is not a palindrome word");

//Palindrome check function
function IsPalindrome(word){
  //Take the string, reverse it and compare it with our word
  return (word.split("").reverse().join("") === word) ? true : false;
}

//Optimal Palindrome check function
function IsPalindrome_optimal(word){ 
  let i = 0;
  //TwoPointer algorithm 
  while(i < word.length - (i + 1)){
      if(word[i] != word[word.length - (i + 1)])
            return false;
      ++i;
  }
  return true;
}
