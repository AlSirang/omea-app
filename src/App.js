import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dapp from "pages/dapp";
import Home from "pages/home";

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
  return <RouterProvider router={router} />;
}

export default App;
