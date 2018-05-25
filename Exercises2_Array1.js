/*Buatlah sebuah fungsi dengan nama balikString. 
Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

Hints:
Untuk membantumu mengerjakan tantangan ini, gunakanlah properti length pada sebuah array
yang akan memberikan panjang dari array-nya.

Untuk tugas ini, wajib menggunakan looping dan dilarang menggunakan sintaks .reverse!*/

//input "hello world!"
//output "!dlrow olleh"

function balikString(str){
    var baru = " ";
      for(var i=str.length-1 ; i>=0 ; i--){
          baru += str[i];
      }
      return baru;
  }
  
console.log(balikString("hello world!"));

/* EXPLANATION
    The starting point of the loop will be (str.length - 1) which corresponds to the 
    last character of the string, "!"
    As long as i is >= 0, the loop will go on 
    We decrement i after each iteration.

     Here hello world!'s length equals 12
        For each iteration: i = str.length - 1 and baru = baru + str[i]
        First iteration:    i = 12 - 1 = 11,       baru = "" + "!" = "!"
        Second iteration:   i = 11 - 1 = 10,       baru = "!" + "d" = "!d"
        Third iteration:    i = 10 - 1 = 9,        baru = "!d" + "l" = "!dl"
        Fourth iteration:   i = 9 - 1 = 8,         baru = "!idl" + "r" = "!dlr"
        Fifth iteration:    i = 8 - 1 = 7,         baru = "!idlr" + "o" = "!dlro"
        Sixth iteration:    i = 7 - 1 = 6,         baru = "!dlro" + "w" = "!dlrow"
        Seven iteration:    i = 6 - 1 = 5,         baru = "!dlrow" + " " = "!dlrow "
        Eight iteration:    i = 5 - 1 = 4,         baru = "!dlrow "" + "o" = "!dlrow o"
        Ninth iteration:    i = 4 - 1 = 3,         baru = "!dlrow o" + "l" = "!dlrow ol"
        Tenth iteration:    i = 3 - 1 = 2,         baru = "!dlrow ol" + "l" = "!dlrow oll"
        Eleventh iteration: i = 2 - 1 = 1,         baru = "!dlrow oll" + "e" = "!dlrow olle"
        Twelfth iteration:  i = 1 - 1 = 0,         baru = "!dlrow olle" + "h" = "!dlrow olleh"
    End of the FOR Loop
 */