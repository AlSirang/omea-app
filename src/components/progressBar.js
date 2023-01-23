import BootstrapProgressBar from "react-bootstrap/ProgressBar";

export default function ProgressBar({ progress = 0 }) {
  return (
    <div className="progressBar-container">
      <h4> level</h4>
      <BootstrapProgressBar
        className="progress-bar"
        variant="warning"
        now={60}
        label={`${progress}`}
      />
    </div>
  );
}
