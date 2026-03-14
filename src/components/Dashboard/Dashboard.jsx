import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__hero">
        <h1 className="dashboard__title">Welcome to the Shrine Finder</h1>
        <p className="dashboard__text">
          A place that host a database of shrines in Japan
        </p>
        <div className="dashboard__link-container">
          <a href="./Shrines" className="dashboard__link-shrine">
            View Shrines
          </a>
          <a href="./PublicApi" className="dashboard__link-dev">
            For Developers
          </a>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
