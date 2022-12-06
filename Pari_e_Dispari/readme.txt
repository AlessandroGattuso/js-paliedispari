1 - Ask the user the inputs
    1.1 - Ask the user to chose even or odd
    1.2 - Ask the user to type a number between 1 and 6 
2 - Generate one random number between 1 and 6 for the AI with the function numberRandom(min,max)
3 - IF the return of the function isEven(number) is true and the user chose is even
              - Print: "User win"

3 - ELSE IF the return of the function isEven(number) is false and the user chose is odd
              - Print: "User win"

4 - ELSE  
              - Print: "AI win"

5 - isEven function
      5.1 - IF N is even
               return true
      5.2 - ELSE
               return false

6 - randomNumber(min, max)
      6.1 - return the random number bewteen 1 and 6
              6.1.1 - formula =>  random number(between 0 and 1, Math.random()) 
              6.1.2 - moltiply that number to (max - min) => range of our number(min, max)
              6.1.3 - add to that number min(number + min) 
              6.1.4 - floor that number 
              6.1.5 - return the result number