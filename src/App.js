import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PublicRoutes } from "./Routes/PublicRoutes";
function App() {
  return (
    <Navbar>
      <Routes>
        {PublicRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
      </Routes>
    </Navbar>
  );
}

export default App;
