import Home from "../pages/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Login from "../pages/Login";
export const PublicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/services", name: "Services", Component: Services },
  { path: "/login", name: "Login", Component: Login },
];
