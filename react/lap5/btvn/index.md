# Cơ bản về Router trong ReactJs
## 1 React-Router là gì?
* **`React-Router`** là một thư viện định tuyến (routing) tiêu chuẩn trong React. Nó giữ cho giao diện của ứng dụng đồng bộ với **`URL`** trên trình duyệt. **`React-Router`** cho phép bạn định tuyến "luồng dữ liệu" **`(data flow)`** trong ứng dụng của bạn một cách rõ ràng. Nó tương đương với sự khẳng định, nếu bạn có URL này, nó sẽ tương đương với Route này, và giao diện tương ứng.
* Phiên bản mới nhất hiện tại là v4.
* **Cài đặt:**

![image](https://user-images.githubusercontent.com/107029410/201249128-03e4441a-6436-41dc-a5b6-015e3f760696.png)

## 2. Các thành phần trong React-Router
### 2.1 BrowserRouter vs HashRouter

* **`React-Router`** cung cấp cho chúng 2 thành phần hay sử dụng đó là BrowserRouter & HashRouter. Hai thành phần này khác nhau ở kiểu **`URL`** mà chúng sẽ tạo ra và đồng bộ.
/
* **`BrowserRouter`**: Được sử dụng phổ biến hơn, nó sử dụng **`History API`** có trong HTML5 để theo dõi lịch sử bộ định tuyến của bạn.
/

* **`HashRouter`**: Sử dụng hash của **`URL`** (window.location.hash) để ghi nhớ mọi thứ.

### 2.2 Route
Route: Định nghĩa một ánh xạ (mapping) giữa một URL và một Component. Điều đó có nghĩa là khi người dùng truy cập theo một URL trên trình duyệt, một Component tương ứng sẽ được render trên giao diện.

![image](https://user-images.githubusercontent.com/107029410/201249883-8bb4e08f-c35d-42ff-b78d-de7aa3f47861.png)

**Trong đó:**

* **path**: Là đường dẫn trên URL.
* **exact:** Liúp cho route này này chỉ hoạt động nếu URL trên trình duyệt phù hợp tuyệt đối với giá trị của thuộc tính path của nó.
* **component:** Là component sẽ đươc load ra tương ứng với Route đó.

### 2.3 Link
Trong HTML thì cặp thẻ để chuyển hướng đó là thẻ <a></a> thì trong react chúng ta sẽ dử dụng cặp thẻ <Link></Link> được import từ React-Router.

![image](https://user-images.githubusercontent.com/107029410/201250128-c7f4a93c-b794-4fcc-906e-716230ecd6e5.png)

**trong đó:**

* **to:** Giống như thuộc tính href trong thẻ a.

### 2.4 NavLink
**`NavLink`** thì rất giống với **`Link`** về cách sử dụng, nhưng **`NavLink`** tốt hơn vì nó hỗ trợ thêm một số thuộc tính như là **`activeClassName`** và **`activeStyle`** 2 thuộc tính này giúp cho khi mà nó trùng khớp thì nó sẽ được active lên và chúng ta có thể style cho nó.

![image](https://user-images.githubusercontent.com/107029410/201250306-86c1b9ef-877e-4c6c-9fec-2a3349963f8f.png)

### 2.5 Custom Link

ở trên ta có thẻ NavLink giúp chúng ta có thêm một thuộc tính nhưng giả sử khi bạn không muốn activeClassName hoặc activeStyle tại thẻ NavLink mà nó lại nằm ở một thẻ bao nó ví dụ như thẻ div hay thẻ li thì sao? sau đây mình sẽ custom lại để có thể sử dụng các class hoặc style ở thẻ bao ngoài của nó.

![image](https://user-images.githubusercontent.com/107029410/201250452-0895195f-3b2a-458d-aeab-ae32dfcf4bf1.png)

### 2.6 Đối tượng Match

Khi bạn muốn lấy một số thông tin ở trên **`URL`** thì bạn có thể dùng đối tượng **`match`** để lấy dữ liệu về. Tại cấu hình **`Router`** ta chỉ cần truyền thêm đối tượng match vào **`component`** mà cần sử dụng đối tượng **`match`**

![image](https://user-images.githubusercontent.com/107029410/201250652-fe858f00-5962-41f8-83bd-8443c535bcdb.png)

Khi console.log(match) ta sẽ có kết quả như sau.

![image](https://user-images.githubusercontent.com/107029410/201250770-a3840f32-b628-4801-87c1-5c120401f3ba.png)

Trong đối tượng params sẽ chứa các tham số mà ta truyền trên URL.

### 2.7 Đối tượng prompt - Xác nhận trước khi chuyển trang
Giả sử khi bạn đang nhập liệu ở form nào đó mà không may click nút back hay chuyển trang thì thôi xong dữ liệu bạn nhập sẽ mất hết để khác phục điều đó ta có đối tượng prompt nó sẽ giúp chúng ta trước khi back hay chuyển trang nó sẽ xác nhận xem là chúng ta có chắc chắn muốn back hay chuyển trang không!

Khi muốn sử dụng đối tượng prompt thì chúng ta chỉ cần import nó từ react-router

![image](https://user-images.githubusercontent.com/107029410/201250988-4ab5a8d9-2c62-4e8c-90f2-a6511cc69116.png)

![image](https://user-images.githubusercontent.com/107029410/201251063-b1756002-d230-4265-9fe9-daaebc75d7ca.png)

### 2.8 Redirect

+ Chức năng dùng để chuyển trang.

+ Có thể truy xuất thông tin trang trước đó thông qua đối tượng location. Để sử dụng Redirect ta chỉ cần import nó từ react-router.

![image](https://user-images.githubusercontent.com/107029410/201251192-83ffb373-006e-4288-adf7-3e60fdeaff50.png)

Khi bạn muốn sử dụng location thì tại cấu hình Router ta chỉ cần truyền thêm đối tượng location vào component mà cần sử dụng đối tượng location.

![image](https://user-images.githubusercontent.com/107029410/201251239-f246cd6b-73e7-4265-9fb2-206fc2c3385f.png)

![image](https://user-images.githubusercontent.com/107029410/201251448-9277cf87-b362-4116-8b56-26137e5fe278.png)


