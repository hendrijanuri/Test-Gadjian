// 2. Buatlah function untuk mencetak n bilangan Fibonacci: 0,1,1,2,3,5,8,13,21,34,...
//    function name: fibonacci(n)
//    Dengan variable n tipe data Integer
//    return string fibonacci dengan delimiter “ ”(spasi)

const fibonacci = (n) => {
    let arr = [0];
    if (n < 2) {
        return arr.join();
    } else {
        arr[0] = 0;
        arr[1] = 1;
        for (let i = 2; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2]
        };
        return arr.join(' ');
    }
};

// console.log(fibonacci(1)); // 0 
// console.log(fibonacci(10)); // 0 1 1 2 3 5 8 13 21 34

module.exports = {
    fibonacci
};

