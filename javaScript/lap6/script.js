// let arr = ["Tuấn", "Đạt", "Nam", "Thuần"];
// function logUpperName(name){
//     console.log(name)
// }
// arr.forEach(logUpperName)


// arr.forEach(console.log)

// foreach gọi hàm callback 1 lần với mỗi 1 giá trị trong mảng, callback có thể nhận tối đa 3 tham số( value. index, arr)


// hàm find(): dùng để tìm 1 giá trị trong mảng khớp với điều kiện(được đánh giá bởi hàm callback truyền vào)
// Callback phải trả về kết quả là boolean( true/ false) cho biết giá trị phù hợp với điều kiện hay ko

 let tuan = arr.find(function(name) {
     if (name.startsWith("T")) return true;
     else return false;
 })
 console.log(tuan);

// // filter tìm nhiều giá trị
 let twoT = arr.filter(function(name){
     return name.startsWith("T");
 })
 console.log(twoT)

// // hàm map(): biến đổi các giá trị => trả về mảng mới
 let fisrtChar = arr.map(function(name){
     return name.charAt(0)
 })
 console.log(fisrtChar)


// let lengthArr = arr.map(function(name){
//     return name.length
// })
// console.log(lengthArr)

// // Hàm reduce: tổng hợp các giá trị
 let x = 10; let arrNum = [5, 6, 5, 3];
 let totalArr = arrNum.reduce(function(total, number){
     total += number;
     return total;
 }, x)
 console.log(totalArr)

// /**
//  * Hàm sort(): để sắp xếp
//  * mặc định hàm sort sắp xếp theo chuỗi
//  * chỉ hoạt động tốt nếu các giá trị trong mảng đều là chuỗi
//  * callback truyền vào sort phải trả về một giá trị số nguyên(âm, dương, 0) cho biết giá trị nào nhỏ hơn
//  *  */ 

 let sortArr = arrNum.sort(function(number1, number2){
     if(number1 < number2) return -1;
     else return 1;
 })
 console.log(sortArr)

// let student = [
//     {name: "Chinh", age: "24", weight: "68"},
//     {name: "Sang", age: "24", weight: "68"},
//     {name: "Tuấn", age: "24", weight: "68"},
//     {name: "Đạt", age: "24", weight: "68"}
// ];
// let anphab = student.sort(function(student1, student2){
//     if(student1.charAt(0) < student2) return -1;
//     else return 1
// })
// console.log()

//câu 1
 let arr = [1, 5, 3, 4, 2];
 function max(arr){
     let max = arr[0];
     for(let number of arr){
         if(number > max) max = number;
     }
     return max;
 }console.log(max(arr))

// câu 2
function minMax(arr){
    let min = max = arr[0];
    for (let number of arr){
        if (number > max) max = number
        if (number < min) min = number
    }
    return [min, max];
}
console.log(minMax(arr))


//câu 3
//  function avg(arr){
//      let total = arr.reduce(function(sum, number){
//          sum += number;
//          return sum;
//      });
//      return total / arr.length;
//  }
// console.log(avg(arr))

function avg(arr){
    let sum = 0;
    let total = 0;
    for (let number of arr){
        sum = (total += number)/arr.length;
    }
    return sum
}
console.log(avg(arr))


// //câu 6
 let arr1 = [1, 2, 3];
 let arr2 = [3, 5, 6];
 function mix(arr1, arr2){
     let result = [];
     for(let index = 0; index < arr1.length; index++){
         result.push(arr1[index], arr2[index])
     }
     return result;
 }
 console.log(mix(arr1,arr2))

// // câu 7
// function shuffle(arr){
//     for (let index = 0; index < arr.length; index++){
        
//     }
// }

// câu 8
function intersection(arr1, arr2){
    let newArr = [];
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] = ) 
        newArr = [arr1[i],arr2[i]]
    }
    return newArr;
}
console.log(intersection(arr1, arr2))