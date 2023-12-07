import "./LoginPage.css";
import diagram from "../../Resources/Images/stats-diagram.png";
import { useState } from "react";
import Navbar from "../../Atoms/Navbar/Navbar";
//import { redirect } from "react-router";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { loginSuccess, loginFailure } from "../../Actions/auth";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const logindata = useSelector(state => state.auth.save);

    if(isAuthenticated) return <Navigate to="/input"/>

    const handleLogin = (e) => {
      if(e) {
        e.preventDefault(); // Prevents the form from submitting and refreshing the page
      }

      // Simulate authentication logic
      const validLogins = Object.values(logindata).flat(); // Flatten the arrays

      const foundUser = validLogins.find(
        (user) => user.id === username && user.password === password
      );

      if (foundUser) {
        dispatch(loginSuccess(username));
        return <Navigate to="/input"/>
      } else if(e) {
        dispatch(loginFailure("Invalid username or password"));
        toast.error("Invalid username or password", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    }
   };

   return (
     <div className="page loginPage">
       <Navbar active="Login" />
       <div className="login-content" style={{ margin: '80px 70px 70px 70px' }}>
        <h1>WealthTrack</h1>
        <h3>Track, manage, and visualize your investments in one place</h3>

        <img src={diagram} alt="WealthTrack Logo"></img>

        <div className="loginForm">
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>

          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" style={{"margin-top": 0}}onClick={handleLogin}>Log In</button>
        </div>
        <Link to="/create"><button> Create Account</button></Link>
       </div>
     </div>
   );
}

export default LoginPage;