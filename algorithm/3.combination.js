// 3. Buatlah function untuk menghitung kombinasi dan permutasi
//    function name: combination(n, r)
//    Dengan variable n, r dengan tipe data Integer
//    Rumus: 𝑃(𝑛, 𝑟) =
//        𝑛!
//    𝑟!(𝑛−𝑟)!
//    
//    𝑃(𝑛, 𝑟) =
//        4!
//    2!(4 − 2)!
//        = 6
//    n > r; n, r integer
//    return integer

// Faktorial
const Fact = (num) => {
    let val = 1;
    for (let i = 2; i <= num; i++) {
        val *= i;
    }
    return val;
}
// console.log(Fact(5)); // 120

// Permutasi
const permutation = (n, r) => {
    if (r > n) {
        return 'error: r needs to be smaller than n';
    } else {
        return Fact(n) / Fact(n - r);
    }
}
// console.log(permutation(4, 2)); // 12

// Kombinasi
const combination = (n, r) => {
    if (r > n) {
        return 'error: r needs to be smaller than n';
    } else {
        return Fact(n) / (Fact(r) * Fact(n - r));
    }
}
console.log(combination(4, 2)); // 6
