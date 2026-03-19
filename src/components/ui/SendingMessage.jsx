import { motion } from "framer-motion";
import { ImSpinner2 } from "react-icons/im";

export default function SendingMessage({ dark }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
    >
      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 40 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="rounded-3xl px-10 py-8 shadow-2xl flex flex-col items-center gap-4"
        style={{
          background: dark ? "rgba(10,10,10,0.6)" : "rgba(255,255,255,0.6)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: dark
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(0,0,0,0.08)",
          boxShadow: dark
            ? "0 24px 60px rgba(0,0,0,0.6)"
            : "0 24px 60px rgba(0,0,0,0.12)",
        }}
      >
        {/* Spinner with glow */}
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 52, height: 52,
              background: "radial-gradient(circle, rgba(163,230,53,0.2) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <ImSpinner2
            className="text-lime-400 text-4xl animate-spin relative z-10"
            style={{ filter: "drop-shadow(0 0 8px rgba(163,230,53,0.6))" }}
          />
        </div>

        <p
          className="text-lg font-semibold"
          style={{ color: dark ? "#fff" : "#111" }}
        >
          Sending your message...
        </p>

        <p
          className="text-xs"
          style={{ color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}
        >
          Please wait a moment
        </p>
      </motion.div>
    </motion.div>
  );
}