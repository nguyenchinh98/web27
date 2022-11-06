// Tạo form, gán sự kiện onChange và sumBit
const HandlingEvent = () => {
  const HandleSubmit = (e) => {
     e.preventDefaut();
     console.log(e)
  }
  const HandleOnchange = (e) => {
    console.log(e.target.value)
  }
  return (
    <form action="" 
        onSubmit={HandleSubmit}
        onChange={HandleOnchange}
        >
        <input type="text" name="username" id="" />
        <select name="gender" id="">
            <option value="">male</option>
            <option value="">fema less</option>
        </select>
      <button>Submit</button>
    </form>
  );
};


// State trên class Component
//  Để cập nhật trang thái sử dụng setState()
class State extends React.Component{
    state = {
        value: 1,
    }
    increment = () => {
        this.setState({value: this.state.value + 1})
    }
    decrement = () => {
        this.setState({value: this.state.value - 1})
    }
    render() {
        return (
          <div>
            <button onClick={this.increment}></button>
            {this.state.value}
            <button onClick={this.decrement}></button>
          </div>
        );
    }
}

// State trên function Component => Hooks : bắt đầu bằng use
//  Các hook có sãn như: useState, useEffect, useRef
/**
 **************useState:
 * - Khai báo 1 giá trị trạng thái cho phếp FC component ghi nhớ 1 gtri giữa mỗi lầm render(), useState trả về 1 cặp giá trị (mảng 2 phần tử) state: giá trị trạng thái, hàm cập nhật giá trị trạng thái
 * 
 * - Cú pháp: 
 * const [state, setState] = useState(initialValue) // initialValue là giá trị đầu tiên
  initialValue: có thể nhận 1 giá trị or 1 hàm trả về giá trị , sd hàm là (lazy initial state) trong trường hợp mà giá trij trạng thái ban đầu cần phải tính toán phức tạp,
  * State: có thể là bất kỳ giá trị nào: chuỗi, số, undefined, array, obj
  * Sử dụng giá trị State thì truy cập trực tiếp thông qua biến "state"
  * Để cập nhật giá trị trạng thái sử dụng hàm setState(tùy mk đặt tên hàm) 
  * +++Lưu ý: ko gọi setState trực tiếp trong phân hàm mà gọi trong các trình xử lí sự kiện
  *  Cú pháp:
  * +++ const [count, setCount] = useState(0)
  *   handleClick = () => {
  *   setCount(count + 1)}
  * 
 */
const App = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const changeDemoRef = (e) => {
    console.log(e)

  }
  const color = (color) => {
    if(count > 0) {
      color = {color: "blue"}
    } else if (count < 0) {
      color = {color: "red"}
    } else  {
      color = {color: "black"}
    }
    return color
  }
  return (
    <div>
      <button onClick={decrement}>giảm dần</button>
      <div style={color()}>{count}</div>
      <button onClick={increment}>tăng dần</button>
      <button onClick={changeDemoRef}>Change</button>
    </div>
  )
}
   
/**
 * *******useRef() -> ko render(), chỉ ghi nhớ giá trị
 * const demoRef = React.useRef(0)
 */

