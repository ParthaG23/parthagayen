import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineHand } from "react-icons/hi";
import { useState, useEffect } from "react";
import heroImg from "../../../public/images/hero.jpg";

export default function Hero({ dark }) {
  const [showHand, setShowHand] = useState(false);

  // Loop Hi ↔ Hand every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHand(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`
        relative min-h-screen
        flex items-center justify-center
        px-6 pt-32 pb-24
        transition-colors duration-500
        ${dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"}
      `}
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col items-center text-center gap-6 lg:hidden">

          <p className="tracking-widest text-xs opacity-70">
            PARTHA GAYEN
          </p>

          <h1 className="text-4xl font-extrabold">
            WEB DEVELOPER
          </h1>

          {/* IMAGE + BADGE */}
          <div className="relative">
            <img
              src={heroImg}
              alt="profile"
              className="w-[240px] aspect-[3/4] object-cover rounded-[28px] shadow-xl"
            />

            {/* Smooth Badge */}
            <motion.div
              className="absolute -left-6 bottom-10
                         w-14 h-14 rounded-full
                         bg-lime-400 flex items-center
                         justify-center shadow-lg"
            >
              <AnimatePresence mode="wait">
                {!showHand ? (
                  <motion.span
                    key="hi"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="text-black font-semibold text-sm"
                  >
                    Hi
                  </motion.span>
                ) : (
                  <motion.div
                    key="hand"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: [0, 20, -20, 20, 0]
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 },
                      rotate: { duration: 1 }
                    }}
                  >
                    <HiOutlineHand className="text-black text-xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <p className="text-sm max-w-xs opacity-70 leading-relaxed">
            Full-Stack Web Developer & Data Analytics Enthusiast.
            I build scalable web applications and transform data
            into meaningful insights that drive real impact.
          </p>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-3 items-center gap-12">

          {/* LEFT */}
          <div>
            <p className="tracking-widest mb-4 text-sm opacity-70">
              PARTHA GAYEN
            </p>

            <h1 className="font-extrabold leading-none text-[clamp(48px,5vw,80px)]">
              WEB
            </h1>
          </div>

          {/* IMAGE + BADGE */}
          <div className="relative flex justify-center">

            <motion.img
              src={heroImg}
              alt="profile"
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
              className="w-[340px] aspect-[3/4] object-cover rounded-[32px] shadow-2xl"
            />

            {/* Smooth Badge */}
            <motion.div
              className="absolute -left-8 bottom-16
                         w-16 h-16 rounded-full
                         bg-lime-400 flex items-center
                         justify-center shadow-lg"
            >
              <AnimatePresence mode="wait">
                {!showHand ? (
                  <motion.span
                    key="hi-desktop"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="text-black font-semibold"
                  >
                    Hi
                  </motion.span>
                ) : (
                  <motion.div
                    key="hand-desktop"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: [0, 20, -20, 20, 0]
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 },
                      rotate: { duration: 1 }
                    }}
                  >
                    <HiOutlineHand className="text-black text-2xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>

          {/* RIGHT */}
          <div className="text-right max-w-md">
            <h1 className="font-extrabold leading-none text-[clamp(48px,5vw,80px)]">
              DEVELOPER
            </h1>

            <p className="mt-6 text-base opacity-70 leading-relaxed">
              Full-Stack Web Developer & Data Analytics Enthusiast.
              Building modern web experiences and data-driven solutions
              that are scalable, efficient, and impactful.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}