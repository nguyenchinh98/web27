1. Các lỗi thường gặp khi sử dụng State/Hook
   * Khởi tại sai useState
        Khởi tạo useState nghĩa là gì? Để khởi tạo một cái gì đó là đặt giá trị ban đầu của nó.

        Vấn đề là useState cho phép bạn xác định trạng thái ban đầu của nó bằng bất cứ thứ gì bạn muốn. Tuy nhiên, điều mà không ai nói với bạn hoàn toàn là tùy thuộc vào thành phần của bạn đang mong đợi gì ở trạng thái đó, việc sử dụng sai giá trị loại ngày để khởi tạo useState của bạn có thể dẫn đến hành vi không mong muốn trong ứng dụng của bạn, chẳng hạn như không hiển thị giao diện người dùng, dẫn đến lỗi màn hình trống.

        Ví dụ: chúng tôi có một thành phần mong đợi trạng thái đối tượng người dùng chứa tên, hình ảnh và tiểu sử của người dùng - và trong thành phần này, chúng tôi đang hiển thị các thuộc tính của người dùng.

        Khởi tạo useState với kiểu dữ liệu khác, chẳng hạn như trạng thái trống hoặc giá trị null, sẽ dẫn đến lỗi trang trống, như được hiển thị bên dưới.      
