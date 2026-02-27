import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import profile from "../../assets/images/hero.jpg";

export default function Navbar({ dark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemStyle =
    "relative group transition duration-300";

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50 px-4">

      <motion.div
        animate={{
          width: scrolled ? "360px" : "100%",
          paddingTop: scrolled ? "8px" : "12px",
          paddingBottom: scrolled ? "8px" : "12px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`
          max-w-6xl rounded-full backdrop-blur-md
          shadow-xl border flex items-center
          ${scrolled ? "justify-center px-4" : "justify-between px-6"}
          transition-all duration-300
          ${
            dark
              ? "bg-black/80 border-white/10 text-white"
              : "bg-white/80 border-black/10 text-black"
          }
        `}
      >

        {/* ================= NORMAL NAV ================= */}
        {!scrolled && (
          <>
            {/* LEFT PROFILE */}
           <motion.div
  whileHover={{ scale: 1.05 }}
  className="relative flex items-center justify-center"
>
  <div className="p-[2px] rounded-full bg-lime-400">
    <img
      src={profile}
      alt="profile"
      className="
        w-14 h-14
        rounded-full
        object-cover
        object-center
        shadow-xl
      "
    />
  </div>

  <motion.span
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    className="
      absolute bottom-1 right-1
      w-3 h-3
      bg-lime-400
      rounded-full
      border-2 border-black
    "
  />
</motion.div>

            {/* CENTER LINKS */}
            <div className="hidden md:flex gap-8 text-sm font-medium">

              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={navItemStyle}
                >
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                    {item}
                  </Link>

                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.div>
              ))}

            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">

              {/* CV BUTTON */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  hidden md:block px-5 py-2 rounded-full text-sm font-medium
                  transition-all duration-300 shadow-md
                  ${
                    dark
                      ? "bg-lime-400 text-black hover:bg-lime-300"
                      : "bg-black text-white hover:bg-gray-800"
                  }
                `}
              >
                Download CV
              </motion.a>

              {/* MOBILE MENU BUTTON */}
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
              <img
                src={profile}
                alt="profile"
                className="w-8 h-8 rounded-full object-cover"
              />

              <span className="text-sm font-medium whitespace-nowrap">
                Available for work
              </span>

              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

      {/* ================= MOBILE DROPDOWN ================= */}
      <AnimatePresence>
        {open && !scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`
              absolute top-20 w-[90%] rounded-2xl p-6 shadow-xl md:hidden
              ${dark ? "bg-black text-white" : "bg-white text-black"}
            `}
          >
            <div className="flex flex-col gap-6 text-center text-lg">

              {["Home", "About", "Projects", "Blogs"].map((item, index) => (
                <motion.div
                  key={index}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="hover:text-lime-400 transition"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              {/* MOBILE CV BUTTON */}
              <a
                href="/resume.pdf"
                download
                className={`
                  mt-4 px-6 py-2 rounded-full font-medium
                  ${
                    dark
                      ? "bg-lime-400 text-black"
                      : "bg-black text-white"
                  }
                `}
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