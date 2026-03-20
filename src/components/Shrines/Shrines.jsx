import "./Shrines.css";
import ListItem from "../ListItem/ListItem";
function Shrines({ shrines }) {
  return (
    <div className="shrines">
      <div className="shrines__wrapper">
        <div className="shrines__query"></div>
        <ul className="shrines__list">
          {shrines.map((shrine) => {
            return <ListItem key={shrine.id} shrine={shrine} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Shrines;
