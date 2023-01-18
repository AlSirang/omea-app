export default function Card({ title, stage, description, className }) {
  return (
    <div className="card-main roadmap-card card-outer">
      <div className="d-flex justify-content-between title-container">
        <h3>
          <strong>{title}</strong>
        </h3>
        <div className={className}>
          <p>{stage}</p>
        </div>
      </div>

      <div className="roadmap-points">
        {description.map((point) => (
          <p className="point" key={point}>
            {point}
          </p>
        ))}
      </div>
    </div>
  );
}
