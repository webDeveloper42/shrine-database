import "./PublicApi.css";
import Content from "../Content/Content";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
function PublicApi() {
  return (
    <div className="api__container">
      <Navbar className="api__navbar" />
      <div className="api__wrapper">
        <Sidebar className="api__sidebar" />
        <Content className="api__content" />
      </div>
    </div>
  );
}
export default PublicApi;
