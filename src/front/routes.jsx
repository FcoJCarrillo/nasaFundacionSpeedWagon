// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage.jsx";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import App3D from './components/3d/App1.jsx';
import Lvl1 from './pages/ThreeDRouteLvl1.jsx';
import Lvl2 from './pages/ThreeDRouteLvl2.jsx';
import Lvl3 from './pages/ThreeDRouteLvl3.jsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}

      <Route index element={<HomePage />} />
      <Route path="/demo3" element={<App3D />} />
      <Route path="/Lvl1" element={<Lvl1 />} />
      <Route path="/Lvl2" element={<Lvl2 />} />
      <Route path="/Lvl3" element={<Lvl3 />} />
      <Route path="/single/:theId" element={<Single />} />
      <Route path="/demo" element={<Demo />} />
    </Route>
  )
);