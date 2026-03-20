import "./Dashboard.css";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__hero">
        <h1 className="dashboard__title">Welcome to the Shrine Finder</h1>
        <p className="dashboard__text">
          A place that host a database of shrines in Japan. You can also view
          shrines you want to visit here too.
        </p>
        <div className="dashboard__link-container">
          <Link to="shrines" className="dashboard__link">
            Shrines
          </Link>
          {/* <Link to="public-api" className="dashboard__link">
            Public Api
          </Link> */}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
