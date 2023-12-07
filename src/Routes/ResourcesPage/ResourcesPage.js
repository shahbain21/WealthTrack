import "./ResourcesPage.css";
import Navbar from "../../Atoms/Navbar/Navbar";
import { Navigate } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector"

const ResourcesPage = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if(!isAuthenticated) return <Navigate to="/"/>

   return (
    <div className="page loginPage">
      <Navbar active="Resources" />
      <h1>Resources</h1>

      <div className="ResourcesMainContainer">
        <div>
          <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">
            Cryptocurrency Tracker
          </a>
          <a href="https://www.nerdwallet.com/article/finance/budget-worksheet" target="_blank" rel="noopener noreferrer">
            Budget Planner
          </a>
        </div>

        <div>
          <a onClick={() => {
              localStorage.removeItem("persist:root");
              window.location.reload();
          }}>Delete Account</a>
        </div>

        <div>
          <a href="mailto:shahbain23@gmail.com">Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;