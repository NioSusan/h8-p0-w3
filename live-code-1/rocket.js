// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawThreeColsBox yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah angka dengan pola pemunculan tiga angka berurut sebagai berikut:

contoh 1 (drawThreeColsBox(3)):
1 2 3
4 5 6
7 8 9

contoh 2 (drawThreeColsBox(5)):
1 2 3
4 5 6
7 8 9
10 11 12
13 14 15

contoh 3 (drawThreeColsBox(1)):
1 2 3

Note: pola angka harus dimulai dari 1, dan setiap angka diberikan spasi.
Hati-hati, yang ditampilkan adalah sebuah string, bukan angka!
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)
//Solution 1 - Only using a single for loops
function drawThreeColsBox(num){
  var print="";
  for(var i=1;i<=num*3;i+=3){
    print= `${i} ${i+1} ${i+2}`;
    console.log(print);
  }
}
drawThreeColsBox(5);
drawThreeColsBox(3);
drawThreeColsBox(1);

/* =================================================================== */
//Using nested loops
//Solution 2 - var result inside the first loop
// function drawThreeColsBox(num){
//   var count=1;
//   for(var i=0;i<num;i++){
//     var result="";
//     for(var j=0;j<3;j++){
//       result+= count+" ";
//       count++;
//     }
//     console.log(result);
//   }
// }

/* =================================================================== */
//Solution 3 - var result outside the for loops
// function drawThreeColsBox(num){
//   var count=1;
//   var result="";
//   for(var i=0;i<num;i++){
//     for(var j=0;j<3;j++){
//       result+= count + " ";
//       count++;
//     }
//     result+="\n";
//   }
//   console.log(result);
// }

/* =================================================================== */
//Solution 4 - Using Array
function drawThreeColsBox(num){
  var result=[];
  var box=[];
  for(var i=1;i<=num*3;i++){
    box.push(i);
    if(box.length===3){
      result.push(box);
      box=[];
    }
  }
  return result;
}

console.log(drawThreeColsBox(3));
/* 
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
 */
console.log(drawThreeColsBox(5));
/* 
[ [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
*/

console.log(drawThreeColsBox(1));
//[ [ 1, 2, 3 ] ]