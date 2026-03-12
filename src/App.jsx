import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ui/ThemeToggle";
import CustomCursor from "./components/ui/CustomCursor";
import ParticleBurst from "./components/ui/ParticleBurst";
import SplashScreen from "./components/ui/SplashScreen";

function App() {
const [dark, setDark] = useState(false);
const [showSplash, setShowSplash] = useState(true);
const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);

// splash screen duration
useEffect(() => {
const timer = setTimeout(() => {
setShowSplash(false);
}, 2500);


return () => clearTimeout(timer);


}, []);

// optimized device detection
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
<>
{/* Splash Screen */}
{showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}


  {/* Main App */}
  {!showSplash && (
    <div className={`${dark ? "dark" : ""} w-full min-h-screen overflow-x-hidden`}>
      <BrowserRouter>

        {/* Desktop Effects (disabled on mobile for performance) */}
        {isDesktop && <CustomCursor dark={dark} />}
        {isDesktop && <ParticleBurst dark={dark} />}

        <ThemeToggle dark={dark} setDark={setDark} />
        <AppRoutes dark={dark} />

      </BrowserRouter>
    </div>
  )}
</>


);
}

export default App;
