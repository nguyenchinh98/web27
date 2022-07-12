// lever 2
// câu 1
 function isPrime(number){
    if(number < 2) return false;

    for (let i = 2; i < number; i++){
        if (number %i == 0) return false;
    }
    return true;
 } 
 console.log(isPrime(11));
 console.log(isPrime(5));
 console.log(isPrime(4));

// câu 2
 function sumOfPrimes(a, b){
     let total = 0;
     for (let i = a; i <= b; i++){
         if (isPrime(i)) total +=i;
     }
     return total;
 }

 console.log(sumOfPrimes(3, 15))

// câu 3

function fibonacci(n){
    let a = 0;
    let b = 1;
    let c;
    for(let i =1; i <= n; i++){
        if(i === 1) console.log(a);
        if(i === 2) console.log(b);
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
console.log(fibonacci(5));

//câu 4
 function isPalindrome(number){
    let rest;
    let reverseNumber = 0;
    let copy = number;
    while( copy > 0){
        rest = copy % 10;
        reverseNumber = reverseNumber *10 + rest;
        copy = (copy - rest) / 10;
    }
    return number === reverseNumber;
 }
 console.log(isPalindrome(456));
 console.log(isPalindrome(11));
 console.log(isPalindrome(4004));
 
