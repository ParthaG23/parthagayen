import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import heroImg from "../../assets/images/hero.webp";

export default function Navbar({ dark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = window.scrollY > 80;
      setScrolled(prev => (prev !== shouldScroll ? shouldScroll : prev));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemStyle = "relative group transition duration-300";

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
          transition-all duration-300
          ${
            dark
              ? "bg-black/95 border-white/10 text-white"
              : "bg-white/95 border-black/10 text-black"
          }
        `}
      >
        {/* ================= NORMAL NAV ================= */}
        {!scrolled && (
          <>
            {/* PROFILE (CLICKABLE) */}
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="relative flex items-center justify-center group"
            >
              <div className="p-[2px] rounded-full bg-lime-400 transition group-hover:scale-105">
                <img
                  src={heroImg}
                  alt="Partha Gayen"
                  loading="eager"
                  width="56"
                  height="56"
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />
              </div>

              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-1 right-1 w-3 h-3 bg-lime-400 rounded-full border-2 border-black"
              />
            </Link>

            {/* LINKS */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
              {["Home", "About", "Projects", "Contact"].map(
                (item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={navItemStyle}
                  >
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    >
                      {item}
                    </Link>

                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
                  </motion.div>
                )
              )}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
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
                className="md:hidden text-xl"
                onClick={() => setOpen(!open)}
              >
                {open ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </>
        )}

        {/* ================= SCROLLED STATE ================= */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <Link
                to="/"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="flex items-center gap-3"
              >
                <img
                  src={heroImg}
                  alt="Partha Gayen"
                  width="32"
                  height="32"
                  loading="lazy"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </Link>

              <span className="text-sm font-medium whitespace-nowrap">
                Available for work
              </span>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2.5 h-2.5 bg-green-500 rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && !scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-20 w-[90%] rounded-2xl p-6 shadow-lg md:hidden ${
              dark ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <div className="flex flex-col gap-6 text-center text-lg">
              {["Home", "About", "Projects", "Contact"].map(
                (item, index) => (
                  <motion.div key={index} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                      className="hover:text-lime-400 transition"
                    >
                      {item}
                    </Link>
                  </motion.div>
                )
              )}

              <a
                href="/resume.pdf"
                download
                className={`mt-4 px-6 py-2 rounded-full font-medium ${
                  dark
                    ? "bg-lime-400 text-black"
                    : "bg-black text-white"
                }`}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}