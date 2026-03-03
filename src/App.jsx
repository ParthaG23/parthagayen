import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ui/ThemeToggle";
import CustomCursor from "./components/ui/CustomCursor";
import ParticleBurst from "./components/ui/ParticleBurst";


function App() {
  const [dark, setDark] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);

  // Optimized device detection (runs only when breakpoint changes)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div
      className={`${dark ? "dark" : ""} w-full min-h-screen overflow-x-hidden`}
    >
      <BrowserRouter>

   

        {/* Effects only on Desktop (performance mode) */}
        {isDesktop && <CustomCursor dark={dark} />}
        {isDesktop && <ParticleBurst dark={dark} />}

        <ThemeToggle dark={dark} setDark={setDark} />
        <AppRoutes dark={dark} />

      </BrowserRouter>
    </div>
  );
}

export default App;