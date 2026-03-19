import { motion } from "framer-motion";
import { FiXCircle } from "react-icons/fi";
import { useGlass } from "../../hooks/useGlass";

export default function ErrorMessage({ dark, onClose }) {
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
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
        >
          <FiXCircle className="text-red-500 text-5xl mx-auto mb-4" />
        </motion.div>

        <h3
          className="text-xl font-bold mb-2"
          style={{ color: dark ? "#fff" : "#111" }}
        >
          Failed to Send Message
        </h3>

        <p
          className="text-sm mb-6"
          style={{ color: dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)" }}
        >
          Something went wrong. Please try again later.
        </p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={onClose}
          className="px-6 py-2 rounded-full text-sm font-semibold bg-red-500 text-white"
          style={{ boxShadow: "0 4px 16px rgba(239,68,68,0.35)" }}
        >
          Try Again
        </motion.button>
      </motion.div>
    </motion.div>
  );
}