import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import heroImg from "../../assets/images/nav.webp";
import { useScrolled } from "../../hooks/useScrolled";
import { useGlass } from "../../hooks/useGlass";

export default function Navbar({ dark }) {
  const scrolled   = useScrolled(50);
  const glassStyle = useGlass(dark);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = ["Home", "About", "Projects", "Contact"];

  const textColor = dark ? "text-white" : "text-black";

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50 px-4">
      <motion.div
        animate={{
          width: scrolled ? "360px" : "100%",
          paddingTop: scrolled ? "8px" : "12px",
          paddingBottom: scrolled ? "8px" : "12px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`max-w-6xl rounded-full shadow-lg border flex items-center
          ${scrolled ? "justify-center px-4" : "justify-between px-6"}
          transition-colors duration-500 ${textColor}`}
        style={glassStyle}
      >

        {/* ═══ NORMAL NAV ═══ */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              key="full-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full flex items-center justify-between"
            >
              {/* Profile */}
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative flex items-center justify-center group flex-shrink-0"
              >
                <div className="p-[2px] rounded-full bg-lime-400 transition group-hover:scale-105">
                  <img
                    src={heroImg}
                    alt="Partha Gayen"
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                  />
                </div>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute bottom-1 right-1 w-3 h-3 bg-lime-400 rounded-full border-2 border-black"
                />
              </Link>

              {/* Links */}
              <div className="hidden md:flex gap-8 text-sm font-medium">
                {navItems.map((item) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  const isActive = location.pathname === path;
                  return (
                    <motion.div
                      key={item}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group transition duration-300"
                    >
                      <Link
                        to={path}
                        className={`transition ${
                          isActive ? "text-lime-400 drop-shadow-[0_0_8px_#a3e635]" : ""
                        }`}
                      >
                        {item}
                      </Link>
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-lime-400 transition-all duration-300
                          ${isActive ? "w-full shadow-[0_0_10px_#a3e635]" : "w-0 group-hover:w-full"}`}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Right */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`hidden md:block px-5 py-2 rounded-full text-sm font-medium shadow-sm transition ${
                    dark
                      ? "bg-lime-400 text-black hover:bg-lime-300"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Download CV
                </motion.a>
                <button
                  className="md:hidden text-xl p-1"
                  onClick={() => setOpen((o) => !o)}
                  aria-label="Toggle menu"
                >
                  {open ? <FiX /> : <FiMenu />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══ SCROLLED PILL ═══ */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              key="scrolled-nav"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src={heroImg}
                  alt="Partha Gayen"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </Link>

              <span
                className={`text-sm font-medium whitespace-nowrap mx-2 ${
                  dark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Available for work
              </span>

              {/* Green glow dot */}
              <div className="relative flex items-center justify-center w-6 h-6 isolate flex-shrink-0">
                <motion.div
                  className="absolute rounded-full bg-green-400"
                  animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: 12, height: 12 }}
                />
                <motion.div
                  className="relative z-10 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: 10, height: 10,
                    boxShadow: "0 0 6px #22c55e, 0 0 14px #22c55e, 0 0 28px #22c55e",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ═══ MOBILE MENU ═══ */}
      <AnimatePresence>
        {open && !scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`absolute top-20 w-[90%] rounded-2xl p-6 shadow-xl md:hidden ${textColor}`}
            style={glassStyle}
          >
            <div className="flex flex-col gap-5 text-center text-lg">
              {navItems.map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive = location.pathname === path;
                return (
                  <motion.div key={item} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={path}
                      onClick={() => setOpen(false)}
                      className={`transition ${
                        isActive
                          ? "text-lime-400 drop-shadow-[0_0_8px_#a3e635]"
                          : "hover:text-lime-400"
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a
                href="/resume.pdf"
                download
                whileTap={{ scale: 0.95 }}
                className={`mt-2 px-6 py-2.5 rounded-full font-medium ${
                  dark ? "bg-lime-400 text-black" : "bg-black text-white"
                }`}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}