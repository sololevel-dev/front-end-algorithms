function isPrime(n) {
    if (n < 2) {
        return false
    }
    
    for (let i = 2; i < n; i++){
        if (n % 2 === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(1))//false
console.log(isPrime(3))//true
console.log(isPrime(4))//false