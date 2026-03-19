// src/components/ui/AnimatedBackground.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground({ dark }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    // Defer background mount by 1 frame so LCP content paints first
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  // ── MOBILE: CSS-only, zero JS animation, zero filter cost ──
  if (isMobile) {
    return (
      <div
        className="fixed inset-0"
        style={{
          zIndex: 0,
          background: dark
            ? "radial-gradient(ellipse 120% 80% at 50% 100%, #071203 0%, #050d02 40%, #020702 100%)"
            : "radial-gradient(ellipse 120% 80% at 50% 100%, #eefbe0 0%, #f4faea 40%, #fafff5 100%)",
          transition: "background 1.2s ease",
        }}
      >
        {/* Single cheap bottom glow — no blur, no animation */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "10%",
            width: "80%",
            height: "40%",
            background: dark
              ? "radial-gradient(ellipse at 50% 100%, rgba(132,204,22,0.18) 0%, transparent 70%)"
              : "radial-gradient(ellipse at 50% 100%, rgba(132,204,22,0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Dot grid — CSS only, no JS */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: dark
              ? "radial-gradient(circle, rgba(163,230,53,0.18) 1px, transparent 1px)"
              : "radial-gradient(circle, rgba(101,163,13,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 85% 75% at 50% 55%, black 10%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 55%, black 10%, transparent 80%)",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />
      </div>
    );
  }

  // ── DESKTOP: full animated version ──
  return (
    <>
      {/* Base gradient */}
      <motion.div
        className="fixed inset-0"
        style={{ zIndex: 0 }}
        animate={{
          background: dark
            ? "radial-gradient(ellipse 120% 80% at 50% 100%, #071203 0%, #050d02 40%, #020702 100%)"
            : "radial-gradient(ellipse 120% 80% at 50% 100%, #eefbe0 0%, #f4faea 40%, #fafff5 100%)",
        }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />

      {/* Noise grain */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          opacity: dark ? 0.04 : 0.03,
          mixBlendMode: dark ? "overlay" : "multiply",
        }}
      />

      <AnimatePresence>
        {dark && (
          <>
            <motion.div key="d-aurora-main" className="fixed pointer-events-none"
              style={{ zIndex: 0, bottom: "-15%", left: "50%", translateX: "-50%", width: "110vw", height: "65vh",
                background: "radial-gradient(ellipse at 50% 100%, rgba(132,204,22,0.28) 0%, rgba(101,163,13,0.14) 35%, rgba(77,124,15,0.06) 60%, transparent 75%)",
                filter: "blur(80px)" }}
              initial={{ opacity: 0, scaleX: 0.7 }}
              animate={{ opacity: 1, scaleX: [1, 1.12, 0.94, 1.06, 1], scaleY: [1, 1.05, 1.08, 0.97, 1] }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ opacity: { duration: 1.5 }, scaleX: { duration: 10, repeat: Infinity, ease: "easeInOut" }, scaleY: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
            />
            <motion.div key="d-aurora-tl" className="fixed pointer-events-none"
              style={{ zIndex: 0, top: "-20%", left: "-10%", width: "55vw", height: "60vh",
                background: "radial-gradient(ellipse at 30% 30%, rgba(132,204,22,0.18) 0%, rgba(101,163,13,0.08) 50%, transparent 70%)",
                filter: "blur(90px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ opacity: { duration: 1.5, delay: 0.3 }, x: { duration: 14, repeat: Infinity, ease: "easeInOut" }, y: { duration: 14, repeat: Infinity, ease: "easeInOut" } }}
            />
            <motion.div key="d-aurora-tr" className="fixed pointer-events-none"
              style={{ zIndex: 0, top: "-10%", right: "-8%", width: "45vw", height: "50vh",
                background: "radial-gradient(ellipse at 70% 20%, rgba(56,189,48,0.14) 0%, rgba(77,124,15,0.07) 50%, transparent 70%)",
                filter: "blur(75px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, -25, 8, 0], y: [0, 18, -8, 0] }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ opacity: { duration: 1.5, delay: 0.5 }, x: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }, y: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 } }}
            />
            <motion.div key="d-orb" className="fixed pointer-events-none rounded-full"
              style={{ zIndex: 0, top: "30%", left: "50%", translateX: "-50%", width: "min(600px, 85vw)", height: "min(600px, 85vw)",
                background: "radial-gradient(circle at 40% 40%, rgba(163,230,53,0.09) 0%, rgba(132,204,22,0.04) 45%, transparent 68%)",
                filter: "blur(50px)" }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: [1, 1.07, 0.97, 1.04, 1], y: [0, -35, 10, -20, 0], x: [0, 20, -15, 8, 0] }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ opacity: { duration: 1.5 }, scale: { duration: 13, repeat: Infinity, ease: "easeInOut" }, y: { duration: 13, repeat: Infinity, ease: "easeInOut" }, x: { duration: 11, repeat: Infinity, ease: "easeInOut" } }}
            />
            <motion.div key="d-horizon" className="fixed pointer-events-none"
              style={{ zIndex: 0, bottom: "0", left: "50%", translateX: "-50%", width: "100vw", height: "2px",
                background: "linear-gradient(90deg, transparent 0%, rgba(163,230,53,0.0) 15%, rgba(163,230,53,0.6) 35%, rgba(163,230,53,0.9) 50%, rgba(163,230,53,0.6) 65%, rgba(163,230,53,0.0) 85%, transparent 100%)",
                filter: "blur(2px)", boxShadow: "0 0 40px 8px rgba(163,230,53,0.15)" }}
              initial={{ opacity: 0, scaleX: 0.3 }}
              animate={{ opacity: 1, scaleX: [1, 1.15, 0.9, 1] }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{ opacity: { duration: 1.5 }, scaleX: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
            />
            <motion.div key="d-dots" className="fixed inset-0 pointer-events-none"
              style={{ zIndex: 0,
                backgroundImage: "radial-gradient(circle, rgba(163,230,53,0.25) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(ellipse 80% 70% at 50% 55%, black 10%, rgba(0,0,0,0.4) 50%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 55%, black 10%, rgba(0,0,0,0.4) 50%, transparent 80%)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 0.22 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              transition={{ duration: 2 }}
            />
            <motion.div key="d-vignette" className="fixed inset-0 pointer-events-none"
              style={{ zIndex: 0, background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.85) 100%)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ duration: 1.2 }}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!dark && (
          <>
            <motion.div key="l-aurora" className="fixed pointer-events-none"
              style={{ zIndex: 0, bottom: "-10%", left: "50%", translateX: "-50%", width: "100vw", height: "55vh",
                background: "radial-gradient(ellipse at 50% 100%, rgba(132,204,22,0.32) 0%, rgba(163,230,53,0.14) 40%, transparent 68%)",
                filter: "blur(70px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scaleX: [1, 1.08, 0.95, 1] }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ opacity: { duration: 1.2 }, scaleX: { duration: 9, repeat: Infinity, ease: "easeInOut" } }}
            />
            <motion.div key="l-glow-tr" className="fixed pointer-events-none"
              style={{ zIndex: 0, top: "-10%", right: "-5%", width: "50vw", height: "50vh",
                background: "radial-gradient(ellipse at 70% 20%, rgba(132,204,22,0.22) 0%, rgba(163,230,53,0.08) 55%, transparent 72%)",
                filter: "blur(65px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 20, -8, 0], x: [0, -15, 5, 0] }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ opacity: { duration: 1.2, delay: 0.2 }, y: { duration: 11, repeat: Infinity, ease: "easeInOut" }, x: { duration: 11, repeat: Infinity, ease: "easeInOut" } }}
            />
            <motion.div key="l-glow-tl" className="fixed pointer-events-none"
              style={{ zIndex: 0, top: "-5%", left: "-5%", width: "40vw", height: "40vh",
                background: "radial-gradient(ellipse at 30% 30%, rgba(101,163,13,0.16) 0%, transparent 65%)",
                filter: "blur(60px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 15, -5, 0] }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ opacity: { duration: 1.2, delay: 0.4 }, y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
            />
            <motion.div key="l-horizon" className="fixed pointer-events-none"
              style={{ zIndex: 0, bottom: "0", left: "50%", translateX: "-50%", width: "100vw", height: "1.5px",
                background: "linear-gradient(90deg, transparent 0%, rgba(132,204,22,0.7) 40%, rgba(163,230,53,0.95) 50%, rgba(132,204,22,0.7) 60%, transparent 100%)",
                filter: "blur(1px)" }}
              initial={{ opacity: 0, scaleX: 0.2 }}
              animate={{ opacity: 1, scaleX: [1, 1.1, 0.92, 1] }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{ opacity: { duration: 1.5 }, scaleX: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
            />
            <motion.div key="l-dots" className="fixed inset-0 pointer-events-none"
              style={{ zIndex: 0,
                backgroundImage: "radial-gradient(circle, rgba(101,163,13,0.2) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(ellipse 85% 75% at 50% 55%, black 10%, rgba(0,0,0,0.3) 55%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 55%, black 10%, rgba(0,0,0,0.3) 55%, transparent 80%)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 0.5 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              transition={{ duration: 1.5 }}
            />
            <motion.div key="l-vignette" className="fixed inset-0 pointer-events-none"
              style={{ zIndex: 0, background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(200,230,160,0.15) 70%, rgba(180,210,130,0.3) 100%)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ duration: 1.2 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}