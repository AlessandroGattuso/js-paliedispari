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

//Optimal Palindrome check function
function IsPalindrome_optimal(word){ 
  let i = 0;
  let j = word.length - 1;
  //TwoPointer algorithm 
  while(i < j){
      if(word[i] != word[j])
            return false;
      ++i;
      --j;
  }
  return true;
}

//Palindrome check function
function IsPalindrome(word){
  return (word.split("").reverse().join("") == word) ? true : false;
}