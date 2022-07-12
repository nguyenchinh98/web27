// Basic

let dog = {
    name: "Tôm",
    age: 8,
    bread: "Pug",
    gender: "male",
    color: "white",
    legs: "four",
    "favorite food": "fish",
    eat(){
        console.log(dog.name + " is eating " + dog["favorite food"], " yum yum...")
    },
    run(){
        console.log(dog.name + " is running on " + dog.legs +" legs")
    },
    bark(){
        console.log("Woof woof ...")
    },
}
 console.log(dog);
 console.log(dog.name);
 console.log(dog["favorite food"]);

 dog.color = "brown";
 console.log(dog.color);

 dog.age = dog.age + 2;
 console.log(dog.age);

 dog.eat();
 dog.run();

 for(let key in dog){
     console.log(key)
 };
 
 for (let key in dog){
     console.log(dog[key])
};

 dog.isCrazy = false;
 console.log(dog.isCrazy)

//   dog.crazy = function(){
//      if(isCrazy) console.log(dog.name + " is running on " + dog.legs + " legs")
//     else console.log(dog.name + " is not crazy")
//   }




// dog.crazy();

delete dog.isCrazy;

let clone = dog;
console.log(clone);

clone.name = "Lucky";
console.log(clone.name)

console.log(dog)
console.log(clone)


let copy = dog;
for(let key in copy){
    console.log(key + ": " + copy[key])
}

copy.name = "Cậu Vàng"
console.log(copy.name)


// Intermediate

const guess_list = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}
function greeting(name){
    if(name in guess_list == true){
        console.log("Hi, I am " + [name] + " And I'm from "+ guess_list[name])
    }
    else return "Hi, I'm a guess"
}
console.log(greeting("Nam"))
console.log(greeting("Sam"));

//câu 2

const family ={
    Chinh: 24,
    Quynh: 22,
    Cha: 45,
}
 function afterNYears(family, years){
    for(let key in family){
        newAge = family[key] + years;
        console.log("Sau " + years + " năm tuổi " + key + ": " + newAge + " tuổi")
    }
 }
 console.log(afterNYears(family, 10))

 // câu 3

 const scores = {
    A: 100, B: 14, C: 9, D: 28, E: 145, F: 12, G: 3, H: 10, I: 200, J: 100, K: 114,
    L: 100, M: 25, N: 450, O: 80, P: 2, Q: 12, R: 400, S: 113, T: 405, U: 11,
    V: 10, W: 10, X: 3, Y: 210, Z: 23
 }
 function calcNameScore(name){

 }

 //câu 5
  let items = {
    pen: 2000,
    ruler: 1500,
    book: 1230,
    pencil: 500,  
  }

  function totalAmount(items){
    total = 0;
    for(let key in items){
        total = total + items[key]
    }
    return total;
  }
console.log(totalAmount(items));


// câu 6
function expensiveItems(items){
    if(key in items >= 1000){
        console.log(key + ": " + items[key])
    }
    else return
    }
console.log(items)

