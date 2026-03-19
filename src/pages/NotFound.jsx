import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import { useGlass } from "../hooks/useGlass";

// ── Floating particle ──────────────────────────────────────────────────────
function Particle({ dark, style }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: 6,
        height: 6,
        background: dark ? "rgba(163,230,53,0.5)" : "rgba(100,180,20,0.4)",
        boxShadow: "0 0 8px rgba(163,230,53,0.6)",
        ...style,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: style.duration ?? 3,
        repeat: Infinity,
        delay: style.delay ?? 0,
        ease: "easeInOut",
      }}
    />
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function NotFound({ dark }) {
  const glassStyle = useGlass(dark);

  const particles = [
    { top: "20%", left: "10%",  delay: 0,    duration: 3.2 },
    { top: "60%", left: "85%",  delay: 0.8,  duration: 2.8 },
    { top: "75%", left: "15%",  delay: 1.4,  duration: 3.6 },
    { top: "30%", left: "80%",  delay: 0.3,  duration: 2.5 },
    { top: "85%", left: "60%",  delay: 1.9,  duration: 3.0 },
    { top: "15%", left: "55%",  delay: 0.6,  duration: 4.0 },
    { top: "50%", left: "5%",   delay: 2.1,  duration: 2.7 },
    { top: "40%", left: "92%",  delay: 1.1,  duration: 3.4 },
  ];

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden px-6 transition-colors duration-500 ${
        dark ? "text-white" : "text-gray-900"
      }`}
    >
      {/* ── Ambient glow blobs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%", left: "50%", transform: "translateX(-50%)",
          width: 500, height: 500,
          background: dark
            ? "radial-gradient(circle, rgba(163,230,53,0.07) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(163,230,53,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%", left: "20%",
          width: 300, height: 300,
          background: dark
            ? "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <Particle key={i} dark={dark} style={p} />
      ))}

      {/* ── Main card ── */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-lg rounded-3xl px-8 py-12 sm:px-14 sm:py-16 text-center shadow-2xl"
        style={glassStyle}
      >

        {/* ── Shimmer top line ── */}
        <motion.div
          className="absolute top-0 left-8 right-8 h-[1px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(163,230,53,0.6), transparent)",
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── 404 glitch number ── */}
        <div className="relative inline-block mb-2">
          <motion.h1
            className="font-black leading-none select-none"
            style={{
              fontSize: "clamp(80px, 22vw, 140px)",
              color: "transparent",
              WebkitTextStroke: dark
                ? "2px rgba(163,230,53,0.8)"
                : "2px rgba(80,140,10,0.7)",
              filter: dark
                ? "drop-shadow(0 0 24px rgba(163,230,53,0.4))"
                : "drop-shadow(0 0 16px rgba(163,230,53,0.3))",
            }}
            animate={{ opacity: [1, 0.85, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.h1>

          {/* Glitch duplicate */}
          <motion.h1
            aria-hidden
            className="absolute inset-0 font-black leading-none select-none"
            style={{
              fontSize: "clamp(80px, 22vw, 140px)",
              color: "transparent",
              WebkitTextStroke: "2px rgba(163,230,53,0.25)",
              clipPath: "inset(40% 0 50% 0)",
            }}
            animate={{ x: [-3, 3, -3], opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          >
            404
          </motion.h1>
        </div>

        {/* ── Status badge ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border"
          style={{
            background: dark ? "rgba(163,230,53,0.08)" : "rgba(163,230,53,0.12)",
            borderColor: dark ? "rgba(163,230,53,0.25)" : "rgba(163,230,53,0.4)",
          }}
        >
          {/* Pulsing dot */}
          <span className="relative flex h-2 w-2">
            <motion.span
              className="absolute inline-flex h-full w-full rounded-full bg-lime-400"
              animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
          </span>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: dark ? "#a3e635" : "#5a8c10" }}
          >
            Page Not Found
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl sm:text-3xl font-extrabold mb-3"
        >
          Oops! Lost in the void?
        </motion.h2>

        {/* ── Subtext ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm sm:text-base mb-10 leading-relaxed"
          style={{ color: dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)" }}
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>

        {/* ── CTA buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          {/* Primary — Go Home */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #a3e635, #84cc16)",
                color: "#000",
                boxShadow: "0 4px 20px rgba(163,230,53,0.35)",
              }}
            >
              <FiHome size={15} />
              Go Home
            </Link>
          </motion.div>

          {/* Secondary — Go Back */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-sm border-2 border-lime-400 transition-all duration-300"
              style={{ color: dark ? "#a3e635" : "#5a8c10" }}
            >
              <FiArrowLeft size={15} />
              Go Back
            </button>
          </motion.div>
        </motion.div>

        {/* ── Bottom shimmer line ── */}
        <motion.div
          className="absolute bottom-0 left-8 right-8 h-[1px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(163,230,53,0.3), transparent)",
          }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </motion.div>

      {/* ── Footer hint ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-8 text-xs tracking-widest uppercase"
        style={{ color: dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
      >
        Partha Gayen · Portfolio
      </motion.p>
    </section>
  );
}
