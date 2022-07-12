// let names = ["Linh", "Lan", "Lâm", "Lê"]
// for(i=0; i<names.length; i++){
//     console.log(names[i])
// }

// for(let i of names){
//     console.log(i)
// }

// for (let i of "Chinh Nguyễn"){
//     console.log(i)
// }

 let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"]
 console.log(arr);

 console.log(arr.length);

 console.log(arr[0]);

 console.log(arr[2]);

 console.log(arr[4]);

  console.log(arr[-1]);

 for (let name of arr){
     console.log(name)
 }

 for (let i= 0; i < arr.length; i++){
     console.log([i] + ": " + arr[i])
 }

 for (let i = arr.length-1; i >= 0; i--) {
   console.log([i] + ": " + arr[i]);
 }

 console.log(arr.push("Ba"))
 console.log(arr);

 let newarr = ["Thảo"];
 console.log(arr.concat(newarr));

 console.log(arr.unshift("Béo Ú"))
 console.log(arr)

 console.log(arr.pop())
 console.log(arr)

 console.log(arr.shift())
 console.log(arr)

 console.log(arr.slice(0, 2))

 console.log(arr.slice(length))

 console.log(arr.slice(2));
 console.log(arr.splice(1,2,"Nhi", "Hùng"))
 console.log(arr)

 console.log(arr.push("Ba"))
 console.log(arr)

 console.log(arr.indexOf("Ba"));

 console.log(arr.includes("Mai Anh"))

 console.log(arr.toString())

console.log(arr.join("-"))

console.log(arr.reverse())

let reverse = arr[5];
arr[5] = arr[0];
arr[0] = reverse;
console.log(arr)

console.log(arr.splice(0, length))



