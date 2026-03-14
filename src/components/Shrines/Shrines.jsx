import "./Shrines.css";
import ListItem from "../ListItem/ListItem";
function Shrines() {
  return (
    <div className="shrines">
      <div className="shrines__wrapper">
        <div className="shrines__query"></div>
        <ul className="shrines__list">
          <template className="shrines__list-template">
            <ListItem />
          </template>
        </ul>
      </div>
    </div>
  );
}
export default Shrines;
