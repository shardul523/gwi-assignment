import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import SignInRoute from "./routes/SignInRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },
  {
    path: "/sign-in",
    element: <SignInRoute />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
