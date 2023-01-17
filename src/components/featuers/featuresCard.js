export default function FeaturesCard({ icon, title, description }) {
  return (
    <div className="card-main f-card">
      <div className="f-card-icon">
        <img className="icon" src={icon} alt={title} />
      </div>
      <div className="f-card-content ">
        <h4 className="pt-5">
          <strong>{title}</strong>
        </h4>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
