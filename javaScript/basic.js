// Bài tập kiểm tra javascrpit cơ bản

// Xử lý số
// câu 1
function sphericalVolume(r){
    let pi = 3.14;
    return v = Math.ceil(4/3*pi*r**3);
}
console.log(sphericalVolume(3));

// câu 2
function sumInteger(a, b){
    let sum = 0;
    for (let i = a +1; i < b; i++){
        sum +=i;
    }
    return sum;
}
console.log(sumInteger(3, 8));
// câu 3
function sumDivisor(number){
    let sum = 0;
    for (let i = 1; i <= number; i++){
        if (number %i == 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumDivisor(6));
// câu 4
function prime(number){
    if (number < 2) return false;
    for (i = 2; i < number; i++){
        if (number %i === 0){
            return false;
        }
    }
    return true;
}
console.log(prime(15));
console.log(prime(3));

// câu 5
function sumOfPrime(number){
    let sum = 0;
    for (let i = 2; i <= number; i++){
        if (prime(number) === true){
            sum +=i;
        }
    }
    return sum;
}
console.log(sumOfPrime(3))


// Xử lý chuỗi
// câu 1
function title(str) {
  let arr = str.split(" ");
  let newarr = [];
  for (i = 0; i < arr.length; i++) {
    newarr.push(
      arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase()
    );
  }
  return (arr = newarr.join(" ").trim());
}
console.log(title("hello i am ba"));
console.log(title("  ba nGuyỄn"));
// câu 2
function spinalCase(str){
    let arr = str.split(" ");
    let newArr = [];
    for (i =0; i < arr.length; i++){
        newArr.push(arr[i].slice().toLowerCase());
    }
    return (arr = newArr.join("-"));
}
console.log(spinalCase("HELLO World"));
// câu 3
