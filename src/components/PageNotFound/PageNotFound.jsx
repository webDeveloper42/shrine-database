import "./PageNotFound.css";
function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found__wrapper">
        <h1 className="not-found__indicator">404</h1>
        <p className="not-found__title">Whoops Page Not Found Go Back</p>
      </div>
    </div>
  );
}
export default PageNotFound;
