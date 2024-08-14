import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Event from "./Event";

function App() {
  return (
    <div className="App">
      <Event />
      {/* <div className="container">
        <h1 className="title">Hello, React!</h1>
        <button className="button">Click Me</button>
      </div> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
