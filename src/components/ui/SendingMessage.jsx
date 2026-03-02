import { motion } from "framer-motion";
import { ImSpinner2 } from "react-icons/im";

export default function SendingMessage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 40 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-[#111] rounded-3xl px-10 py-8 shadow-2xl flex flex-col items-center gap-4"
      >
        <ImSpinner2 className="text-lime-500 text-4xl animate-spin" />
        <p className="text-lg font-semibold">Sending your message...</p>
      </motion.div>
    </motion.div>
  );
}