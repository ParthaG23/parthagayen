import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [hide, setHide] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(() => onFinish?.(), 500);
    }, 2600);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black px-6"
        >
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Name animation */}

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                backgroundPosition: ["-200% 0%", "200% 0%"],
              }}
              transition={{
                opacity: { duration: 0.6 },
                backgroundPosition: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-extrabold
    tracking-widest
    bg-[linear-gradient(120deg,#84cc16,white,#84cc16)]
    bg-[length:200%_100%]
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_18px_rgba(132,204,22,0.6)]
  "
            >
              PARTHA GAYEN
            </motion.h1>

            {/* pulse line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4 }}
              className="
                w-48
                sm:w-56
                md:w-72
                h-[3px]
                bg-gradient-to-r
                from-transparent
                via-lime-400
                to-transparent
              "
            />

            {/* subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.6 }}
              className="
                text-[10px]
                sm:text-xs
                tracking-[0.35em]
                text-gray-400
                uppercase
              "
            >
              Full Stack Developer
            </motion.p>

            {/* Loading bar container */}
            <div className="w-52 sm:w-64 md:w-72 h-[3px] bg-neutral-800 rounded-full overflow-hidden">
              {/* Loading bar */}
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
                className="h-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.9)]"
              />
            </div>

            {/* loading text */}
            <p className="text-[10px] tracking-widest text-gray-500">
              LOADING {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
