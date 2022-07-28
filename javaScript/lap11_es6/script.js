// function greeting(who){
//     console.log(`hello, ${who}`)
// }


// console.log(x)
// var x = 1;


// // ES5
// function hello(who){
//     console.log(`Hello, ${who}`)
// }
// // ES6
// const hello = (who)=> {
//     console.log(`Hello, ${who}`)
// }\

//ES6
// Thay thế từ khóa function thành => ở giữa phần tham số và function body
// không có this. giá trị của this sẽ đươc tham chiếu ra mã bên ngoài phạm vị một biến thông thường
//thường được sử dụng trong các phương thức yêu cầu hàm Callback
// Sử dụng để pass this context cho mã trong hàm
// ko sử dụng được phương thức bind upply


// ARRAY FUNCTION
// const sum = (a, b) => {
//     return a + b
// }
// const sum = (a, b) => a + b;


// câu 1
const isOddNumber = (number) => {
    if (number %2 === 0){
        return true;
    }
    else return false;
}
console.log(isOddNumber(5))

// câu 2
const maxOftwo = (a, b) => {
    if (a > b){
        return a
    }else if (b > a){
        return b
    }else return "bằng nhau"
}
console.log(maxOftwo(5,3))

// array 
// câu 1
// let arr = [5, 3, 8, 1]
// const filterRange = (arr, a, b) => {
//     const result = arr.filter((number) => {
//         return a<= number && number <= b
//     })
//     return result;
// }
console.log(filterRange(arr, 1, 6))

//const filterRange = (arr, star, end) => arr.filter((number) => star <= number && number <= b)


// câu 2
const users = [
    {name: "John", age: 25},
    {name: "Pete", age: 30},
    {name: "Mary", age: 28}
]
const getNames = (users) => users.map((users) => users.name)
console.log(getNames(users))


// Dạng rút gọn của if else, sử dụng để gán giá trị cho một biến theo điều kiện nhất định
// cú pháp tổng quát: Keyword variableName = condition ? value_if_condition_is_true : value_if_condition_is_false
// 

const calcGrade = (point) =>{
    return point < 4 ? "F" : point < 5.5 ? "D" : point < 7 ? "C" : point < 8.5 ? "B" : "A"
};
console.log(calcGrade(9))

// Destructuring
/**
 * Cho phép tách (phân rã) nhanh các giá trị bên trong 1 collection (array, obj) thành các biến riêng biệt
 * 
 */

const arr = [1, 2, 3, 4, 5];
const [a, b] = arr // gán 2 p tử ở vị trí index 0, 1 cho a, b
