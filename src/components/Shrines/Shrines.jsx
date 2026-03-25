import "./Shrines.css";
import ListItem from "../ListItem/ListItem";
function Shrines({ shrines }) {
  return (
    <section className="shrines">
      <div className="shrines__hero">
        <p className="shrines__eyebrow">Browse</p>
        <h1 className="shrines__title">Shrine Directory</h1>
        <p className="shrines__lead">
          Explore a comprehensive listing of {shrines.length} shrines across
          Japan. Click on any shrine to view detailed information and add it to
          your personal collection.
        </p>
      </div>

      <article className="shrines__card">
        <h2 className="shrines__section-title">All Shrines</h2>
        <ul className="shrines__list">
          {shrines.map((shrine) => {
            return <ListItem key={shrine.id} shrine={shrine} />;
          })}
        </ul>
      </article>
    </section>
  );
}
export default Shrines;
