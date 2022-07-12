 // câu 1
 function sphericalVolume(r){
    let pi = 3.14;
    return V = ((4/3)*pi*r**3)
 }
 console.log(sphericalVolume(2));
 console.log(sphericalVolume(3));

 // câu 2
 function twoIntegers(a, b){
    let total = 0;
    for (let i = a + 1; i < b; i++){
      total +=i;
    }
    return total;
 }
 console.log(twoIntegers(3, 8))
 // câu 3
  function divisor(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) total += i;
    }
    return total;
  }
  
  console.log(divisor(15));
  console.log(divisor(5));
  // câu4

  function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
    return true;
  }
  console.log(isPrime(11));
  console.log(isPrime(5));
  console.log(isPrime(4));


  // chuỗi
  // câu 1
  function title(str) {
    let arr = str.split(" ");
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
      newArr.push(
        arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase()
      );
    }
    return arr = newArr.join(" ").trim();
  }
  console.log(title("hello i am ba"));
  console.log(title("  ba nGuyỄn"));

  // câu 2
  function spinal(str) {
    let splitStr = str.split(" ");
    let newstr = [];
    for (i = 0; i < splitStr.length; i++) {
      newstr.push(splitStr[i].slice(0).toLowerCase());
    }
    return (splitStr = newstr.join("-"));
  }
  console.log(spinal("Hello Word"));
// câu 3
function isPalindrome(str) {
  let a = str.trim().split(" ").join("").toLowerCase();
  if (a == a.trim().split("").reverse().join("").toLowerCase()) return true;
  else return false;
}
console.log(isPalindrome("Race car"));
console.log(isPalindrome("hello world"));



// Xử lý mảng
// câu 2
 let arr = ["chinh", "đạt", "hiếu", "Thuầng"]
 function lengthMax(arr){
  let maxLength = arr[0].length;
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > maxLength){
      maxLength = arr[i].length;
      newArr.push(arr[i]);
    }
  }
 }
 console.log(lengthMax(arr))

 // câu 3
 let arr1 = [1, 2, 3]
 let arr2 = [1, 3, 4, 5, 5];
 function compareArr(arr1, arr2){
  let newArr = [];


 }


 // Xử lý object
 // câu 1

  let user = [
    { name: "Huy", age: 23 },
    { name: "Tuấn", age: 25 },
    { name: "Huy", age: 21 },
  ];
//  let l = user.length;
//  let sum = 0;
//  let averageAge = user.reduce(function(sum, items){
//   sum += items.age;
//   return sum / l;
//  })
//  console.log(averageAge)

// câu 2
let Sort = user.sort(function(a, b){
  return b.age - a.age
})
console.log(Sort)

// câu 4
let filterName = user.filter(function(){
  
})
