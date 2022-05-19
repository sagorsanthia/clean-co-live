import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PublicRoutes } from "./Routes/PublicRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PrivateRoute from "./Authentication/PrivateRoute";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import AdminRoute from "./Routes/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddServices from "./pages/Dashboard/AddServices";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      <Routes>
        {PublicRoutes.map(({ path, Component, index }) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivateRoute />}>
          {PrivateRoutes.map(({ path, Component, index }) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="add-admin" element={<AddAdmin />} />
            <Route path="add-services" element={<AddServices />} />
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
