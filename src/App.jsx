import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home, { nationsLoader } from "./pages/Home/Home";
import Nation, { nationDetailsLoader } from "./pages/Nation/Nation";
import RootLayout from "./layouts/RootLayout/RootLayout";

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} loader={nationsLoader} />
    <Route
      path="/nation/:code"
      element={<Nation />}
      loader={nationDetailsLoader}
    />
  </Route>
);

const router = createBrowserRouter(routesFromElements);

/* createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nation",
    element: <Nation />,
  },
]); */

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
