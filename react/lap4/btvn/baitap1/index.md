# 1. Optimistic vs Pessimistic update là gì? Cho ví dụ
## 1.1 Optimistic update?
Một optimistic Update là update mà nó hiện sự thay đổi trước khi nhận được kết quả từ server. Nói cách khác là UI sẽ hiện ra kết quả đó trước khi nhận được trả lời từ server.

**Ví dụ**

Đầu tiên ta có một component App, bên trong nó chứa một button và một state để hiện trạng thái like.

![image](https://user-images.githubusercontent.com/107029410/200648836-ff03ab1b-05f5-4283-9730-f0a40ded0826.png)

Sau đó ta tạo một file tên là api.js để chứa các API. Vì demo nên mình sẽ chỉ cho nó sleep 2s rồi trả về kết quả:

![image](https://user-images.githubusercontent.com/107029410/200649151-74ac4cb9-419e-4101-9701-639d24f43951.png)

Sau đó sửa component App, viết một function để lắng nghe sự kiện click của button

![image](https://user-images.githubusercontent.com/107029410/200649403-ef6c4c25-747e-464e-924a-2981033c80d2.png)

Lúc này app đã hoạt động đúng như mong đợi, tuy nhiên khi bấm vào nút like, ta phải đợi server trả về kết quả (2s) thì mới hiện được trạng thái đã like.

Chính vì thế, ta có thể sửa thành như sau:

![image](https://user-images.githubusercontent.com/107029410/200649827-9c5f3c4b-2637-41a5-bf22-8340bd63a1e2.png)

* Ở function handleLike, thay vì đợi server trả về kết quả, ta sẽ set liked thành true. Và nếu server trả về lỗi, ta sễ set liked thành false và hiện lỗi cho người dùng biết.

## 1.2 Pessimistic update?
Cơ chế này hoạt động bằng cách lock một row trước khi một attribute của nó được thay đổi thông qua việc gọi đến method setAttribute(). Nếu có bất kì transaction khác cố gắng truy cập vào row đã bị khóa đó, chúng sẽ bị buộc phải chờ cho đến khi transaction đầu tiên hoàn thành. 

Cơ chế này sử dụng syntax SELECT...FOR UPDATE. Pessimistic locking là cơ chế locking an toàn nhất bởi việc hai transactions sẽ không bao giờ có thể cùng thay đổi một row. Tuy nhiên, chiến lược locking này có một vài nhược điểm như sau:

* Nếu một user chọn edit một record, sau đó, anh ra đi ăn trưa mà chưa kết thúc hay hủy bỏ transaction này. Khi đó, tất cả các users khác cần update record này sẽ buộc phải đợi cho đến khi anh ta trở lại và hoàn thành transaction, hoặc cho đến khi DBA kill transaction này và mở locking.
Có thể xảy ra Deadlock. Khi User A và B cùng update vào Database trong cùng một thời gian. User A sẽ khóa lại record đó và cố gắng mở khóa được hình thành bởi User B cũng đang đợi mở khóa mà User A vừa hình thành.
/
* Pessimistic locking không nên sử dụng cho web applications bởi nó sẽ tạo trạng thái transaction đang chờ xử lý trong cơ sở dữ liệu ở dạng row-level locks. Nếu Pessimistic locking được thiết lập, quản lý trạng thái sẽ làm việc, nhưng chế độ locking sẽ không thực hiện như mong đợi.Mỗi khi một module được recycled, một rollback được cấp phát trong kết nối JDBC. Điều này giải phóng tất cả các khóa mà Pessimistic locking đã tạo ra.

Ví dụ về Pessimistic locking dựa trên lược đồ hr nổi tiếng, giả sử User 1 và User 2 là hai người dùng khác nhau (hai giao dịch riêng biệt) sử dụng Pessimistic locking, cả hai đều cố gắng thay đổi cùng một dãy dữ liệu như sau:

* User 1 call EmployeesImpl.setSalary (1000) trên một row cụ thể, do đó, user1 ngay lập tức có được một khóa trên row đó.
/
* Bây giờ người User 2 call EmployeesImpl.setSalary (2000) trên một row tương tự, User 2 cố gắng để có được một khóa trên row và nhận được oracle.jbo.AlreadyLockedException.

# 2. Context là gì? Ưu điểm?
## 2.1 Context là gì?
React Context là một phương pháp để chuyển các Props từ (các) component cha sang con, bằng cách lưu trữ các Props trong một store (tương tự trong Redux) và sử dụng các Props này từ store theo (các) component con mà không thực sự chuyển chúng theo cách thủ công ở mỗi cấp của component tree.

## 2.2 Khi nào sử dụng React Context? 
 Nói chung, khi chúng ta có hai hoặc nhiều cấp độ (chiều cao) trong **component tre** của mình, có thể sử dụng một store thay vì chuyển các props và sau đó nâng trạng thái lên vì điều này sẽ tạo ra sự nhầm lẫn và mã dài dòng không cần thiết.

## 2.3 Cách sử dụng Context
* **Tạo đối tượng context:** Chúng ta sử dụng React.createContext(). Nó trả về 1 đối tượng context để lộ ra Provider và Consumer component.
* **Khai báo provider:** Lấy tham chiếu Provider component có sẵn trong đối tượng context vừa tạo.
* **Khai báo consumer:** Đây là 1 component sống trên đối tượng context, và sử dụng nó để hiển thị giá trị cho người dùng.

### * **Tạo đối tượng context:**
Đơn giản là chúng ta sử dụng React.createComponent() để tạo một đối tượng context như sau:

![image](https://user-images.githubusercontent.com/107029410/200743414-e8eb5526-da28-46d0-a54e-eeca31f7f10b.png)

Chúng ta gọi createContext() và truyền vào cho nó 1 tham số đầu vào đơn giản là giá trị mặc định của context. Chúng ta cũng export đối tượng để có thể sử dụng nó ở nhiều nơi khác.

### * **Khai báo Provider**

Sau khi chúng ta có 1 một đối tượng context được định nghĩa ở trên dùng để lấy tham chiếu đến Provider. Đê thưc hiện điều này, ta tạo file sample.js có React component để trình bày cách hoạt động của đối tượng context. Tạo component như sau:

![image](https://user-images.githubusercontent.com/107029410/200743321-cde0d38a-59f1-448e-90a3-130631a95128.png)

Ở trên, ta khai báo một functional component bình thường và cũng import đối tượng context **`Theme`**. Sau đó, ta lấy tham chiếu đến provider bằng cách gọi **`Theme.Provider`**. Đến đây thì thực sự cho có gì gọi là đang họạt động vì bạn có thể thấy rằng chúng ta đang thiếu một component gọi là Consumer để sử dụng giá trị và hiển thị ra cho người dùng. Ngoài ra thì ta cũng đặt value là dark

### * **Khai báo Consumer**
Ta khai báo component là Consumer và hiển thị giá trị cho người dùng. Tiếp tục với file sample.js như sau:

![image](https://user-images.githubusercontent.com/107029410/200743665-cc5094e9-b96c-4355-8d2d-02179f006391.png)

Ở trên, ta đã thêm consumer dưới dạng đối tượng **`Theme.Consumer`** và ta thấy rằng bên trong nó định nghĩa một hàm có tham số truyền vào là giá trị của **`**theme`**. Ta hiển thị giá trị của **`theme`** vào trong thẻ **`div`**.

Bạn có nghĩ đến tại sao ta lại đặt giá trị mặc định trong component Theme? Giá trị mặc định trên sẽ không được sử dụng nếu ta khai báo Provider. Tuy nhiên, nếu ta thiếu một component Provider, thì nó sẽ sử dụng đến giá trị mặc định. Vì vậy, đoạn mã sau sẽ xuất ra **`dark`** dưới dạng giá trị, chính là giá trị mà ta đặt cho Provider.

![image](https://user-images.githubusercontent.com/107029410/200781770-9260f029-0fd1-4a7a-b021-4f225823589c.png)

Và với đoạn mã sau đây thì giá trị có nó sẽ là light:

![image](https://user-images.githubusercontent.com/107029410/200781942-4cc4d9fe-5f9b-48ac-9625-de270a680475.png)

### * **Sử dụng**

Ta có thể đưa thành phần Consumer đưa vào component như sau:

![image](https://user-images.githubusercontent.com/107029410/200782834-e2719581-4755-4d69-89af-792dacadcd2d.png)

Ở **sample.js** có thể viết gọn như sau:

![image](https://user-images.githubusercontent.com/107029410/200783018-3645980c-5321-4127-994b-6fba92860ccc.png)

Bạn thấy rằng giá trị từ provider đang được truyền qua các props và ta có thể truy cập vào thuộc tính **`theme`** thông qua Consumer.

# 3. Tìm nạp dữ liệu với useEffect
# 4. Custom hook là gì? Ví dụ một custom hook.
## 4.1 Custom Hook là gì?

Custom hooks là việc các bạn tự tạo ra một hook mới với chức năng riêng biệt của nó. Việc này giúp tách phần code logic ra khỏi UI giúp code tường minh, dễ quản lý hơn, tránh lặp lại code và tái sử dụng.

Ví dụ khi bạn không dùng custom hook:

![image](https://user-images.githubusercontent.com/107029410/200785124-034334ed-cc47-4fa2-8323-121853b6002f.png)

và bây giờ nếu bạn muốn dùng window width ở component khác thì phải lặp lại phần code trên. Đây là lúc **custom hooks** phát huy tác dụng.

## 4.2 Xây dựng custom hooks

![image](https://user-images.githubusercontent.com/107029410/200786004-923b07fc-d100-4b16-87f1-023afb6a5d94.png)

Và đây là thành quả của chúng ta, bạn có thể sử dụng hook useWindowSize ở bất kì component nào.

![image](https://user-images.githubusercontent.com/107029410/200786190-96af231e-dbcb-4b74-97d7-75d3f379e663.png)








