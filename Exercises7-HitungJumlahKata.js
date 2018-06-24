//Solution 1 - Using Regex
function hitungJumlahKata(kalimat) {
 return kalimat.trim().split(/\s+/).length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

/* ========================================================================== */
//Solution 2 - Counting the spaces
// function hitungJumlahKata(kalimat) {
//     var count=1;
//     for(var letter of kalimat){
//       if(letter===" "){
//         count++;
//       }
//     }
//     return count;
// }

/* ========================================================================== */
//Solution 3 - similar like solution 1, but without regex
// function hitungJumlahKata(kalimat) {
//   var count=0;
//   var str="";
//   var result=[];
//   for(var letter of kalimat){
//     if(letter!==" "){
//       str+=letter;
//     } else{
//       result.push(str);
//       str="";
//     }
//   }
//   result.push(str);
//   return result.length;
// }
  