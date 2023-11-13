import "./ResourcesPage.css";
import Navbar from "../../Atoms/Navbar/Navbar";

const ResourcesPage = () => {

   return <div className="page loginPage">
      <Navbar active="Resources"/>
      <h1>Resources</h1>

      <div className="ResourcesMainContainer">
         <div>
            <a>Cryptocurrency Tracker</a>
            <a>Budget Planner</a>
         </div>

         <div>
            <a>Log Out</a>
            <a>Delete Account</a>
         </div>

         <div>
            <a>Contact us</a>
         </div>
      </div>
   </div>
}

export default ResourcesPage;