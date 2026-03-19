import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <div
      onClick={() => setDark(!dark)}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 cursor-pointer"
    >
      <div
        className="w-16 h-8 rounded-full flex items-center px-1 shadow-lg border transition-all duration-300"
        style={{
          background: dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.3)",
          borderColor: dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`
            w-6 h-6 rounded-full flex items-center justify-center
            ${dark ? "bg-lime-400 text-black ml-auto" : "bg-black text-white"}
          `}
        >
          {dark ? <FiMoon size={14} /> : <FiSun size={14} />}
        </motion.div>
      </div>
    </div>
  );
}