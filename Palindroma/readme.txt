1 - Ask the the input to the user(in this case a word)
2 - IF the return of check palindrome function is true
          - Print: "The word you chose is a palindrome word";
3 - ELSE 
          - Print: "The word you chose is not a palindrome word";

4 - Is palindrome function:
     4.1 - split the user string
     4.2 - reverse the user string
     4.3 - join the user string
     4.4 - IF the result string is equal to the user string
              - return true
     4.5 - ELSE  
              - return false

5 - Palindrome optimal function(at least by space) (TWO POINTER Algoritmh)
     5.1 - Create the index i and initialate to 0
     5.2 - WHILE i is minor to the length of the string - (i + 1)
            5.2.1 - IF letter[i] is different to the letter[lenght of the string - (i + 1)]
                                      - return false
     5.3 - return true

      //EXAMPLE
           s = 'TENET';

           Palindrome optimal function(s){  
                 i = 0
                 j =  s.length - (i + 1)
                
                while(i < j){
                  i            j    =====>  i = 0  
                  [T, E, N ,E, T]         if the two letters are different break the cycle and say 's' is not a palindrome word

                      i     j       =====>  i = 1
                  [T, E, N ,E, T]         //same thing 
                }

                return true;    // we know the two halfs of the word are equal so we can safely return true;
           }  