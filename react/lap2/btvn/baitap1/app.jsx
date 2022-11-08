

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "kai",
      lastName: "tran",
    };
  }
  changeName = () => {
    this.setState({ firstName: "sena" });
    this.setState({ lastName: "nguyen" });
  };
  render() {
    return (
      <div>
        <p>Hello: {this.state.firstName} {this.state.lastName}</p>
        <button type="button" onClick={this.changeName}>change name</button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");