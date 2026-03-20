import "./ListItem.css";
function ListItem({ shrine }) {
  return (
    <li className="shrines__list-item">
      <h2 className="shrines__title">{shrine.name}</h2>
      <p className="shrines__location">{shrine.location}</p>
      <p className="shrines__text">{shrine.description}</p>
      <p className="shrines__address">{shrine.address}</p>
    </li>
  );
}
export default ListItem;
