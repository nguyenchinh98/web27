// setState() trong class component: MERGING
this.state = {name: "Chinh", age: 18}
this.setState({age: 20})
// --> {name: "Chinh", age: 20}

// // useState() trong function component: REPLANCING
// const [user, setUser] = useState({name: "Chinh", age: 18});
// setUser({ age: 20 });
// // --> { age: 20 }

// useState() trong function component: REPLANCING
const [user, setUser] = useState({name: "Chinh", age: 18});
setUser({ ...user, age: 20 });
// --> { name: "Chinh", age: 20 }

// function ColorBox() {
//   const initColor = getComplicatedColor();
//   const [color, setColor] = useState(initColor);
//   function handleBoxClick() {
//     setColor("green");
//   }
//   return (
//     <div
//       className="color-box"
//       style={{ backgroundColor: color }}
//       onClick={handleBoxClick}
//     ></div>
//   );
// }

// function ColorBox() {
//      const [color, setColor] = useState(() => {
//          // Hàm chỉ chạy 1 lần
//          const initColor = getComplicatedColor();
//          return initColor;
//      });
//      function handleBoxClick() {
//          setColor('green');
//      }
//  return (
//          <div
//          className="color-box"
//          style={{ backgroundColor: color }}
//          onClick={handleBoxClick}
//          ></div>
//      );
// }

// function App() {
//   // Trạng thái khởi tạo với kiểu dữ liệu mong muốn
//   const [user, setUser] = useState({
//     image: "",
//     name: "",
//     bio: "",
//   });
//   return (
//     <div className="App">
//       <img src={user.image} alt="profile image" />
//       <p>User: {user.name}</p>
//       <p>About: {user.bio}</p>
//     </div>
//   );
// }

// const ParentComponent = () => {
//   const [color, setColor] = useState("red");
//   const changeColor = (newColor) => {
//     setColor(newColor);
//   };
//   return <ChildComponent changeColor={changeColor} />;
// };

const ChildComponent = (props) => {
  const {changeColor}=props;
  const handleClick = (e) => {
  changeColor(e.target.value);
  };
  return (
    <div>
        <button value={'red'} onClick={handleClick}>Red</button>
        <button value={'green'} onClick={handleClick}>Green</button>
        <button value={'blue'} onClick={handleClick}>Blue</button>
    </div>
  );
};



function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function onSubmit() {
    console.log("Name value: " + name);
    console.log("Email value: " + email);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <input type="submit" value="Submit" />
    </form>
  );
}

function App() {
  function onSubmit() {
    console.log("Name value: " + window.name.value);
    console.log("Email value: " + window.email.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" id="name" required />
      <input type="email" name="email" id="email" required />
      <input type="submit" value="Submit" />
    </form>
  );
}


function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  function onSubmit() {
    console.log("Name value: " + nameRef.current.value);
    console.log("Email value: " + emailRef.current.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" ref={nameRef} required />
      <input type="email" name="email" ref={emailRef} required />
      <input type="submit" value="Submit" />
    </form>
  );
}