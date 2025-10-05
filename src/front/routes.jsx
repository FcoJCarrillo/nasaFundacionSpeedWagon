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
import Signup from "./pages/Signup.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
      <Route index element={<HomePage />} />
      <Route path="/demo3" element={<App3D />} />
      <Route path="/Lvl1" element={<Lvl1 />} />
      <Route path="/Lvl2" element={<Lvl2 />} />
      <Route path="/Lvl3" element={<Lvl3 />} />
      <Route path="/single/:theId" element={<Single />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/signup" element={<Signup/>} />
    </Route>
  )
);