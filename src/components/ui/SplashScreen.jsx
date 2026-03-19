// src/components/ui/SplashScreen.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Progress bar animation
    const duration = 2600;
    const start = performance.now();
    const tick = (now) => {
      const pct = Math.min(((now - start) / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // Step 1: start exit animation at 2.8s
    const exitTimer = setTimeout(() => {
      setExiting(true);

      // Step 2: after exit animation (700ms), call onFinish to unmount
      setTimeout(() => {
        onFinish?.();
      }, 750);
    }, 2800);

    return () => clearTimeout(exitTimer);
  }, [onFinish]);

  return (
    <motion.div
      key="splash"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: "#080a06" }}
      animate={
        exiting
          ? { opacity: 0, scale: 1.08, filter: "blur(16px)" }
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      transition={
        exiting
          ? { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
          : { duration: 0 }
      }
    >
      {/* ── Layer 1: deep radial base ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(30,60,5,0.6) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 50% 0%,   rgba(10,25,2,0.4) 0%,  transparent 60%),
            radial-gradient(ellipse 100% 100% at 50% 50%, #0c0f08 0%, #080a06 100%)
          `,
        }}
      />

      {/* ── Layer 2: aurora blob bottom ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%", left: "50%", translateX: "-50%",
          width: "90vw", height: "50vh",
          background: "radial-gradient(ellipse at 50% 100%, rgba(181,242,61,0.13) 0%, rgba(120,200,20,0.06) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scaleX: [1, 1.1, 0.95, 1], scaleY: [1, 1.05, 1.08, 1], opacity: [0.7, 1, 0.8, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Layer 3: top-left ghost glow ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "-5%", left: "-10%", width: "50vw", height: "50vh",
          background: "radial-gradient(ellipse, rgba(100,180,10,0.07) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ opacity: [0.4, 0.9, 0.4], x: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Layer 4: top-right ghost glow ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "0%", right: "-10%", width: "45vw", height: "45vh",
          background: "radial-gradient(ellipse, rgba(60,120,5,0.08) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
        animate={{ opacity: [0.3, 0.7, 0.3], x: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── Layer 5: center orb ── */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "min(500px, 100vw)", height: "min(500px, 100vw)",
          background: "radial-gradient(circle, rgba(181,242,61,0.055) 0%, transparent 65%)",
          filter: "blur(20px)",
        }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Layer 6: dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(181,242,61,0.18) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.18,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Layer 7: diagonal streak ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "15%", left: "-20%", width: "140%", height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(181,242,61,0.12) 40%, rgba(181,242,61,0.06) 60%, transparent 100%)",
          transform: "rotate(-25deg)",
        }}
        animate={{ opacity: [0, 0.8, 0], x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* ── Layer 8: second diagonal streak ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "20%", left: "-20%", width: "140%", height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(181,242,61,0.07) 50%, transparent 100%)",
          transform: "rotate(-25deg)",
        }}
        animate={{ opacity: [0, 0.6, 0], x: ["10%", "-10%", "10%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* ── Layer 9: vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(4,5,3,0.75) 100%)",
        }}
      />

      {/* ══ CONTENT ══ */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-9 px-4 w-full">

        {/* Logo */}
        <motion.div
          className="relative flex items-center justify-center"
          style={{ width: "clamp(100px, 28vw, 148px)", height: "clamp(100px, 28vw, 148px)" }}
          initial={{ scale: 0.3, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.34, 1.4, 0.64, 1] }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: "1px dashed rgba(181,242,61,0.2)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ inset: "8%", border: "1px dashed rgba(181,242,61,0.12)" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full"
              style={{ border: "1.5px solid rgba(181,242,61,0.4)" }}
              animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
            />
          ))}
          <motion.div
            className="absolute flex items-center justify-center rounded-full"
            style={{
              inset: "14%",
              background: "linear-gradient(145deg, #1e2f0d 0%, #111808 50%, #0d0f0b 100%)",
              border: "1.5px solid rgba(181,242,61,0.4)",
            }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(181,242,61,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
                "0 0 70px rgba(181,242,61,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
                "0 0 30px rgba(181,242,61,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span
              className="font-black select-none"
              style={{
                color: "#b5f23d",
                fontSize: "clamp(18px, 5vw, 28px)",
                letterSpacing: "clamp(2px, 1vw, 5px)",
                textShadow: "0 0 20px rgba(181,242,61,0.5)",
              }}
            >
              PG
            </span>
          </motion.div>
        </motion.div>

        {/* Name + tagline */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
          <motion.h1
            className="font-black uppercase text-white select-none"
            style={{
              fontSize: "clamp(22px, 7vw, 52px)",
              letterSpacing: "clamp(4px, 2vw, 10px)",
              textShadow: "0 0 60px rgba(181,242,61,0.1)",
              maxWidth: "90vw",
            }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span style={{ color: "#b5f23d", textShadow: "0 0 30px rgba(181,242,61,0.4)" }}>
              Partha
            </motion.span>{" "}
            Gayen
          </motion.h1>

          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            <div className="h-px w-8 hidden sm:block" style={{ background: "linear-gradient(90deg, transparent, rgba(181,242,61,0.5))" }} />
            <span className="uppercase text-gray-500" style={{ fontSize: "clamp(8px, 2vw, 10px)", letterSpacing: "clamp(2px, 1vw, 4px)" }}>
              Full-Stack · Data Analytics
            </span>
            <div className="h-px w-8 hidden sm:block" style={{ background: "linear-gradient(90deg, rgba(181,242,61,0.5), transparent)" }} />
          </motion.div>
        </div>

        {/* Progress bar */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <div
            className="relative rounded-full overflow-hidden"
            style={{ width: "min(220px, 60vw)", height: 2, background: "rgba(255,255,255,0.05)" }}
          >
            <div
              className="absolute left-0 top-0 h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #5a9e10, #b5f23d, #d4ff6a)",
                boxShadow: "0 0 10px rgba(181,242,61,0.7)",
              }}
            />
            <div
              className="absolute top-0 h-full w-6 rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                left: `${Math.max(progress - 8, 0)}%`,
              }}
            />
          </div>
          <span className="tabular-nums font-mono" style={{ color: "rgba(181,242,61,0.45)", fontSize: 10, letterSpacing: 3 }}>
            {Math.round(progress)}%
          </span>
        </motion.div>
      </div>

      {/* Corner brackets */}
      {[
        { pos: "top-3 left-3 sm:top-5 sm:left-5",     bt: true,  bb: false, bl: true,  br: false },
        { pos: "top-3 right-3 sm:top-5 sm:right-5",   bt: true,  bb: false, bl: false, br: true  },
        { pos: "bottom-3 left-3 sm:bottom-5 sm:left-5",  bt: false, bb: true,  bl: true,  br: false },
        { pos: "bottom-3 right-3 sm:bottom-5 sm:right-5", bt: false, bb: true,  bl: false, br: true  },
      ].map(({ pos, bt, bb, bl, br }, i) => (
        <motion.div
          key={i}
          className={`absolute w-5 h-5 sm:w-7 sm:h-7 ${pos}`}
          style={{
            borderTop:    bt ? "1px solid rgba(181,242,61,0.22)" : "none",
            borderBottom: bb ? "1px solid rgba(181,242,61,0.22)" : "none",
            borderLeft:   bl ? "1px solid rgba(181,242,61,0.22)" : "none",
            borderRight:  br ? "1px solid rgba(181,242,61,0.22)" : "none",
          }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.07, duration: 0.5, ease: "easeOut" }}
        />
      ))}

      {/* Bottom label */}
      <motion.p
        className="absolute bottom-4 sm:bottom-7 font-mono uppercase"
        style={{ color: "rgba(255,255,255,0.08)", fontSize: 9, letterSpacing: 5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        Portfolio · 2025
      </motion.p>
    </motion.div>
  );
}