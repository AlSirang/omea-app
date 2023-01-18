export default function TeamCard({ icon, name, role }) {
  return (
    <div className="card-main t-card card-outer">
      <img className="t-icon" src={icon} alt={name} />
      <div className="t-card-content">
        <h4 className="pt-5">
          <strong>{name}</strong>
        </h4>
        <p>{role}</p>
      </div>
    </div>
  );
}
