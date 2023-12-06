import "./LoginPage.css";
import diagram from "../../Resources/Images/stats-diagram.png";
import { useState } from "react";
import Navbar from "../../Atoms/Navbar/Navbar";
//import { redirect } from "react-router";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { loginSuccess, loginFailure } from "../../Actions/auth";
import { toast } from "react-toastify";
import { logindata } from "../../Test/TestData";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    //const history = useHistory();

    const handleLogin = (e) => {
      e.preventDefault(); // Prevents the form from submitting and refreshing the page

      // Simulate authentication logic
      const validLogins = Object.values(logindata).flat(); // Flatten the arrays
  
      const foundUser = validLogins.find(
        (user) => user.id === username && user.password === password
      );
  
      if (foundUser) {
        dispatch(loginSuccess(username));
        window.location.href = "/input";
        // history.push("/input"); 
      } else {
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
       <div className="login-content" style={{ margin: '140px 70px 70px 70px' }}>
        <h1>WealthTrack</h1>
        <h3>Track, manage, and visualize your investments in one place</h3>

        <img src={diagram} alt="WealthTrack Logo"></img>

        <form onSubmit={handleLogin}>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit">Log In</button>
        </form>
       </div>
     </div>
   );
}

export default LoginPage;