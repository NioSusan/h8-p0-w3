var arr = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"], 
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],   
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],                  
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]       
];

function dataHandling(arr){ 
  for (var i=0;i<arr.length;i++) {
        // 1st Iter [0]:  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
        // 2nd Itr [1]:  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"]
        // 3rd Itr [2]: ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"]]
        //4th Itr [3]: ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]    
        // console.log('i: ' + i, arr[i]);
         console.log("");  
      for (var j=0;j<arr[i].length;j++) {
            // Outer loop 1st inner 1st [0][0] : "0001"
            // Outer loop 1st inner 2nd [0][1]: "Roman Alamsyah"
            // Outer loop 1st inner 3nd [0][2]: "Bandar Lampung"
            // Outer loop 1st inner 4th [0][3]: "21/05/1989"
            // Outer loop 1st inner 5th [0][4]: "Membaca"
            // Outer loop 2nd inner 1sh [1][0]: "0002"
            // ...
            // console.log('j: ' + j, arr[i][j]);
      }
      console.log('Nomor ID: ' + arr[i][0]);
      console.log('Nama Lengkap: ' + arr[i][1]);
      console.log('TTL: ' + arr[i][2]+ ' ' + arr[i][3]);
      console.log('Hobi: ' + arr[i][4]);
  }
}

dataHandling(arr);