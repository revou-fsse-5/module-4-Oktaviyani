import { useState } from "react";
import "./App.css";
import Login from "./component/Login";
import Counter from "./Counter";
import Greeting from "./Greeting";

function App() {
  const [message, setMessage] = useState("tes");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setMessage(event.target.value);
  };
  return (
    <div className="App">
      <Login />
      {/* <h1>tes</h1>
      <Counter />
      <Greeting message={message} handleChange={handleChange} /> */}
      {/* <div className="container">
        <h1 className="title">Hello, React!</h1>
        <button className="button">Click Me</button>
      </div> */}
    </div>
  );
}

export default App;