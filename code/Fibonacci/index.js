//give a number n find the first n elements of the fibobacci sequence
//like🏁 fibonacci(2)=[0,1]
//like🏁 fibonacci(3)=[0,1,1]
//like🏁 fibonacci(7)=[0,1,1,2,3,5,8]

function fibobacci(n) {
    const fib = [0,1]
    for (let i = 2; i < n; i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}


console.log(fibobacci(2)) //[0,1]
console.log(fibobacci(3)) // [0,1,1]
console.log(fibobacci(7)) //[0,1,1,2,3,5,8]