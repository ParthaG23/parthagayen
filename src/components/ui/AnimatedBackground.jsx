// src/components/ui/AnimatedBackground.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedBackground({ dark }) {
  return (
    <>
      {/*
        ✅ Rendered OUTSIDE the stacking context — directly in body flow.
        Uses fixed + z-0 so it sits behind content (which should be z-10+)
        but ABOVE body background (which is transparent).
      */}

      {/* ── Base gradient — always visible, morphs on theme change ── */}
      <motion.div
        className="fixed inset-0"
        style={{ zIndex: 0 }}
        animate={{
          background: dark
            ? "linear-gradient(135deg, #060a04 0%, #0a1208 50%, #0d1a0a 100%)"
            : "linear-gradient(135deg, #f0f7e8 0%, #e8f5d8 50%, #f5faf0 100%)",
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* ── DARK MODE blobs ── */}
      <AnimatePresence>
        {dark && (
          <>
            {/* Big lime aurora — bottom */}
            <motion.div
              key="d-aurora"
              className="fixed pointer-events-none"
              style={{
                zIndex: 0,
                bottom: "-5%",
                left: "10%",
                width: "80vw",
                height: "55vh",
                background:
                  "radial-gradient(ellipse at 50% 100%, rgba(132,204,22,0.22) 0%, rgba(101,163,13,0.1) 45%, transparent 70%)",
                filter: "blur(60px)",
              }}
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: [1, 1.08, 0.96, 1], scaleY: [1, 1.04, 1.07, 1] }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{
                opacity: { duration: 1 },
                scaleX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                scaleY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Top-left glow */}
            <motion.div
              key="d-glow-l"
              className="fixed pointer-events-none"
              style={{
                zIndex: 0,
                top: "-10%", left: "-5%",
                width: "45vw", height: "50vh",
                background:
                  "radial-gradient(ellipse, rgba(132,204,22,0.15) 0%, transparent 65%)",
                filter: "blur(70px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, 20, 0] }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{
                opacity: { duration: 1 },
                x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Top-right glow */}
            <motion.div
              key="d-glow-r"
              className="fixed pointer-events-none"
              style={{
                zIndex: 0,
                top: "-5%", right: "-5%",
                width: "40vw", height: "45vh",
                background:
                  "radial-gradient(ellipse, rgba(77,124,15,0.18) 0%, transparent 65%)",
                filter: "blur(65px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, -18, 0] }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{
                opacity: { duration: 1, delay: 0.3 },
                x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
            />

            {/* Center floating orb */}
            <motion.div
              key="d-orb"
              className="fixed pointer-events-none rounded-full"
              style={{
                zIndex: 0,
                top: "25%", left: "50%", translateX: "-50%",
                width: "min(700px, 90vw)",
                height: "min(700px, 90vw)",
                background:
                  "radial-gradient(circle, rgba(132,204,22,0.07) 0%, transparent 65%)",
                filter: "blur(40px)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: [1, 1.05, 1], y: [0, -25, 0] }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{
                opacity: { duration: 1 },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Dot grid */}
            <motion.div
              key="d-dots"
              className="fixed inset-0 pointer-events-none"
              style={{
                zIndex: 0,
                backgroundImage:
                  "radial-gradient(circle, rgba(163,230,53,0.2) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 100%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 1.5 }}
            />

            {/* Vignette */}
            <motion.div
              key="d-vignette"
              className="fixed inset-0 pointer-events-none"
              style={{
                zIndex: 0,
                background:
                  "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{ duration: 1 }}
            />
          </>
        )}
      </AnimatePresence>

      {/* ── LIGHT MODE blobs ── */}
      <AnimatePresence>
        {!dark && (
          <>
            {/* Bottom lime glow */}
            <motion.div
              key="l-aurora"
              className="fixed pointer-events-none"
              style={{
                zIndex: 0,
                bottom: "-5%", left: "15%",
                width: "70vw", height: "45vh",
                background:
                  "radial-gradient(ellipse at 50% 100%, rgba(132,204,22,0.25) 0%, rgba(163,230,53,0.1) 50%, transparent 70%)",
                filter: "blur(55px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scaleX: [1, 1.06, 1] }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{
                opacity: { duration: 1 },
                scaleX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Top right blob */}
            <motion.div
              key="l-glow-tr"
              className="fixed pointer-events-none"
              style={{
                zIndex: 0,
                top: "-5%", right: "5%",
                width: "40vw", height: "40vh",
                background:
                  "radial-gradient(ellipse, rgba(132,204,22,0.18) 0%, transparent 65%)",
                filter: "blur(60px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 14, 0] }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{
                opacity: { duration: 1 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Dot grid */}
            <motion.div
              key="l-dots"
              className="fixed inset-0 pointer-events-none"
              style={{
                zIndex: 0,
                backgroundImage:
                  "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 1 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}