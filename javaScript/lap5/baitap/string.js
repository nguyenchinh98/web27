// //câu 1.1
 let str = " hello WORD" 
 function capitalize(str){
    return str.trim().slice(0, 1).toUpperCase().concat(str.trim().slice(1).toLowerCase());
 }
 console.log(capitalize(str))
 console.log(capitalize("javascript is fun"))


// // Câu 2
 function title(str){
     let arr = str.split(" ");
     let newarr = [];
     for(i = 0; i < arr.length; i++){
         newarr.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase());
     }
     return arr = newarr.join(" ").trim();
  }
 console.log(title("hello i am ba"))
 console.log(title("  ba nGuyỄn"));

// // câu 3
function protectEmail(email){
    console.log(email.slice(0, 2)+ "...@gmail.com")
}
console.log(protectEmail("sdfsfw@gmail.com"))


// câu 4
function reverse(str){
   let reverse = "";
   for(let i = str.length -1; i >= 0; i--){
    reverse = reverse + str[i];
   }
   return reverse;
}
console.log(reverse("hello Chinh"))

//câu 5
// câu 6
 function reverseWords(str){
     let splitStr = str.split(" ")     
     let newStr = [];
     newStr = splitStr.reverse().join(" ");
     return newStr;
 }
 console.log(reverseWords("The fox is comming for the chicken"));


// // câu 8
 function parameterize(str){
     let splitStr = str.split(" ")
     let newstr = [];
     for (i = 0; i < splitStr.length; i++){
         newstr.push(splitStr[i].slice().toLowerCase())
     }
     return splitStr = newstr.join("-");
 }
 console.log(parameterize("Hello Word"));

 //câu 9


