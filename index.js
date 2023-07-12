const input = "Joseph";

function reverseString(input){
   //empty string variable 
   let x  = ""
   // using array variable 
   let y = []
   // loop the input string 
   for(let i = input.length - 1; i >= 0; i--){
       // because i in the loop  defines the current iteration 
       // then that element in the string is our currrent character 
       // append this current character  to the empty string 
       x += input[i]
       y.push(input[i])  // adding the current character to the 
       // empty array

   }
   // returning the array y 
   let xy = y.join('')
   console.log(xy)
   return x;
   
}

console.log(reverseString(input))


// approaching this from an array 
// method based
function arrayReverseString(input){
   const chars  = input.split('') // converts a string into an array 
   const reversedChar = chars.reverse() // reverses the order of elements in the array 
   // returning as a string 
   const reversedString = reversedChar.join('') // returns array as a string 
   return reversedString;
}


console.log(arrayReverseString("Hello World"))



