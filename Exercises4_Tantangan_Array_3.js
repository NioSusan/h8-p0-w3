function dataHandling2(input){
  input.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(input);

  var tanggal =input[3].split("/");
  var date = tanggal.join("-");
  var hari = Number(tanggal[0]);
  var bulan = Number(tanggal[1]);
  var tahun= Number(tanggal[2]);
  switch(bulan){
    case 01: 
      result="Januari";
      break;
    case 02:
      result="Februari";
      break;
    case 03:
      result="Maret";
      break;
    case 04:
      result="April";
      break;
    case 05:
      result="Mei";
      break;
    case 06:
      result="Juni";
      break;
    case 07:
      result="Juli";
      break;
    case 08:
      result="Agustus";
      break;
    case 09:
      result="September";
      break;
    case 10:
      result="Oktober";
      break;
    case 11:
      result="November";
      break;
    case 12:
      result="Desember";
      break;
    default:
      result="Invalid!";
      break;
  }
  console.log(result); //Mei
 
  //DESCENDING SORT
   tanggal.sort(function(a,b){ 
    return b - a
  });
  console.log(tanggal); //[ '1989', '21', '05' ]

 //JOIN '-'
    console.log(date); // 21-05-1989 

 //SLICE
  var name = input[1];
  var irisan = name.slice(0,14);
  console.log(irisan); //Roman Alamsyah
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);
