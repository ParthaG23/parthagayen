import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export default function AppRoutes({ dark }) {
  return (
    <Routes>
      <Route path="/" element={<Home dark={dark} />} />
      <Route path="/about" element={<About dark={dark} />} />
    </Routes>
  );
}