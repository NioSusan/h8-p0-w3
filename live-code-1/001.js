/**
Buatlah sebuah PSEUDOCODE untuk kasus berikut:

Sebuah mobil sedang berjalan dengan kecepatan 80 km/jam.
Ketika mobil akan menanjak sebuah jalanan/jalur, kecepatan mobil akan berkurang
sesuai dengan kemiringan sudut dari jalan tersebut:
 - sudut kemiringan jalan 0-14 derajat maka kecepatan mobil tidak akan berkurang
 - sudut kemiringan jalan 15-29 derajat maka kecepatan mobil akan berkurang 10 km/jam
 - sudut kemiringan jalan 30-44 derajat maka kecepatan mobil akan berkurang 15 km/jam
 - sudut kemiringan jalan 45-50 derajat maka kecepatan mobil akan berkurang 25 km/jam

Tampilkan kecepatan mobil jika menghadapi tanjakan dengan sudut kemiringan tersebut
**/


//your alogritma/pseudocode here
STORE "speed" with value 80
STORE "kemiringan" with any value
IF "kemiringan" <= 14 THEN
      STORE "result" set with CALCULATE (speed - 0)
ELSE IF "kemiringan" <=29 THEN
      STORE "result" set with CALCULATE (speed - 10)
ELSE IF "kemiringan" <=44 THEN
      STORE "result" set with CALCULATE (speed - 15)
ELSE IF "kemiringan" <=50 THEN
      STORE "result" set with CALCULATE (speed - 25)
END IF

DISPLAY "result"

/* SYNTAX
var speed = 80;
var kemiringan=45;
if(kemiringan <=14){
    result = speed - 0;  //tidak berkurang
} else if (kemiringan <=29){
    result = speed - 10; //berkurang 10 
} else if(kemiringan <=44){
    result = speed - 15; //berkurang 15
} else if(kemiringan <=50){
    result = speed - 25; //berkurang 25 
}
console.log(result); */
