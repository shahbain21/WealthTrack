import "./LoginPage.css";
import diagram from "../../Resources/Images/stats-diagram.png";
import { useState } from "react";
import Navbar from "../../Atoms/Navbar/Navbar";
//import { redirect } from "react-router";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { loginSuccess, loginFailure } from "../../Actions/auth";


const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    //const history = useHistory();

   const handleLogin = () => {
   // Simulate authentication logic
      if (username === "demo" && password === "password") {
         dispatch(loginSuccess(username));
      //    history.push("/input");
      } else {
       dispatch(loginFailure("Invalid username or password"));
    }
   };

   return (
     <div className="page loginPage">
       <Navbar active="Login" />
       <div className="login-content" style={{ margin: '100px 70px 70px 70px' }}>
        <h1>WealthTrack</h1>
        <h3>Track, manage, and visualize your investments in one place</h3>

        <img src={diagram} alt="WealthTrack Logo"></img>

        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button onClick={handleLogin}>Log In</button>
       </div>
     </div>
   );
}

export default LoginPage;