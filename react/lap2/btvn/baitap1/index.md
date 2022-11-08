# 1. Keys là gì? Sử dụng keys khi render
## 1.1 Key là gì?
*  Key là một thuộc tính giúp React xác định những phần tử nào đã thay đổi, được thêm, hay bị xóa. 
* Các key nên được truyền vào các element bên trong một mảng để cho các element này có một định danh cố định (stable identity):

*** Ví dụ:

![image](https://user-images.githubusercontent.com/107029410/200620744-3f4f0c84-5d35-4774-a0b9-2908e5dddedc.png)

* Các tốt nhất để chọn một key là sử dụng một chuỗi mà được xác định là duy nhất trong các nút anh em (siblings). 
* Cách thông thường nhất mà bạn sẽ sử dụng là dùng các ID từ dữ liệu của bạn làm key:

![image](https://user-images.githubusercontent.com/107029410/200621054-1adb1cfe-60ea-4b33-bc5a-300af62361bc.png)

* Khi bạn không có các ID cố định (stable IDs) cho việc render các phần tử, bạn có thể sử dụng thứ tự của phần tử đó trong danh sách như là một key cũng như là một phương án cuối cùng:

![image](https://user-images.githubusercontent.com/107029410/200621182-7c759780-a6b2-43ee-a2bb-2e4e0b9721eb.png)

* không khuyến khích sử dụng thứ tự của các phần tử cho các key nếu thứ tự của các phần tử có thể thay đổi. Điều này có thể ảnh hưởng đến hiệu suất và có thể gây ra một vài vấn đề với state của component.  
* Nếu bạn lựa chọn việc không gán cho key một định danh rõ ràng thì mặc định React sẽ sử dựng thứ tự của phần tử cho key.

## 1.2 Chia Nhỏ Các Component Với Key
* Các key chỉ hợp lí trong trường hợp liên quan đến mảng dữ liệu.
* Ví dụ, nếu bạn chia nhỏ component ListItem, bạn nên giữ việc truyền key vào các **`<ListItem />`** element trong mảng thay vì truyền vào thẻ **`<li>`** bên trong **ListItem element**.

**Ví dụ: Trường hợp sử dụng key chưa chính xác**

![image](https://user-images.githubusercontent.com/107029410/200622243-7b9915f9-3c45-4a39-a71e-984dd3bd4b7e.png)

**Ví dụ: Trường hợp sử dụng key chính xác**

![image](https://user-images.githubusercontent.com/107029410/200623721-c7909501-0957-49d8-a631-4de087728220.png)

* Một nguyên tắc nhỏ đó là các element bên trong hàm gọi map() cần các key.

# 2. State là gì
* Trong React, state là các thành phần để xây dựng nên một component.
* State là lưu lưu trữ các giá trị của component, khi state thay đổi thì component cũng được render lại.
## Tạo State object
* Đối tượng state được tạo trong hàm constructor (hàm khởi tạo) của component.
* State có thể chứa nhiều các thuộc tính khác nhau:
***Ví dụ***

![image](https://user-images.githubusercontent.com/107029410/200633966-11b570b7-f525-4778-a941-7f677ad3bb0a.png)

## Thay đổi State
* Trong ví dụ này mình sẽ thực hiện sử dụng component `<Name />` để render, sau đó thay đổi state để browser render lại component `<Name />`

![image](https://user-images.githubusercontent.com/107029410/200634912-3bf49a4a-12f9-4ba7-81c5-0068cf4fe16c.png)

* Để thay đổi state, ta dùng hàm setState() chứ không được gán trực tiếp giá trị cho các thuộc tính trong state.

* Fucntion changeName() sẽ thực hiện thay đổi state

* Khi click vào  button, nó sẽ gọi tới function changeName() làm cho state bị thay đổi và component sẽ được render lại

# 3. Hook là gì? Sử dụng hook useState?
### a. Hook là gì
* Hooks là một bổ sung mới trong React 16.8.

* Hooks là những hàm cho phép bạn “kết nối” React state và lifecycle vào các components sử dụng hàm.

* Với Hooks bạn có thể sử dụng state và lifecycles mà không cần dùng ES6 Class.

### b. Tại sao chúng ta cần React Hooks?
Sau một thời gian làm việc với React thì có lẽ chúng ta sẽ bắt gặp một trong số các vấn đề sau:

* **“Wrapper hell”** các component được lồng (nested) vào nhau nhiều tạo ra một DOM tree phức tạp.

* Component quá lớn.
* Sự rắc rối của Lifecycles trong class

* React Hooks được sinh ra với mong muốn giải quyết những vấn đề này.
### c. Lợi ích của hook
* Khiến các component trở nên gọn nhẹ hơn

* Giảm đáng kể số lượng code, dễ tiếp cận

* Cho phép chúng ta sử dụng state ngay trong function component

### d. Quy tắc của Hooks
* Chỉ gọi Hooks **trên cùng**. Không gọi Hooks bên trong vòng lặp, điều kiện, hoặc các hàm lồng nhau.
* Chỉ gọi Hooks từ các **React components dạng hàm**. Không gọi Hooks từ hàm JavaScript bình thường.

## 3.2 Sử dụng hook useState?
### a. Khai báo một biến state
Trong một class, chúng ta khởi tạo count state về 0 bằng cách cài đặt **`this.state`** về { count: 0 } bên trong constructor:

![image](https://user-images.githubusercontent.com/107029410/200638720-73fbfc61-f6e1-482c-a53c-69a27b82818a.png)

Bên trong một function component, chúng ta không có **`this`**, cho nên chúng ta không thể cài đặt hoặc đọc **`this.state`**. Thay vào đó, chúng ta gọi useState Hook trực tiếp bên trong component:

![image](https://user-images.githubusercontent.com/107029410/200639018-52826b7e-11ef-4c75-bd2b-3e0f6f4ac9c0.png)

* **Hàm useState làm gì khi được gọi?** 
Nó khai báo một “state variable” (biến state). Biến này gọi là **`count`** nhưng ta có thể gọi nó với bất kì tên nào, ví dụ gọi là **`banana`**. Đây là cách để “lưu giữ” các giá trị giữa các lần gọi hàm — **`useState`** là một cách mới để sử dụng như là cách **`this.state`** được dùng trong class. Thông thường, các biến này “biến mất” khi hàm kết thúc nhưng các biến state này được React giữ lại.
/
* **Hàm useState nhận tham số gì?** 
Tham số duy nhất được truyền vào hook **`useState()`** là state ban đầu. Không giống như khai báo với Class, state không cần thiết phải là object mà có thể là số hoặc chuỗi. Với ví dụ trên, ta chỉ cần biết người dùng click bao nhiêu lần, vì vậy ta truyền vào giá trị khởi tạo là **0**. (Nếu ta muốn lưu hai giá trị khác nhau, ta sẽ gọi **`useState()`** hai lần.)
/
* **useState trả về gì?** 
Nó trả về một cặp giá trị dưới dạng mảng: state hiện tại và một hàm để update nó. Đây là lý do chúng ta viết **`const [count, setCount] = useState()`**. Cặp này tương tự như **`this.state.count`** và **`this.setState`** trong class, khác là ta dùng chúng theo cặp. Nếu bạn không quen với cách dùng này, chúng ta sẽ quay trở lại thêm ở cuối trang.

**Ví dụ**

![image](https://user-images.githubusercontent.com/107029410/200639018-52826b7e-11ef-4c75-bd2b-3e0f6f4ac9c0.png)

Ví dụ trên khai báo một biến state gọi là **`count`** và set nó về **0**. React sẽ nhớ giá trị hiện tại của nó và cung cấp cho hàm của chúng ta giá trị mới nhất giữa những lần **`re-render`**. Nếu chúng ta muốn cập nhật giá trị **`count`** hiện tại, có thể gọi hàm **`setCount`**.

### b. Đọc State
Khi muốn hiển thị giá trị hiện tại của state count trong class, chúng ta đọc từ this.state.count:

![image](https://user-images.githubusercontent.com/107029410/200641002-ae680dd9-1c95-482b-a79f-161185583ec8.png)

Trong hàm (sử dụng với hooks), chúng ta dùng trực tiếp biến count:

![image](https://user-images.githubusercontent.com/107029410/200641120-23c1d30d-4ac9-4eae-bab3-2985fca8ca96.png)

### c. Updating State
Trong class, chúng ta cần gọi this.setState() để update state count:

![image](https://user-images.githubusercontent.com/107029410/200641233-b818e740-0851-4d6f-a91a-34cf92add50e.png)

Trong hàm (sử dụng với hooks), chúng ta đã có biến setCount và count cho nên không cần this:

![image](https://user-images.githubusercontent.com/107029410/200641318-4eaf52e6-1e3a-4b1c-a2df-72073ab430ed.png)

# 4. Xử lý sự kiện trong React
## 4.1 ReactJS Events
* React là một thư viện dựa trên Javascript, về cơ bản không có nhiều khác biệt trong cách xử lý sự kiện giữa ReactJS và Javascript. 

* Với Javascript, khi sự kiện xẩy ra một hàm sẽ được gọi để thực thi. Nhưng với React, khi sự kiện xẩy ra, sẽ có một phương thức của Component được gọi.

* Các sự kiện React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange,...

**Ví dụ, đoạn HTML sau:**

![image](https://user-images.githubusercontent.com/107029410/200643086-578e533b-3928-4dc8-a706-3898e8a5f47a.png)

Trong React sẽ có đôi chút khác biệt:

![image](https://user-images.githubusercontent.com/107029410/200643235-b35f13e1-b029-4665-ac55-d183c114e87d.png)

Một điểm khác biệt nữa trong React là bạn không thể trả về **`false`** để chặn những hành vi mặc định mà phải gọi **`preventDefault`** trực tiếp. Lấy ví dụ với đoạn HTML sau, để chặn hành vi mặc định của đường dẫn là mở trang mới, bạn có thể viết:

![image](https://user-images.githubusercontent.com/107029410/200643458-e2822f76-4233-48b3-a68e-85ca02df89de.png)

Còn trong React, bạn có thể làm như thế này:

![image](https://user-images.githubusercontent.com/107029410/200643564-320a54c2-0ab4-49d1-8b76-a527e4c7f4a4.png)

* Ở đây, **`e`** là một sự kiện ảo (synthetic event). React định nghĩa những sự kiện ảo này dựa trên chuẩn W3C, nên bạn không cần lo lắng về sự tương thích giữa những browser. React events không hoạt động chính xác giống như những event nguyên bản (native event).

* Khi làm việc với React, bạn thường không cần phải gọi **`addEventListener`** để gắn **`listener`** cho element DOM sau khi nó được khởi tạo. Thay vào đó, bạn chỉ cần cung cấp một **`listener`** ngay lần đầu element được render.

Khi bạn định nghĩa component bằng class ES6, một mẫu thiết kế phổ biến là sử dụng phương thức của class để bắt sự kiện. Ví dụ, component Toggle dưới đây render một chiếc nút để người dùng thay đổi giữa state “ON” và “OFF”:

![image](https://user-images.githubusercontent.com/107029410/200644493-24e2b549-682e-4bda-a237-0d66b5adf09c.png)

Bạn phải cẩn thận về ý nghĩa của **`this`** trong những callback JSX. Trong JavaScript, những phương thức của class mặc định không bị ràng buộc. Nếu bạn quên ràng buộc **`this.handleClick`** và truyền nó vào **`onClick`**, **`this`** sẽ có giá trị là undefined khi phương thức này được thực thi.

Đây không phải là tính chất của React mà là một phần trong cách những hàm JavaScript hoạt động. Thông thường, nếu bạn trỏ tới phương thức mà không có **`()`** theo sau như **`onClick={this.handleClick}`**, bạn nên ràng buộc phương thức đó.

Nếu bạn thấy việc gọi **`bind`** phiền phức thì có hai giải pháp. Trong trường hợp bạn đang sử dụng cú pháp thuộc tính class public thử nghiệm, bạn có thể dùng những thuộc tính **`class`** để ràng buộc **`callback`** một cách chính xác:

![image](https://user-images.githubusercontent.com/107029410/200645028-57554e52-88a7-4e20-b645-adcf795515d3.png)

Nếu bạn không sử dụng cú pháp thuộc tính class, bạn có thể dùng “hàm rút gọn” **`arrow function`** trong callback:

![image](https://user-images.githubusercontent.com/107029410/200645238-41d52de2-46e8-4fdc-b4d2-92937b69e8e3.png)

Vấn đề với cú pháp này nằm ở chỗ một **`callback`** khác sẽ được khởi tạo mỗi khi **`LogginButton render`**. Điều này ổn với đa số trường hợp. Tuy nhiên, nếu callback này được truyền duới dạng **`prop`** xuống những component con, những component này sẽ bị render lại. Nói chung,  khuyến khích việc ràng buộc ở **`constructor`** hoặc sử dụng cú pháp thuộc tính class để ngăn chặn vấn đề về hiệu suất này.

## 4.2 Truyền Tham số vào Hàm Bắt Sự kiện

Bên trong một vòng lặp, người ta thường muốn truyền thêm một parameter cho một event handler. Ví dụ như, nếu id là ID của dòng (row), thì 2 dòng code bên dưới sẽ work:

![image](https://user-images.githubusercontent.com/107029410/200645871-fba9a40f-c677-44e4-a8f3-84e1703007c0.png)

* Hai dòng code trên là tương đương, và lần lượt sử dụng **`hàm rút gọn`** và **`Function.prototype.bind`**.

* Trong cả hai trường hợp, tham số **`e`**, đại diện cho sự kiện React, sẽ được truyền là tham số thứ hai sau số định danh. Với **`hàm rút gọn`**, chúng ta phải truyền nó trực tiếp, nhưng với **`bind`** thì những tham số còn lại sẽ tự động nối tiếp.