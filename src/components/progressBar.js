import BootstrapProgressBar from "react-bootstrap/ProgressBar";

export default function ProgressBar({ progress = 0 }) {
  return (
    <div className="progress-bar-div">
      <h4> level</h4>
      <BootstrapProgressBar
        className="progress-bar "
        variant="warning"
        now={60}
        label={`${progress}`}
      />
    </div>
  );
}
