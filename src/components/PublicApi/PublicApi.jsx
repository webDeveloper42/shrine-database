import "./PublicApi.css";
import shrines from "../../utils/constants";

const fields = [
  {
    name: "id",
    type: "number",
    description: "Unique identifier for each shrine",
  },
  {
    name: "name",
    type: "string",
    description: "Official shrine name",
  },
  {
    name: "location",
    type: "string",
    description: "City and prefecture label",
  },
  {
    name: "address",
    type: "string",
    description: "Complete shrine address",
  },
];

const sampleRecord = shrines[0];

function PublicApi() {
  return (
    <section className="api">
      <div className="api__hero">
        <p className="api__eyebrow">Public API</p>
        <h1 className="api__title">Shrine Database Documentation</h1>
        <p className="api__lead">
          This database stores shrine records for the Shrine Database. The
          current dataset contains {shrines.length} shrine entries, and each
          entry follows the same core structure shown below.
        </p>
      </div>

      <div className="api__grid">
        <article className="api__card">
          <h2 className="api__section-title">Database Overview</h2>
          <p className="api__text">
            The Shrine Database is a comprehensive collection of Japanese shrine
            records organized for easy search, browsing, and curation. Each
            shrine entry contains essential information for identification,
            location, and access.
          </p>
          <p className="api__text">
            Records are structured consistently and stored in a local data
            source that powers the shrine listing, search functionality, and
            user tracking features across the application.
          </p>
          <p className="api__text">
            <strong>Total Records:</strong> {shrines.length} shrines
          </p>
        </article>

        <article className="api__card">
          <h2 className="api__section-title">Field Reference</h2>
          <ul className="api__field-list">
            {fields.map((field) => (
              <li key={field.name} className="api__field-item">
                <div className="api__field-header">
                  <span className="api__field-name">{field.name}</span>
                  <span className="api__field-type">{field.type}</span>
                </div>
                <p className="api__field-description">{field.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className="api__card api__card--wide">
        <h2 className="api__section-title">Example Record</h2>
        <p className="api__text">
          A shrine record is returned as a JSON object with the following shape:
        </p>
        <pre className="api__code-block">
          <code>{JSON.stringify(sampleRecord, null, 2)}</code>
        </pre>
      </article>

      <div className="api__grid">
        <article className="api__card api__card--wide">
          <h2 className="api__section-title">Content Rules</h2>
          <ul className="api__notes">
            <li>
              <strong>`id`</strong> — Must be unique and numeric. Primary key
              for database records.
            </li>
            <li>
              <strong>`name`</strong> — Official shrine name, matching
              public-facing references where possible.
            </li>
            <li>
              <strong>`location`</strong> — Human-readable city and prefecture
              label (e.g., "Fushimi Ward - Kyoto, Japan").
            </li>
            <li>
              <strong>`address`</strong> — Complete postal address for
              navigation and visitor access.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
export default PublicApi;
