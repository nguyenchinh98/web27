// Destructuring
/**
 * Cho phép tách (phân rã) nhanh các giá trị bên trong 1 collection (array, obj) thành các biến riêng biệt
 *Chú ý sử dụng đúg tên thuộc tính, nếu thuộc tính ko tồn tại thì giá trị là undefined
 */
// array
const arr = [1, 2, 3, 4, 5];
const [a, b] = arr; // gán 2 p tử ở vị trí index 0, 1 cho a, b
// phân tách arr dùng []
console.log([a, b])
// Object
const obj = {
    name: "chinh",
    age: 24,
    job: "student"
}
// phân tách object sử dụng {}
const {name} = obj;
// phân tách obj trong khai báo hàm

const  getName = ({name}) => name;

//+++ Rest Parameters

// Tách rời các giá trị trong 1 collection thành các giá trị riêng biệt
// Thường sủ dụng để sao chép nhanh một mảng, obj or tách các giá trị trong collection thành các tham số riêng biệt khi truyền hàm vào

const arr1 = [1, 2 ,3, 4] // [1, 2, 3, 4]
const arr2 = [10, 20, 3, 4];
const clone = [...arr2, ...arr1] // Sử sụng cú pháp []
console.log(clone)

const cloneObj = {...obj} // sử dụng cú pháp {}
console.log(cloneObj)

// sum(...arr1) // sum(1, 2, 3, 4)


// Lưu trữ tất cả các giá trị ko xác định đc truyền vào hàm
const sum = (a, b, ...others) => {
    let total = a + b;
    for (let value of others) total += value;
    return total;

} // others sẽ chứa all các đối số ko xác định truyền vào hàm
console.log(sum(1, 2, 3, 4, 5))
console.log(sum(...arr1))


//**  Default Parameter*/
function hello (name){
    console.log(`Hello ${name}`)
}

function hello(name = "Strange", age = 0, job = "Student"){
    console.log(`Hello ${name}`)
}
hello()