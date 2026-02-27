import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineHand } from "react-icons/hi";
import { useState, useEffect } from "react";
import heroImg from "../../assets/images/hero.webp"; 
// change to .jpg if needed

export default function Hero({ dark }) {
  const [showHand, setShowHand] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHand(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-6 pt-32 pb-24 transition-colors duration-500 ${
        dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="tracking-widest mb-4 text-sm opacity-70">
              PARTHA GAYEN
            </p>

            <h1 className="font-extrabold text-4xl lg:text-[clamp(48px,5vw,80px)] leading-none">
              WEB
            </h1>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center my-10 lg:my-0">

            <motion.img
              src={heroImg}
              alt="Partha Gayen"
              loading="eager"
              fetchPriority="high"
              width="340"
              height="450"
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
              className="w-[240px] lg:w-[340px] aspect-[3/4] object-cover rounded-[32px] shadow-lg"
            />

            {/* BADGE */}
            <motion.div
              className="absolute -left-6 lg:-left-10 bottom-10 lg:bottom-16
                         w-14 h-14 lg:w-16 lg:h-16 rounded-full
                         bg-lime-400 flex items-center justify-center shadow-md"
            >
              <AnimatePresence mode="wait">
                {!showHand ? (
                  <motion.span
                    key="hi"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-black font-semibold text-sm lg:text-base"
                  >
                    Hi
                  </motion.span>
                ) : (
                  <motion.div
                    key="hand"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      rotate: [0, 15, -15, 15, 0]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ rotate: { duration: 0.8 } }}
                  >
                    <HiOutlineHand className="text-black text-xl lg:text-2xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-right max-w-md mx-auto lg:mx-0">
            <h1 className="font-extrabold text-4xl lg:text-[clamp(48px,5vw,80px)] leading-none">
              DEVELOPER
            </h1>

            <p className="mt-6 text-base opacity-70 leading-relaxed">
              Full-Stack Web Developer & Data Analytics Enthusiast.
              Building modern web experiences and scalable solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}