function pasanganTerbesar(num) {
  var n= num.toString();
  var largest = n[0]+n[1];
  for (var i = 0; i < n.length; i++) {
    var large = n[i] + (n[i+1]);
    if (largest < large) {
        largest = large;
    }
  
}
  return Number(largest);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99