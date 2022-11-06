# 1. Các lỗi thường gặp khi sử dụng State/Hook
* ## Khởi tạo sai useState
Khởi tạo useState nghĩa là gì? Để khởi tạo một cái gì đó là đặt giá trị ban đầu của nó.

Vấn đề là useState cho phép bạn xác định trạng thái ban đầu của nó bằng bất cứ thứ gì bạn muốn. Tuy nhiên, tùy thuộc vào thành phần của bạn đang mong đợi gì ở trạng thái đó, việc sử dụng sai giá trị loại này để khởi tạo useState của bạn có thể dẫn đến hành vi không mong muốn trong ứng dụng của bạn, chẳng hạn như không hiển thị giao diện người dùng, dẫn đến lỗi màn hình trống.
![image](https://user-images.githubusercontent.com/107029410/200182392-8feaba4a-8ceb-4d74-8da1-dbd6905f28c5.png)

`Cách khắc phục là khởi tạo useState() với kiểu dữ liệu bạn mong muốn`

![image](https://user-images.githubusercontent.com/107029410/200182568-16ae44a3-ee2d-4605-9972-8daf3e2b1e07.png)



* ## useState sử dụng REPLANCING chứ không phải MERGING
Đối với state trong class component: Khi khai báo state là 1 obj {name: "", age: ""}, nếu thay đổi giá trị của ***age*** thì chỉ cần khai báo vào hàm setState() mà ko cần khai báo lại ***name*** . Kết quả trả về giá trị của name ban đầu và age đã thay đổi
![image](https://user-images.githubusercontent.com/107029410/200179426-6e322d30-9406-440f-bfd5-c44634578e79.png)

Đối với state trong function component: khi thay đổi  giá trị của ***age*** và giữ nguyên giá trị ***name*** thì khi gọi hàm setState(),nếu chỉ khai báo ***age*** cần thay đổi mà không khai báo ***name*** thì kết quả nhận đc là obj chỉ bao gồm ***age*** đã thay đổi
![image](https://user-images.githubusercontent.com/107029410/200180015-2d1e4259-43fe-4d09-8fd9-2409499cf4ed.png)

`Vậy giải pháp để giữ được state ban đầu là sử dụng cú pháp '...'`
![image](https://user-images.githubusercontent.com/107029410/200180701-c50db61f-40d3-4381-a5bc-dae3acca2fb3.png)

* ## initial state chỉ sử dụng cho lần đầu tiên, những lần sau nó không dùng nữa
![image](https://user-images.githubusercontent.com/107029410/200182016-728b61f2-2013-4456-b322-0d39238eaccf.png)

`Giải pháp là sử dụng initial state callback để chạy 1 lần`
![image](https://user-images.githubusercontent.com/107029410/200182113-4068332d-9f72-4a77-96d4-f1f2844f13bb.png)

# 2. Mô hình luồng dữ liệu một chiều - One way data flow và two way data-binding trong React
* ## One way data flow (Mô hình luồng dữ liệu một chiều)
Là 1 phương thức quản lý luồng dữ liệu trong React

Dữ liệu trong React sẽ chỉ được truyền theo 1 chiều duy nhất, đó là từ component cha đến component con thông qua props. Không có chiều ngược lại (thực ra là bạn có thể làm ngược lại nhưng như vậy là trái với quan điểm của React).

Câu hỏi đặt ra, liệu dữ liệu có thực sự được truyền theo 1 chiều duy nhất? Thường là không! Nhưng trong React, chúng ta coi việc truyền "thông tin" từ component con đến component cha là truyền "sự kiện". Trong sự kiện đó component con có thể đính kèm các thông tin của sự kiện (có thể là dữ liệu). Quá trình đó được hiểu là truyền sự kiện, không phải truyền dữ liệu.

`Tóm lại, trong React, dữ liệu sẽ được truyền từ trên xuống, và sự kiện được truyền từ dưới lên.`

* ## One way data flow (Mô hình luồng dữ liệu 2 chiều)

Mô hình luồng dữ liệu 2 chiều có nghĩa là  khi dữ liệu ứng dụng thay đổi thì UI cũng thay đổi và ngược lại
![image](https://user-images.githubusercontent.com/107029410/200186062-063d2c0a-e1f2-4aea-81ba-1071c8255f28.png)

**Component Cha**

![image](https://user-images.githubusercontent.com/107029410/200186141-a7f42a48-5dfc-4e1b-8390-eb1c81f257d9.png)

**Component Con**

![image](https://user-images.githubusercontent.com/107029410/200186184-8c818013-1c3c-4f8b-af1a-de1d869c0400.png)

Chúng tôi sẽ sử dụng prop changeColor trong hàm  handleClick để cập nhật màu sắc. 

changeColor là props được truyền từ ParentComponent. Chúng ta sẽ gửi cho nó giá trị của nút bấm. Bây giờ khi bạn nhấp vào một trong các nút từ ChildComponent, nó sẽ cập nhật trạng thái màu từ ParentComponent. Chúng ta vừa thực hiện liên kết dữ liệu hai chiều với ReactJS
# 4. Controlled Form vs Uncontrolled Form
Trong React, có hai cách để xử lý dữ liệu  **form** trong các component là sử dụng trạng thái trong component để xử lý dữ liệu form . Đây được gọi là thành phần được kiểm soát (Controlled component).Cách thứ hai là để DOM tự xử lý dữ liệu **form** trong component. Đây được biết đến như một thành phần không được kiểm soát (Uncontrolled component)
## Controlled Form
form được sử dụng để lưu trữ thông tin trong một phần tài liệu. Thông tin từ form này thường được gửi đến một máy chủ để thực hiện một hành động. Dữ liệu này được giữ bởi các phần tử input form và các phần tử điều khiển, chẳng hạn như **input**, **select**, **textarea**, v.v., các phần tử này duy trì và kiểm soát trạng thái hoặc giá trị của chúng.

Mỗi phần tử form chứa một giá trị. Giá trị có thể được nhập (input, textarea) hoặc được chọn (**checkbox,** **select**, **radiobutton**, v.v.) bởi người dùng hoặc trình duyệt. Khi giá trị của phần tử bị thay đổi (được kích hoạt bởi thao tác nhập hoặc chọn), giá trị đó sẽ được cập nhật tương ứng.
Bạn có thể lấy giá trị của một phần tử bằng cách sử dụng thuộc tính **.value**. Bạn cũng có thể sử dụng thuộc tính **.value** để đặt giá trị trong các phần tử form.
Bây giờ chúng ta có thể sử dụng trạng thái trong component của mình để giữ hoặc quản lý các giá trị của các phần tử trong một phần tử form. 

Đây là một ví dụ:

![image](https://user-images.githubusercontent.com/107029410/200189960-3472e346-1d83-4365-8516-8252bf2cf6f5.png)

Ở đây chúng ta có hai State: name và email. Các State này được gán cho thuộc tính giá trị của phần tử input name và email.

State name giữ giá trị của phần tử input name. Khi một giá trị đang được nhập vào input name, sự kiện onChange sẽ cập nhật giá trị của input name thay đổi State name bằng cách sử dụng setName().

State email giữ giá trị của phần tử input email. Sự kiện onChange cập nhật giá trị input email thay đổi State email thông qua setEmail() để giữ giá trị được nhập vào phần tử.

Như bạn có thể thấy, các giá trị của phần tử input name và email của chúng tôi được kiểm soát bởi State React. Do đó, thành phần Ứng dụng được hiển thị ở trên là thành phần được kiểm soát.

Hạn chế của việc sử dụng các thành phần được điều khiển là số lượng State trong một thành phần tăng lên khi nhiều phần tử điều khiển được thêm vào phần tử form.

## Uncontrolled Form
Các thành phần không được kiểm soát là những thành phần mà dữ liệu form được xử lý bởi chính DOM. “Uncontrolled” đề cập đến thực tế là các thành phần này không được kiểm soát bởi State React.

Các giá trị của các phần tử form được kiểm soát và lưu trữ trên DOM theo cách truyền thống. Chúng ta sẽ phải tham chiếu đến phiên bản của các phần tử form để lấy các giá trị của chúng từ DOM.

![image](https://user-images.githubusercontent.com/107029410/200190632-fd338ef7-a5e7-4413-a97b-d4aaab3e7432.png)

Trong đoạn code trên, chúng ta đã gán các thuộc tính ID cho các phần tử input name và email với các giá trị name và email tương ứng. Chúng ta sử dụng các thuộc tính id này để nhận giá trị của phần tử input khi form đang được gửi.

Thành phần trên là một thành phần không được kiểm soát vì React không có quyền kiểm soát các giá trị của các phần tử input của form.
### Uncontrolled Form trong React

![image](https://user-images.githubusercontent.com/107029410/200190884-0fead419-b3bd-402d-be9e-b895b1f9e2d8.png)

Chúng ta đã tạo hai refs React, nameRef và emailRef, và gán chúng cho các thuộc tính ref của form name và email tương ứng. Điều này sẽ khiến các refs giữ các phiên bản HTMLElement của các phần tử trong thuộc tính **.current** của chúng. Từ **.current**, chúng ta có thể tham chiếu thuộc tính **.value** để lấy giá trị của các phần tử form.