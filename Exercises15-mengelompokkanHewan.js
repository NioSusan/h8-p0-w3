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

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [['anoa', 'ayam'], ['cacing'], ['kancil', 'kuda']]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [['anoa', 'ayam'],['cacing','cicak'],['kancil', 'kuda'],['unta']]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'macan', 'beruang', 'zebra', 'tupai', 'capung', 'kupu-kupu'])); 
// [['beruang'],['cacing','capung'],['kancil','kuda','kupu-kupu'],['macan'],['tupai'],['zebra']]