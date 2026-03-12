import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {

const [hide, setHide] = useState(false);

useEffect(() => {
const timer = setTimeout(() => {
setHide(true);
setTimeout(() => onFinish?.(), 500);
}, 2500);


return () => clearTimeout(timer);


}, [onFinish]);

return ( <AnimatePresence>


  {!hide && (

    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black px-6"
    >

      <div className="flex flex-col items-center gap-6 text-center">

        {/* Name heartbeat animation */}

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: [1, 1.06, 1] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            repeatDelay: 0.6
          }}
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
            tracking-widest
            text-lime-400
            drop-shadow-[0_0_20px_rgba(163,230,53,0.8)]
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
            w-40
            sm:w-52
            md:w-64
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

      </div>

    </motion.div>

  )}

</AnimatePresence>


);
}
