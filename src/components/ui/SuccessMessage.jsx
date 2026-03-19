import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { useGlass } from "../../hooks/useGlass";

export default function SuccessMessage({ dark, onClose }) {
  const glassStyle = useGlass(dark);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 40 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="rounded-3xl px-10 py-8 shadow-2xl text-center max-w-sm w-[90%]"
        style={glassStyle}
      >
        {/* Icon with glow */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          className="relative inline-flex items-center justify-center mb-4"
        >
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 64, height: 64,
              background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)",
              filter: "blur(10px)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <FiCheckCircle
            className="text-green-400 text-5xl relative z-10"
            style={{ filter: "drop-shadow(0 0 10px rgba(34,197,94,0.6))" }}
          />
        </motion.div>

        <h3
          className="text-xl font-bold mb-2"
          style={{ color: dark ? "#fff" : "#111" }}
        >
          Message Sent Successfully!
        </h3>

        <p
          className="text-sm mb-6"
          style={{ color: dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)" }}
        >
          Thank you for reaching out. I'll get back to you soon.
        </p>

        <motion.button
          whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}
          whileTap={{ scale: 0.96 }}
          onClick={onClose}
          className="px-6 py-2 rounded-full text-sm font-semibold bg-green-500 text-white"
          style={{ boxShadow: "0 4px 16px rgba(34,197,94,0.3)" }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
}