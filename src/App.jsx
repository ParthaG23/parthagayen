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

  // Sync dark state → body class
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  // Track desktop/mobile
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handle = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  return (
    <>
      {/* ✅ Splash: only mounted until done — fully unmounts after onFinish */}
      {!splashDone && (
        <SplashScreen onFinish={() => setSplashDone(true)} />
      )}

      {/* ✅ Main app: always mounted so AnimatedBackground loads early,
           but invisible until splash finishes — no opacity fighting */}
      <div
        className={`${dark ? "dark" : ""} w-full min-h-screen`}
        style={{
          opacity: splashDone ? 1 : 0,
          pointerEvents: splashDone ? "auto" : "none",
          transition: splashDone ? "opacity 0.6s ease" : "none",
        }}
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