function isOddNumber(number){
    if (number %2 != 0){
        return true;
    } else{
        return false;
    }
}
console.log(isOddNumber(11))
console.log(isOddNumber(12))

// câu 2
function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } if(a < b) {
        return b;
    } else{
        return "Bằng nhau";
    }
}
console.log(maxOfTwo(10, 10));

// câu 3
function divisibleByThreeAndFive(number) {
    if(number %3 == 0){
        if(number %5 == 0) {
            return true;
        }
    }
    else{
        return false;
    }
}
console.log(divisibleByThreeAndFive(-2))
// câu 4
function season(month) {
    if(month == 12 || month == 1 || month == 2){
        return "Winter";
    }
    if(month == 3 || month == 4 || month == 5) {
        return "Spring";
    }
    if(month == 6 || month == 7 || month == 8){
        return "Summer";
    }
    if(month == 9 || month == 10 || month == 11) {
        return "Fall"
    }
}
console.log(season(10))

//câu 5
function trafficLight(light){
    if(light === "green"){
        return "Được phép di chuyển";
    }
    if(light === "yellow"){
        return "Giảm tốc độ và dừng lại";
    }
    if(light === "red") {
        return "Dừng lại"
    }
}
console.log(trafficLight("red"))
console.log(trafficLight("green"));
console.log(trafficLight("yellow"));

//câu 6
function calcCommissions(totalSales){
    if(totalSales > 300000000) {
        return totalSales*0.2;
    }
     if (totalSales <= 100000000) {
       return totalSales * 0.05;
    }
    if (100000000 <= totalSales <= 300000000) {
      return totalSales * 0.1;
    }
}
console.log(calcCommissions(79000000))


//Leve 2
// câu 1
function isLeafYear(year){
    if(year %400 === 0){
        return true;
    }
     else if(year %4 == 0 && year %100 != 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isLeafYear(2104))
console.log(isLeafYear(2400))

//câu 2
function daysOfMonth(month, year){
    if(month == 4 || month == 6 || month == 9 || month == 11){
        return month + " là tháng có 30 ngày"
    }
    if(month == 1 || month == 3 || month == 5|| month == 7 ||
        month == 8 || month == 10 || month == 12) {
            return month + " là tháng có 31 ngày"
        }
    if (month == 2 && year % 4 == 0 && year % 100 != 0) {
      return month + " là tháng có 28 ngày";
    } else {
      return month + " là tháng có 29 ngày";
    }
}
console.log(daysOfMonth(5, 2022));
console.log(daysOfMonth(2, 2104));

//câu 3
function calcGrade(point){
    if(10 >= point && point >= 8.5){
        return "Xếp loại A"
    }
    if(0 <= point && point < 4.0){
        return "Xếp loại F"
    }
    if(4.0 <= point && point < 5.5){
        return "Xếp loại D"
    }
    if (5.5 <= point && point < 7.0) {
      return "Xếp loại C";
    }
    if (7.0 <= point && point < 8.5) {
      return "Xếp loại B";
    }
    else {
        return "Không xác định";
    }
}
console.log(calcGrade(0))
console.log(calcGrade(4));
console.log(calcGrade(6));
console.log(calcGrade(5));
console.log(calcGrade(3));

//câu 4
function calcTaxiFee(km){
    if(km <= 30){
        return km*11000 + 10000;
    }
    else{
        return km*9500 + 10000;
    }
}
console.log("tổng số tiền phải thanh toán khi đi hết 30km là ", calcTaxiFee(30))
console.log("tổng số tiền phải thanh toán khi đi hết 50km là ", calcTaxiFee(50))

//câu 5

function maxOfThree(a, b, c){
    if(a > b && a > c){
        return a + " Là số lớn nhất"
    } else if(b > a && b > c){
        return b + " là số lớn nhất"
    }
    else{
        return c + " là số lớn nhất"
    }
}
console.log(maxOfThree(9, 4, 9))
// câu 5

//câu 6
function solveEquation(a, b, c){
    if(a === 0 && b === 0 && c === 0) return Infinity;
    if(a === 0 && b === 0) return null;
    if(a === 0) return -c/b;
    
}

function daysOfMonth(month, year){
    switch(month){
        case 2:
            if(isLeafYear(year)) RTCIceTransport
    }
}
