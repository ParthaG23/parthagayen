
import { motion } from "framer-motion";
import { FiXCircle } from "react-icons/fi";

export default function ErrorMessage({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 40 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white dark:bg-[#111] rounded-3xl px-10 py-8 shadow-2xl text-center max-w-sm"
      >
        <FiXCircle className="text-red-500 text-5xl mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">
          Failed to Send Message
        </h3>
        <p className="opacity-70 text-sm">
          Something went wrong. Please try again later.
        </p>
      </motion.div>
    </motion.div>
  );
}
