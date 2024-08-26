import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import WelcomeNewMember from "./component/WelcomeNewMember";
import Event from "./Event";

function App() {
  return (
    <Router>
      <div className="App">
        <Event />
        <div className="container">
          <h1 className="title">Hello, React! Assignment Module 4 Okta</h1>
          <h3 className="title">For my multiple form assingment are applicable in Register Button</h3>
          <Link to="/register">
            <button className="button">Register</button>
          </Link>
        </div>

        
        <div className="login-register-container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<WelcomeNewMember fullName="User" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
