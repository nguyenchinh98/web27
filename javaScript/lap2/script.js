// let input = prompt("Nhập 1 số bất kỳ", 0)
// if(input %2 == 0){
//     console.log("Đây là số chẵn")
// }
// else{
//     console.log("Đây là số lẻ")
// }

// // nếu thực hiện 1 đoạn mã tùy thuộc vào điều kiện đúng hay sai
// if(condition){

// } else{

// }
// //  nếu trời mưa
// if(condition)
//     // mang áo mưa

// Câu 1
function isOddNumber (number){
    
    if (number % 2 != 0) {
      return true;
    }
    else{
        return false;
    }
}
console.log(isOddNumber(1));

// c2
function maxOfTwo(a, b){
    if (a > b) return a;
    else return b;
}
console.log(maxOfTwo(2, 3));

// c3
function divisibleByThreeAndFive(number){
      if(number %3 == 0 && number %5 == 0)
      return true;
      else return false;
}
console.log(divisibleByThreeAndFive(15));
console.log(divisibleByThreeAndFive(13));

// c4
function season(month){
    if (month == 12 || month == 1 || month == 2) console.log("Winter")
    if(month == 3 || month == 4 || month == 5) console.log("Spring")
}

// c5
function trafficLight(light){
    if (light === red) console.log("Dừng lại")
    if (light === yellow) console.log("Giảm tốc độ và dừng lại")
    if (light === green) console.log("Được phép di chuyển")
}



