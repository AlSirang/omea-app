import { useOnAppLoad } from "src/hooks/web3.hooks";

export default function Wrapper() {
  useOnAppLoad();

  return null;
}
