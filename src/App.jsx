import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ui/ThemeToggle";
import CustomCursor from "./components/ui/CustomCursor";
import ParticleBurst from "./components/ui/ParticleBurst";
import SplashScreen from "./components/ui/SplashScreen";
import InstallBanner from "./components/ui/InstallBanner";
import AnimatedBackground from "./components/ui/AnimatedBackground";

function App() {
  const [dark, setDark] = useState(false);
  const [splashDone, setSplashDone] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);

  // ✅ Sync dark state → body class so AnimatedBackground & CSS both work
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      {!splashDone && (
        <SplashScreen onFinish={() => setSplashDone(true)} />
      )}

      <div
        className={`${dark ? "dark" : ""} w-full min-h-screen
          transition-opacity duration-700
          ${splashDone ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <AnimatedBackground dark={dark} />

        <BrowserRouter>
          {isDesktop && <CustomCursor dark={dark} />}
          {isDesktop && <ParticleBurst dark={dark} />}
          <ThemeToggle dark={dark} setDark={setDark} />
          <AppRoutes dark={dark} />
          <InstallBanner />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;