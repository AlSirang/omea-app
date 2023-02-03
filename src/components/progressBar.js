import BootstrapProgressBar from "react-bootstrap/ProgressBar";
import { firstNPostiveNumbersAfterDecimal } from "src/utils/constants";

export default function ProgressBar({ now = 0, max = 10, level = 1 }) {
  console.log({ now });
  return (
    <div className="progressBar-container">
      <h4>level&nbsp; {level}</h4>
      <BootstrapProgressBar
        className="progress-bar"
        variant="warning"
        animated
        // eslint-disable-next-line eqeqeq
        now={now == 0 ? 1 : now}
        max={max}
        label={`${firstNPostiveNumbersAfterDecimal((now / max) * 100, 1)} %`}
      />
    </div>
  );
}
