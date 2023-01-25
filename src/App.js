import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dapp from "pages/dapp";
import Home from "pages/home";
import { WalletContextProvider } from "src/context";
import Wrapper from "components/wrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dapp",
    element: <Dapp />,
  },
]);

function App() {
  return (
    <WalletContextProvider>
      <Wrapper />
      <RouterProvider router={router} />
    </WalletContextProvider>
  );
}

export default App;
