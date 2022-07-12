// function  printNumbers(a, b){
//      for (let i = a; i <= b; i++){
//         console.log(i)
//      }
// }
// console.log(printNumbers(2, 5))



// // câu 2
// function  printNumbers(a, b){
//     for (let i = b; i >= a; i--){
//         console.log(i)
//     }
// }
// console.log(printNumbers(3, 5));



// câu 3
// function sumOfOddNumbers(a, b){
//     let total = 0;
//     let min = a, max = b;
//     if (a > b) {
//         min = b;
//         max = a;
//     }
//     for (let i = min; i <= max; i++){
//         if (i %2 != 0) total +=i
//     }
//     return total;
// }
// console.log(1, 10)
// console.log(10, 1);

// // câu 4

 function divisor(number){
     for(let i = 1; i <= number; i++){
         if(number %i == 0) console.log(i);
     }
 }
 console.log(15);

//câu 5
function factorial(number){
    let total = 1;
    for(let i = 2; i <= number; i++){
        total *=i;
    }
    return total;
}
console.log(factorial(20));
console.log(factorial(50));

//câu 6
function countFolding(thickness){
    thickness *= 1000; // đổi sang mm
    let count = 0;
    let currentThickness = 0.1;
    //khi mà độ dày chưa đạt được mức mong muôn
    while (currentThickness < thickness){
        currentThickness*= 2;// gấp đôi giấy
        count++;// đếm 
    }
    return count;
}
console.log(countFolding(10))

// câu 7


// câu 8

function numOfLegs(){
    const CHICK_LEGS = 2;
    const DOG_LEGS = 4;
    let chiken = 1;
    let dogs = 36 - chiken;
    while (chiken * CHICK_LEGS + dogs * DOG_LEGS != 100){
        chiken++;
        dogs--;
    }
    

}
