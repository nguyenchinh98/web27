// Async - Nghĩa là chương trình thực hiện lần lượt từng câu lệnh trong mã theo thứ tự từ trên xuống dưới,
// câu lệnh trước kết thúc thì mới đén câu lệnh thứ 2.

// Ưu điểm: Chương trình dễ kiểm soát

// const loadScript = (src, callback) => {
//     const script = document.createElement("script");
//     script.src = src; // <script src ="script.js"/>
// // lập trình bất đồng bộ
//     script.onload = () => callback(script) // sau khi tải xong(1ms, 10ms, ...)

//     // thêm vào head
//     document.head.append(script)
// };

// loadScript("other.js",(script) => {
//     console.log(sum(1,2))
// });


// promise => nhận vào 2 tham số
// tham số đầu tiên executor (hành động mà mình cần làm)
// tham só thứ 2 là 1 callback (có 2 tham số 
//resolve - thông báo cho biết thành công, 
//reject - thống báo cho biết hành động thất bại)


// const promise = new Promise ((resolve, reject) => {
//     console.log("đi mua bò húc");
//     const yes = Math.round(Math.random());
//     setTimeout(() => {
//         if (yes){
//             resolve("Bò húc")
//         } else {
//             reject("hết bò húc")
//         }
//     }, 3000);
// });

// promise.then((value) => {
//     console.log("oh year")
//     console.log("Uống" + value)
// })
// .catch((reason) => {
//     return new Promise((resolve, reject) => {
//       console.log("đi tìm quân khác");
//       const yes = Math.round(Math.random());
//       setTimeout(() => {
//         if (yes) {
//           resolve("Bò húc");
//         } else {
//           reject("hết bò húc");
//         }
//       }, 3000);
//     });
// })
// console.log(promise)
// có 3 trạng thái: Pending (đang chờ) | fulfilled (thành công) | rejected (thất bại)
// cho đến khi nào gọi resolve hoặc reject


// Async Await
async function dimuabohuc(){
    return new Promise ((resolve, reject) =>{
        console.log("đi mua bò húc");
        setTimeout(() => {
            if (Math.round(Math.random())){
                resolve("Bò húc")
            }else {
                reject("hết bò húc")
            }
        }, 1000);
    })
}

async function actions(){
    try {
        const value = await dimuabohuc();
        console.log("Uống " + value)
    } catch (err) {
        try {
            const value = await dimuabohuc();
            console.log("Uống " + value)
        } catch (err){
            console.log("ko uống nữa")
        }

    }
}
actions()



// Ajax
// Kỹ thuật cho phép client và server giao tiếp trao đổi dữ liệu mà ko cần phải reload trang

// client gửi yêu cầu http - Request:
// Starline: Path - methord(hành động - GET(đọc dữ liệu) - POST(tạo mới dữ liệu) - PUT (chỉnh sửa) - DEL ())
// Header: Metadata
// Body: Data
//

//Server trả về http response
// status (thành công hay thất bại) (1xx - 2xx(thành công) - 3xx(chuyển hướng) - 4xx(lỗi phía Client) - 5xx(lỗi phía server))
// Header: Meta
// body: data

// Fetch