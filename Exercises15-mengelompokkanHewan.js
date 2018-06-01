/* Solution 1 - using slice() and for ... of */
function groupAnimals(animals){
  animals.sort();
  var target = animals[0].slice(0,1);
  var smallBox = [];
  var bigBox = [];
  for(var animal of animals){
    if(animal[0] === target){
        smallBox.push(animal);
    } else {
      target = animal.slice(0,1);
      bigBox.push(smallBox);
      smallBox=[];
      smallBox.push(animal);
    }  
  }
  bigBox.push(smallBox);
  return bigBox;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[['anoa', 'ayam'], ['cacing'], ['kancil', 'kuda']]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [['anoa', 'ayam'],['cacing','cicak'],['kancil', 'kuda'],['unta']]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'macan', 'beruang', 'zebra', 'tupai', 'capung', 'kupu-kupu'])); 
//[['anoa','ayam'],['beruang'],['cacing','capung'],['kancil','kuda','kupu-kupu'],['macan'],['tupai'],['zebra']];

/* Solution 2 - nested loops, else if, and breaks
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

/* SOLUTION 3 - using index and for loops
function groupAnimals(animals) {
  animals.sort();
  var target = animals[0][0];
  var boxKecil=[];
  var boxBesar=[];
  
  for(var i=0; i<animals.length; i++){
    if(animals[i][0] === target){
      boxKecil.push(animals[i]);
    } else {
      target = animals[i][0];
      boxBesar.push(boxKecil);
      boxKecil = [];
      boxKecil.push(animals[i]);
    }
  }
  boxBesar.push(boxKecil);
  return boxBesar;
}
*/

