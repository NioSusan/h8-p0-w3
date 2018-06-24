//Solution 1
function tentukanDeretGeometri(arr) {
    var n=arr[1]/arr[0];
    for(var i=0;i<arr.length-1;i++){
      if(arr[i]*n !== arr[i+1]){
        return false;
      }
    }
    return true;
}
  
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

//Solution 2
// function tentukanDeretGeometri(arr) {
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
//                return false; //it's arimethic progression
//           } else if(geoCount===arr.length-2) {
//                return true; //it's geometric progression!!!
//           }      
//       }    
// }
