import ProgressBar from "react-bootstrap/ProgressBar";

export default function Progress() {
  const now = 60;
  return (
    <div className="progress-bar-div">
      <h4> level</h4>
      <ProgressBar
        className="progress-bar "
        variant="warning"
        now={60}
        label={`${now}`}
      />
    </div>
  );
}
