import "./LoginPage.css";
import diagram from "../../Resources/Images/stats-diagram.png";
import { useState } from "react";
import Navbar from "../../Atoms/Navbar/Navbar";
import { redirect } from "react-router";

const LoginPage = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   return <div className="page loginPage">
      <Navbar active="Login"/>
      <h1>WealthTrack</h1>
      <h3>Track, manage, and visualize your investments in one place</h3>

      <img src={diagram} alt="WealthTrack Logo"></img>

      <input placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
      <input placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>

      <button onClick={() => {
         console.log("Click");
         window.location = "/input"
      }}>Log In</button>
   </div>
}

export default LoginPage;