//Asking the user a word
const word = prompt("Type a word");

//Check if the word is a palindrome word
(IsPalindrome(word)) ? 
  console.log("The word you chose is a palindrome word") :
  console.log("The word you chose isn't a palindrome word");


//Palindrome check function
function IsPalindrome(word){ 
  let i;
  let j = word.length - 1;
  //TwoPointer algorithm 
  for(i = 0; i <= j; ++i, --j)
      if(word[i] != word[j])
            return false;

  return true;
}