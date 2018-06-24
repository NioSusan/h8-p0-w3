/* Solution 1 - Using for ... of */
function groupAnimals(animals) {
  animals.sort();
  var result=[];
  var same=[];
  var firstAlpa=animals[0][0];
  for(var animal of animals){
    if(animal[0]===firstAlpa){
      same.push(animal);
    } else { //Change to a different letter immediately
      result.push(same);
      same=[];
      firstAlpa=animal[0];
      same.push(animal);
    }
  }
  result.push(same);//to push the last animal(s)
  return result;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[['anoa', 'ayam'], ['cacing'], ['kancil', 'kuda']]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [['anoa', 'ayam'],['cacing','cicak'],['kancil', 'kuda'],['unta']]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'macan', 'beruang', 'zebra', 'tupai', 'capung', 'kupu-kupu'])); 
//[['anoa','ayam'],['beruang'],['cacing','capung'],['kancil','kuda','kupu-kupu'],['macan'],['tupai'],['zebra']];

/* ========================================================================================================================================== */
//Solution 2 - Using for loops
// function groupAnimals(animals) {
//   animals.sort(); //it helps keeping track on the first letter
//   // console.log(animals);
//   //[ 'anoa', 'ayam', 'cacing', 'kancil', 'kuda' ]
//   var result=[];
//   var same=[];
//   var firstAlpa=animals[0][0];
//   for(var i=0;i<animals.length;i++){
//     if(animals[i][0]===firstAlpa){//when the first alpa is still the same, keep pushing it to the same group
//       same.push(animals[i]);
//     } else { //otherwise, change to a different letter
//       result.push(same);
//       same=[];
//       firstAlpa=animals[i][0];
//       same.push(animals[i]);
//     }
//   }
//   result.push(same); //to push the last animal(s);
//   return result;
// }

/* ========================================================================================================================================== */
//Solution 3 - Using nested for loops
// function groupAnimals(animals) {
//   animals.sort(); 
//   var result=[];
//   var same=[];
//   var different=[];
//   //different from previous solutions, if using nested loops, var firstAlpa must be inside the first for loop, otherwise, it will stay "a" forever
//   //also, i must be <=animals.length, to cover the last animal;
//   for(var i=0;i<=animals.length;i++){
//     var firstAlpa=animals[0][0];
//     for(var j=0;j<animals.length;j++){
//       if(animals[j][0]===firstAlpa){
//         same.push(animals[j]);
//       } else {
//         different.push(animals[j]);
//       }
//     }
//     result.push(same);
//     same=[];
//     animals=different;
//     different=[];
//     i=0;
//   }
//   return result;
// }

/* also notice that there is no result.push(same) at the end of the line as the previous solutions, because it has been covered by i<=animals.length*/

/* ========================================================================================================================================== */
/* Solution 4 - Using nested for loops and breaks
function groupAnimals(groupAnimals) {
  groupAnimals.sort()
  var groups=[[]];

  if(groups[0][0] === undefined){
    // console.log('groups masih kosong, isi dulu dengan hewan pertama');
    groups[0].push(groupAnimals[0]);
  }

  for(var i=1; i<=groupAnimals.length-1; i++){
    for(var j=0; j<groups.length; j++){
        if(groups.length===1 && groupAnimals[i][0] === groups[j][0][0]){
            groups[j].push(groupAnimals[i]);
            break;
        } else if (groups.length===1 && groupAnimals[i][0] !== groups[j][0][0]) {
            groups.push([groupAnimals[i]]);
            break;
        } else if (groups.length>1 && groupAnimals[i][0] === groups[j][0][0]) {
            groups[j].push([groupAnimals[i]]);
            break;
        } else if (groups.length>1 && groupAnimals[i][0] !== groups[j][0][0]){
            for(var k=1; k<=groups.length; k++){
                if(groups[k] === undefined) {
                      groups.push([groupAnimals[i]]);
                      break;
                } else if (groupAnimals[i][0] !== groups[k][0][0]) {
                      // console.log("true, tidak sama! tambah nilai k")
                } else {
                  // (groupAnimals[i][0] === groups[k][0][0])
                      groups[k].push(groupAnimals[i]);
                      break;
                }
            }
            break;
        }
    }
  }
  return groups;
}
*/

/* ========================================================================================================================================== */
/* Solution 5 - Dimas's version (for a reference)
function groupAnimals(animals) {
  // you can only write your code here!
  var sortAnimals = animals;
  var kumpulan = []

  for(var i = 0; i < animals.length; i++){
    firstWord[i] = animals[i][0]
  }

  console.log(firstWord);
  
  for(var k = 0; k < sortAnimals.length; k++){
    var isGroup = true;
    var group = [];
    
    for(var j = 0; j < kumpulan.length; j++){
      //console.log("test test")
       if(sortAnimals[k][0] === kumpulan[j][0][0]) {
         kumpulan[j].push(sortAnimals[k])
         //console.log("sudah ad group")
         isGroup = false;
         
       }
    }
    
    //console.log(isGroup);
    if(isGroup) {
      group.push(sortAnimals[k])
    
      kumpulan.push(group)
    }
    console.log(kumpulan);
    //break;
    
    
    
  }

 // console.log(kumpulan)
}

*/