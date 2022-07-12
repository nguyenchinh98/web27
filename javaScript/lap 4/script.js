// let mySelf = {
//     name: "Chinh",
//     age: 22,
//     job: "student",
//     run : function(){
//         console.log("Chạy mau đi, trời sắp mưa")
//     },
//     eat(){
//         console.log("chicken")
//     },
// }
// // const key = prompt ("Bạn muốn biết thông tin gì về tôi");
// // console.log(mySelf[key]);

// // console.log(mySelf);
// // mySelf.eat();
// // mySelf.run();

// for(let key in mySelf){
//     // console.log(mySelf[key])
//     console.log(key + ": " + mySelf[key])
// }




/**
 * cú pháp có 2 dạng
 * dot natation => obj.key / obj.method()
 * 
 * obj["key"] / obj["method"]() => sử sungh với key là 1 biến\
 * 
 * // tên thuộc tính ko giới hạn như là bên tiến => lưu theo kiểu chỗi
 */


// duyệt qua các thuộc tính trong đối tượng
// for (let key in self){}

// let dog = {
//     age: 1,
//     name: "Bingo",
//     breed: "Béc-dê",
//     bark(){
//         console.log(this.name + "is barking")
//     },
//     run(){
//         console.log(this.name + "is running on " + this.legs + " legs")
//     },

//     crazy() {
//         this.bark();
//         this.run();
//     },

//     toString(){
//         return this.name;
//     }
// }

// console.log(String(dog));
// console.log(dog - 1);

// // dog.crazy();



// function Book(isbn, author, page, title){
//     this.isbn = isbn;
//     this.author = author;
//     this.page = page;
//     this.title = title;
// }
// const book1 = new Book("1", "chinh", "10", "javascript");
// const book2 = new Book("2", "quang", "11", "javascript");
// const book3 = new Book("3", "nam", "15", "javascript");
// console.log(book1);
// console.log(book2);
// console.log(book3);

function Dog(name, age, breed){
    this.name = name;
    this.age = age;
    this.breed = breed;
}

Dog.prototype.bark = function(){
    console.log(this.name + "is barking")
}\

Dog.prototype.eat = function (){
    console.log(this.name + :is eat)
}