import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ui/ThemeToggle";
import CustomCursor from "./components/ui/CustomCursor";
import ParticleBurst from "./components/ui/ParticleBurst";

function App() {
  const [dark, setDark] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect mobile once
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div
      className={`${dark ? "dark" : ""} w-full min-h-screen overflow-x-hidden`}
    >
      <BrowserRouter>
        {/* Performance Mode: Effects only on Desktop */}
        {isDesktop && <CustomCursor dark={dark} />}
        {isDesktop && <ParticleBurst dark={dark} />}

        <ThemeToggle dark={dark} setDark={setDark} />
        <AppRoutes dark={dark} />
      </BrowserRouter>
    </div>
  );
}

export default App;