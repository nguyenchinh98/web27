for (let i = 1; i < 11; i++) {
    console.log(i)
    
}

//bt1  in ra các số chắn 1 - 100
for (let i = 1; i <= 100; i++){
    if(i %2 === 0) console.log(i);
}

// in ra bảng cửu chương của 3

for(let i = 1; i <= 10; i++ ){
    console.log(3*i)
}

//3
for(let i = 100; i > 0; i--){
    if( i %2 != 0) console.log(i)
}


// While
let accept = false;
while (accept === false){
    accept = confirm("yêu anh đi")
}
console.log("Đi chơi thôi")


// 
const user = {
    username: "banx",
    password: "123456",
}
let username;
let password;
while (username != user.username || password != user.password){
    username = prompt("Tên tài khoản")
    password = prompt("mật khẩu")
}
console.log("Chào mừng " + user.username + "quay trở lại")


// continue

const girls = ["xinh", "xấu", "xấu", "xinh", "xấu"]
for (let each of girls){
    if(each != "xinh"){
        continue;
    }
    console.log("nhắn tin");
    console.log("đi chơi");
    console.log("shopping");
    console.log("tặng quà");
}



// break

