//Solution 1
function tentukanDeretAritmatika(arr) {
    var n = arr[1]-arr[0];//2-1=1
    for(var i=0;i<arr.length-1;i++){ //ignore the last num
      if((arr[i]+n)!==(arr[i+1])){
        return false;
      }
    }
    return true;
}
  
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

/* =============================================================================== */
//Solution 2
// function tentukanDeretAritmatika(arr) {
//     var arthCount=0;
//     var geoCount=0;
//       for (var i=0;i<arr.length-2;i++){
//           if(arr[i+1]-arr[i]===arr[i+2]-arr[i+1]){
//                arthCount++;
//           } else if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
//                geoCount++;
//           } else {
//             return false; //it's neither arimethic or geometric progression
//           }
  
//           if(arthCount===arr.length-2) {
//                return true; //it's arimethic progression!!!
//           } else if(geoCount===arr.length-2) {
//                return false; //it's geometric progression 
//           }      
//       }    
// }
