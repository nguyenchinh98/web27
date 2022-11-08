// Chia sẻ state giữa các conponent
// * Nâng giá trị trạng thái lên component cao nhất
// * Sử dụng context để quản lý trạng thái tập trung (tránh việc phải truyền props nhiều lớp)
// * Sd các thư viện quản lý trạng thái( Redux) để quản lý trạng thái global

// const Counter = ({value, onIncrement, onDecrement}) => {
//     return (
//         <div>
//             <h1>Hello</h1>
//             <button onClick={ onDecrement }>-</button>
//             <button> { value } </button>
//             <button onClick={ onIncrement }>+</button>
//         </div>
//     )
// }
// const Square = ({value}) => {
//     const style= {
//         width: 100 + value * 10,
//         height: 100 + value * 10,
//     }
//     return <div className="square" style={style}></div>
// }
// const App = (() => {
//     const [value, setValue] = React.useState(0)
//     return (
//         <div>
//             <Counter
//                 value={value}
//                 onIncrement={() => setValue(value + 1)}
//                 onDecrement={() => setValue(value - 1)}
//             />
//             <Square value={value}/>
//         </div>
//     )
// })

// Two-way data binding

// life-cycle: 
// Vòng đời là các giai đoạn phát triển của sự vật, sự nghiệp
// * Các component trong React thì cũng có các giai đoạn chính

// + Mounting
// --- render()
// --- componentDidMount()

// + Updating
// ---componentDidUpdate()

// + Unmount
// --- ComponentWillUnmount()

// Life cycle method : là phương thức được React định nghĩa và chạy khi component đạt đến giai đoạn cụ thể
// Hạn chế của Life cycle methods trong class component
// --- chỉ có 1 phương thức lifecycle => khi có nhều thao tác khác nhau cần phải chạy trong cùng 1 lifecycle
// --- các lifecycle method chạy ở các giai đoạn khác nhau => 1 thao tác/logic phải tách ra 3 lifecycle method


// useEffect 
// là Hook để quản lý lifecycle trong function component,
// sử dụng để đồng bộ trạng thái của React Component với API bên thứ 3 (hệ thống bên ngoài) => tác dụng phụ
// Cú pháp:  useEffect((callback), [])
/**
 * CHẠY VỚI MỖI LẦN RENDER
 * ***  useEffect (effectCallBack) //ko có dependencies => giống như DidMount và Didupdate
 */
/**CHẠY KHI 1/ NHIỀU GIÁ TRỊ THAY ĐỔI
 * useEffect ((), [value, value1,...]) // DidUpdate
 * 
 * *** KHI CHẠY 
 * 
 */
// CÁC LỖI THƯỜNG GẶP VỚI useEffect
// * ko truyền đúng các dependencies => Xác định rõ các biến bên ngoài đc sử dụng useEffect bao gồm cả 1 số trường hợp biến ko nằm trong useEffect
//* ko có hàm return (unmount) để dọn dẹp => Khi làm với API

// const App = () => {
//     const [count, setCount] = React.useState()
//     const [e, setE] = React.useState(0)
//     React.useEffect (() => {
//         console.log("Render App")
//         return () => {
//             console.log("Before re-render")
//         }
//     }, [e])
//     return (
//         <div className="container">
//             <button onClick={() => setCount(count + 1)}>{count}</button>
           
//             <button onClick={() => setE(e + 1)}>{e}</button>

//         </div>
//     )
// }

const Todo = ({user}) => {
    return (
        <div className="todo">
            <div className="user-id">{user.userId}</div>
            <div className="title">{user.title}</div>
            <div className="body">{user.body}</div>
        </div>
    )
}
const TodoList = () => {
    const list = users.map(({ user }) => {
        return <Todo/>
    })
}
const App = () => {
    // useEffect để đồng bộ trạng thái với API bên ngoài
    // client State
    const [todos, setTodos] = React.useState([])
    
    React.useEffect(() => {
        const Controller = new AbortController()
        // Server State
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            setTodos(data)
        });
        return () => {
            Controller.abort();
        };
    }, [])
    return (
        <div>
            <div className="todo-app">Todos App</div>
            <Todo />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("#app"))
root.render(<App/>)