import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <div
      onClick={() => setDark(!dark)}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 cursor-pointer"
    >
      <div
        className={`
          w-16 h-8 rounded-full flex items-center px-1
          shadow-lg border transition-all duration-300
          ${
            dark
              ? "bg-[#1e1e1e] border-white/20"
              : "bg-white border-black/20"
          }
        `}
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