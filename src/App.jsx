import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Nation from "./pages/Nation/Nation";
import RootLayout from "./layouts/RootLayout/RootLayout";

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/nation" element={<Nation/>}/>
  </Route>
)

const router = createBrowserRouter(routesFromElements)

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
