//Solution 1 - Using for loops
function mengelompokkanAngka(arr) {
    var even = [];
    var odd = [];
    var multiples = [];
  
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
              even.push(arr[i]);
          } else if (arr[i] % 3 === 0) {
              multiples.push(arr[i]);
          } else {
              odd.push(arr[i]);
          }
      }
      return [even, odd, multiples];
  }
  
// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  
/* Solution 2 - using for ...of */
// function mengelompokkanAngka(arr) {
//     var even = [];
//     var odd = [];
//     var multiples = [];
  
//     for(var num of arr){
//       if(num%2===0 && num%3!==0){
//         even.push(num);
//       } else if(num%3===0){
//         multiples.push(num);
//       } else {
//         odd.push(num);
//       }
//     }
//     var result=[];
//     result.push(even, odd, multiples);
//     return result;
// }
  
//Solution 3 - Using nested for loops
// function mengelompokkanAngka(arr) {
//   var result=[];
//   var box=[];
//   for(var i=0;i<3;i++){
//     for(var j=0;j<arr.length;j++){
//       if(i===0){
//         if(arr[j] % 2 === 0 && arr[j] % 3 !== 0){ //evens
//           box.push(arr[j]);
//         }
//       } else if (i===1){
//         if(arr[j] % 2 !== 0 && arr[j] % 3 !== 0){ //odds
//           box.push(arr[j]);
//         }
//       } else if (i===2){
//         if(arr[j] % 3 === 0){ //multiply of 3
//           box.push(arr[j]);
//         }
//       }
//     }
//   result.push(box);
//   box=[];
//   }
//   return result;
// }