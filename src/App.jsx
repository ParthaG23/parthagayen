import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ui/ThemeToggle";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div  className={dark ? "dark w-full min-h-screen overflow-x-hidden" : "w-full min-h-screen overflow-x-hidden"}>
      <BrowserRouter>
        <ThemeToggle dark={dark} setDark={setDark} />
        <AppRoutes dark={dark} />
      </BrowserRouter>
    </div>
  );
}

export default App;