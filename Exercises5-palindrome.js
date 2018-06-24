//Solution 1 - Using for loops
function palindrome(kata) {
  var str="";
  for(var i=kata.length-1;i>=0;i--){
    str+=kata[i];
  }
  return kata===str;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

/* ===================================================================================== */
//Solution 2 - Using regex and split("").reverse().join("")
// function palindrome(kata) {
//     // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
//      var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
     
//      var lowRegStr = kata.toLowerCase().replace(re, '');
        
//      // Step 2. Use built-in functions split() reverse() join()
//      var reverseStr = lowRegStr.split('').reverse().join(''); 
      
//      // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
//      return reverseStr === lowRegStr; // "katak" === "katak" ? => true
// }

//Solution 3 - Using pop() 
// function palindrome(word){
//     var letters =[]; //this is our stack
//     var rword="";
  
//     for(var i=0; i<word.length; i++){
//       letters.push(word[i]); 
//     }
  
//     for(var j=0; j<word.length; j++){
//       rword += letters.pop();
//     }
  
//     if(rword === word){
//       return true
//     } else {
//       return false
//     }
// }
  

   
   