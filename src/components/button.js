import { useNavigate } from "react-router-dom";

export const StartEarning = () => {
  const navigation = useNavigate();

  const onEnterApp = () => {
    navigation("/dapp");
  };
  return (
    <button onClick={onEnterApp} className="btn btn-lg btn-primary">
      <span className="start-earning">
        <strong>Start Earning </strong>
      </span>
    </button>
  );
};
