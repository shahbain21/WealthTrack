import "./Navbar.css"
import { Link } from "react-router-dom";

function getClass(active, name) {
   return active === name ? "navbar_active" : "";
}

const Navbar = (props) => {
   return <div className="navbar">
      <Link to="/" className={getClass(props.active, "Login")}>Login</Link>
      <Link to="/view" className={getClass(props.active, "View")}>View</Link>
      <Link to="/input" className={getClass(props.active, "Input")}>Asset Input</Link>
      <Link to="/update" className={getClass(props.active, "Update")}>Asset Update</Link>
      <Link to="/resources" className={getClass(props.active, "Resources")}>Resources</Link>

      <a style={{"float": "right", "margin-right": "20px"}} onClick={() => {
         localStorage.removeItem("persist:root");
         window.location.reload();
      }}>Log Out</a>
   </div>
}

export default Navbar;