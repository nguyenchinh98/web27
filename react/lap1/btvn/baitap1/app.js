// class ExampleComponent extends React.Component {
//     render(){
//         return (
//             <div>Đây là ví dụ về class component</div>
//         )
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById("app"));
// root.render(<ExampleComponent/>)

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = { color: "red" };
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car model="Mustang" />);
