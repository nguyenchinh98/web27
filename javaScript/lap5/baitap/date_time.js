let d = new Date();
console.log(d)

function curDate() {
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    if (date < 10) date = "0" + date;
    else if (month < 10) month = "0" + month;
    console.log(date +"/" + month +"/" + year);
}
console.log(curDate());

// câu 2
function curTime(){
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let second = d.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (second < 10) second = "0" + second;
    console.log(hours + ":" + minutes + ":" + second);
}
console.log(curTime());

//câu 3
function weekday(){
    console.log("T" + d.getDay())
}
console.log(weekday());

// câu 4


function getDateAgo(days){
    let year = d.getFullYear();
    let month = d.getMonth() +1;
    let date = d.getDate();
    let newDays = date - days;
    if (newDays <= 0) {
        month = month -1;
        date = 30 + newDays;
    }else if (newDays > 0){
        date = newDays;
    }
    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;
    console.log(year + "/" + month + "/" + date)
   
}
console.log(getDateAgo(20))
console.log(getDateAgo(15));
console.log(getDateAgo(5));

// câu 5
function getLastDayOfMonth(year, month){
    if (month == 2){
        if (year %400 == 0) return "28 ngày";
        else if (year %4 ==0 && year %100 != 0) return "28 ngày";
        else return "29 ngày"
    }
    if (month == 4 || month == 6 || month == 9 || month == 11) return "30 ngày";
    else return "31 ngày"
}
console.log(getLastDayOfMonth(2000, 2))
console.log(getLastDayOfMonth(2022, 2));
console.log(getLastDayOfMonth(2000, 5));
console.log(getLastDayOfMonth(2000, 9));

// câu 6
function getDaysToNextBirthday(year, month, date){
    
}

// câu 7
function humanize(date){
    const now = new Date();
    const diff = Math.floor((now.getTime()-date.getTime())/1000)
    if (diff < 5) "Just now";
    else if (diff < 60) return 

}