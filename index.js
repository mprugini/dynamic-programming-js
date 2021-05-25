const fibonacci  = (n) => {
    if(n === 1 || n === 2) {
        return 1;
    } else {
        let result = fibonacci(n-1) + fibonacci(n-2);
        return result;
    }
}

console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(6));