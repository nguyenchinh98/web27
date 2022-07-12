// alert("Hello TechMaster");
// // alert: để hiện thị 1 thông báo rõ ràng trên trình duyệt cho người dùng

// alert("Xin chào Chinh Béo");

// console.log("Hello mọi người");
// // console: để hiện thị thông báo (giá trị/kết quả) treeb tab console



// // Khai báo biến kèm với giá trị
// let myName = "Chinh"
// let myAge = "24"

// let myPhoneNumber;
// myPhoneNumber ="0348070202";

// Biến: Như 1 cái hộp cho phép mk chứa các giá trị khác nhau
// Thay đổi dữ liệu
// myJob = "developer";

// console.log (myName)
// console.log(myAge)
// console.log(myPhoneNumber)

// const: hằng số sử dụng cho các giá trị từ đầu và giá trị ko thể thay đổi

// let todayLuckyNumber = 68;
// let myHeight = 1.69;



// chuỗi - cho phép sử dụng các ký tự bất kỳ, đặt tròn "" ' 
// let myName = "Chinh 😍"

// // Logic (Boolean) - chỉ 2 hằng số true / False
// let amIHandsome = true;  
// let amIrich = false; 

// // underfined - đại diện một giá trị chưa được xác định
// let something;

// // null - đại diện cho một biến không có giá trị
// let abc = null;

// // object - kiểu phức hợp

// cho phếp lưu trữ nhiều giá trị trong 1 biến duy nhất
// mỗi giá trị (value) ánh xạ với 1 khóa (key/property)
// key- value


// in ra toàn bộ giá trị
// let chinh = {
//     name: "Chinh",
//     age: 24,
// // }

// console.log("chinh");

// // in ra từng giá trị- obj.key
// console.log(chinh.age);

// console.log(console)

// console.error("cay thế nhở")

// // typeof - kiểm tra kiểu
// console.log(typeof chinh)
// console.log(typeof myPhoneNumber)


// function - là cách để cấu trúc mã(nhóm các đoạn mã thành khối mã) giúp tái sử dụng
// cú pháp function: function functionName( ) {}
// input của hàm đc khai báo bên trong () - parameters(tham số)
// nối chuỗi dùng dấu +

// function greeting(name) {
//     console.log("Hàm nhận vào tham số name có giá trị là:", name);
//     console.log("Chào mừng " + name + " đến với em");
// }
// gọi hàm functionName()
// truyền input vào cho hàm - arguments
// input - truền vào theo thứ tự khai báo
// greeting("Tuấn");
// greeting("Đạt");
// greeting("Kiên");
// greeting("Sang");


// function add(a,b){
//     let result = a + b;
//     return result;
// }
// const result = add(1, 2);
// console.log("kết quả của phép tính 1 + 2 là " + result);

function sub(a, b){
    let __ = a - b;
    return __
}
const result = sub (10, 1);
console.log("Kết quả của phép 10 - 1 là " + result )

function div(a, b){
    let chia = a/b;
    return chia
}
const kqdiv = div(10, 2)
console.log("Kết quả của phép chia 10 cho 2 là " + kqdiv)


function menu(a, b){
    let result = a*b;
    return result;
}
console.log("kết quả của phép nhân 5 và 2 là ", menu(1, 5))
console.log("kết quả của phép nhân 5 và 2 là ", menu(10, 5));
console.log("kết quả của phép nhân 5 và 2 là ", menu(20, 5));
console.log("kết quả của phép nhân 5 và 2 là ", menu(2, 51));