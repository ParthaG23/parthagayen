import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import ContactPage from "../pages/ContactPage";
import NotFound from "../pages/NotFound";

export default function AppRoutes({ dark }) {
  return (
    <Routes>
      <Route path="/" element={<Home dark={dark} />} />
      <Route path="/about" element={<About dark={dark} />} />
      <Route path="/projects" element={<Projects dark={dark} />} />
      <Route path="/contact" element={<ContactPage dark={dark} />} />
      <Route path="*" element={<NotFound dark={dark} />} />
    </Routes>
  );
}