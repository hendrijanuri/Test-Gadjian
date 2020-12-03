// 1. Buatlah function untuk membalikkan bilangan yang diberikan tanpa menggunakan fungsi string
//    apapun.
//    function name: reverse(character)
//    Dengan variable character tipe data String
//    return reversed string
//    Contoh: abcde -> edcbe

const reverseString = (string) => {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    };
    return result;
};

console.log(reverseString('Hello World')); // dlroW olleH