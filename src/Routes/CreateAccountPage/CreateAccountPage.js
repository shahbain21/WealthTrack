import "./CreateAccountPage.css";
import Navbar from "../../Atoms/Navbar/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Actions/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const CreateAccountPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const logindata = useSelector(state => state.auth.save);

    const handleCreateAccount = () => {

      // Simulate account creation logic
      if (username && password) {
        const validLogins = Object.values(logindata).flat();
        console.log(validLogins);
        const foundUser = validLogins.find(
          (user) => user.id === username
        );

        if (foundUser) {
          // Show error toast if username is taken
          toast.error("Username is taken.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          return;
        }

        // Dispatch an action to create a user
        dispatch(createUser({ id: username, password }));

        // Show success toast
        toast.success("Account created successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        // Show error toast if username or password is empty
        toast.error("Username and password are required.", {
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
      <div className="page createAccountPage">
        <Navbar active="Login" />
        <div className="create-account-content" style={{
            "margin": '80px 70px 70px 70px',
            "height": "80vh",
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center"
          }}>
          <h1 style={{"text-align": "center"}}>Create Account</h1>

          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            style={{ display: 'block', margin: '10px auto' }}
          ></input>

          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: 'block', margin: '10px auto' }}
          ></input>

          <button onClick={handleCreateAccount} style={{ display: 'block', margin: '20px auto' }}>
            Create Account
          </button>
        </div>
      </div>
    );
};

export default CreateAccountPage;