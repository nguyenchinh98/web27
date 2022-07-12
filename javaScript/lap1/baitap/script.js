// bài 1;
function usd2vnd(amount){
    let result = amount * 23000;
    return result;
}
console.log("2 đô la chuyển sang mệnh giá vnd là", usd2vnd(2))
console.log("10 đô la chuyển sang mệnh giá vnd là", usd2vnd(10));

// bài 2
function findArea (a, b){
    let result = a * b;
    return result;
}
console.log("Diện tích hình chữ nhật có chiều dài a=2, chiều rộng b=3 là ", findArea(2,3))  
console.log("Diện tích hình chữ nhật có chiều dài a=3, chiều rộng b=5 là ", findArea(3,5))  

// bài 3:
function celsiusToFahrenheit(c){
    let result = c*1.8 + 32;
    return result
}
console.log("Nhiệt độ F tương đương với 0 độ c là", celsiusToFahrenheit(0))
console.log("Nhiệt độ F tương đương với 37 độ c là", celsiusToFahrenheit(37));
console.log("Nhiệt độ F tương đương với 100 độ c là", celsiusToFahrenheit(100));

// bài 4:
function pow(a, b){
    let result = Math.pow(a, b);
    return result
}
console.log("kết quả của 2 lũy thừa 2 là", pow(2, 2))
console.log("kết quả của 3 lũy thừa 3 là", pow(3, 3));
console.log("kết quả của 5 lũy thừa 1 là", pow(5, 1));

// bài 5:
function findAreaOfTriangle(a, b, c){
    let result = Math.sqrt(((a + b + c)/2)*((a+b+c)/2 - a)*((a+b+c)/2 - b)*((a+b+c)/2 - c));
    return result;
}
console.log("Diện tích của tam giác là", findAreaOfTriangle(10, 17, 21))



