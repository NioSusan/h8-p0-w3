//Solution 1 
function targetTerdekat(arr) {
  if(arr.indexOf("x")===-1 || arr.indexOf("o")===-1){
    return 0;
  }
  var xPos=arr.indexOf("x");//first x at index 5
  var oPos= arr.indexOf("o");//first o at index 2
  var distance=Math.abs(xPos-oPos)//distance between them is 3

  //Checking if there is a closer distance
  for(var i in arr){
    if(arr[i]!==" "){
      if(arr[i]==="o"){
        if((Math.abs(i-xPos))<distance){
          oPos=i;
          distance=Math.abs(i-xPos);
        }
      }else{
        if((Math.abs(i-oPos))<distance){
          xPos=i;
          distance=Math.abs(i-oPos);
        }
      }
    }
  }
  return distance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

/* ================================================================================= */
//Solution 2
// function targetTerdekat(arr) {
//   var CurrentIndexO;
//   var CurrentIndexX;
//   var minDistance;

//   for(var i=0; i<arr.length; i++){
//     if(arr.indexOf("x")=== -1){
//       return 0;
//     }
//   }

//   for(var i=0; i<arr.length; i++){
//     if(arr[i] !== "o"){
//       // console.log(i + " is not o");
//     } else {
//       // console.log(i + " is o!");
//       CurrentIndexO = i;
//       break;
//     }
//   }

//    for(var j=0; j<arr.length; j++){
//       if(arr[j] !== "x"){
//         // console.log(j + " is not x");
//       } else if(arr[j]==="x" && (Math.abs(j-CurrentIndexO))===1) {
//         // console.log(j + " is x & =1!");
//         CurrentIndexX = j;
//         break;
//       } else if(CurrentIndexX === undefined ){
//         // console.log(j + " is x because CurrentIndexX is undefined!");
//         CurrentIndexX = j;
//       } else if((Math.abs(j-CurrentIndexO))<(Math.abs(CurrentIndexX-CurrentIndexO))){
//         CurrentIndexX = j;
//         // console.log(j + " is x because the distance < than last index!");
//       }
//     }
    
//    return minDistance= Math.abs(CurrentIndexX - CurrentIndexO);
     
// }
  
  