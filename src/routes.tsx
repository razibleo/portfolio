import { createBrowserRouter } from "react-router-dom";
import PreloadImagePage from "./pages/preloadimage/preloadimage";
import Home from "./pages/home/home";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <PreloadImagePage />,
  },
  {
    path: "main",
    element: <Home />,
  },
]);
export default mainRouter;
