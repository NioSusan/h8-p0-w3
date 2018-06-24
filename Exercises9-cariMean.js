//Solution 1 - Using for of
function cariMean(arr) {
  var sum=0;
  for(var num of arr){
    sum+=num;
  }
  return Math.round(sum/arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

/* ============================================================================================= */
//Solution 2 - Using for loops
// function cariMean(arr) {
//   var sum = 0;
//   for( var i = 0; i < arr.length; i++ ){
//       sum += parseInt( arr[i], 10 ); //don't forget to add the base. If the input string begins with "0", radix is eight (octal) or 10 (decimal). Here, 10 is used.
      
//   }   
//   var avg = Math.round(sum/arr.length);
//   return avg;
// }

/* ============================================================================================= */
/* Solution 3 - Using reduce() */
// function cariMean(arr) {  
//   var sum= arr.reduce(function(result, item){
//      return result + item;
//   },0);
//  return Math.round(sum/arr.length);
// }

