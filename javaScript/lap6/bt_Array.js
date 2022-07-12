// câu 1
let  arr = [5, 3, 8, 1, 2];
let a = 1;
let b = 4;
// cách thủ công
let newArr = [];
 function filterRange(arr, a, b){
    for (let number in arr){
         if (arr[number] >= a && arr[number] <= b)
         newArr.push(arr[number]);
     }
     return newArr;
 }
 console.log(filterRange(arr, a, b))

// Dùng hàng filter

let filterArr = arr.filter(function(number){
    if (number >= a && number <= b)
    return number;
})
console.log(filterArr);

// câu 2
let user = [
    {name: "John", surname: "Smith", id: 1, age: 25},
    {name: "Pete", surname: "Hunt", id: 2, age: 30},
    {name: "Mary", surname: "key", id: 3, age: 28},
]
let mapName = user.map(function(user){
    return user.name;
});
console.log(mapName);

// câu 3
let mapFullName = user.map(function(user){
    fullName = user.name +" "+ user.surname;
    return{
        fullName,
        id: user.id
    }
})
console.log(mapFullName);

//câu 4
let newAge = 27;
let greater = user.filter(function(user){
    return user.age >= newAge
})
console.log(greater);   

// câu 5
function avg(users){
    user.reduce(function(total, user){
        return total += user.age;
    }, 0)
    return totalArr/user.length
}
console.log(avg(user))