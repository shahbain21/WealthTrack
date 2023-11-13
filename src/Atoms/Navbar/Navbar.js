import "./Navbar.css"

function getClass(active, name) {
   return active === name ? "navbar_active" : "";
}

const Navbar = (props) => {
   return <div className="navbar">
      <a href="/" className={getClass(props.active, "Login")}>Login</a>
      <a href="/input" className={getClass(props.active, "Input")}>Asset Input</a>
      <a href="/update" className={getClass(props.active, "Update")}>Asset Update</a>
      <a href="/view" className={getClass(props.active, "View")}>View</a>
      <a href="/resources" className={getClass(props.active, "Resources")}>Resources</a>
   </div>
}

export default Navbar;