import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import profileImg from "../../assets/images/about.jpg";

export default function Contact({ dark }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
const [selected, setSelected] = useState("Select...");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong ❌");
      });
  };

  return (
    <section
  id="contact"
  className={`
        relative min-h-screen
        flex items-center justify-center
        px-6 pt-32 pb-24
        transition-colors duration-500
        ${dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"}
      `}
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* ================= LEFT IMAGE ================= */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative hidden lg:block"
    >
     <img
  src={profileImg}
  alt="profile"
  className="
    rounded-3xl shadow-2xl
    w-full max-w-lg
    h-[520px] object-cover
  "
/>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute -bottom-10 -left-10 w-28 h-28
                   rounded-full bg-lime-400
                   flex items-center justify-center
                   text-black text-2xl font-bold shadow-xl"
      >
        Hi
      </motion.div>
    </motion.div>

    {/* ================= RIGHT SIDE ================= */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl font-extrabold mb-6">
        LET’S WORK TOGETHER
      </h2>

      <p className="opacity-70 mb-12 max-w-lg">
        Let’s build something impactful together — whether it's your
        website, MERN project, or internship opportunity.
      </p>

      <form className="space-y-8">

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-lime-400 text-sm mb-2 block">
              Name
            </label>
            <input
              type="text"
              className="
    w-full p-4 rounded-full
    bg-gray-100 dark:bg-[#1f1f1f]
    text-black dark:text-white
    border border-gray-300 dark:border-white/10
    focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30
    outline-none transition
    appearance-none cursor-pointer
  "
            />
          </div>

          <div>
            <label className="text-lime-400 text-sm mb-2 block">
              Email
            </label>
            <input
              type="email"
            className="
    w-full p-4 rounded-full
    bg-gray-100 dark:bg-[#1f1f1f]
    text-black dark:text-white
    border border-gray-300 dark:border-white/10
    focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30
    outline-none transition
    appearance-none cursor-pointer
  "
            />
          </div>
        </div>

        {/* Dropdown */}
       <div className="relative">
  <label className="text-lime-400 text-sm mb-2 block">
    Service Needed?
  </label>

  {/* Dropdown Button */}
  <div
    onClick={() => setOpen(!open)}
    className="
      w-full p-4 rounded-full
      bg-gray-100 dark:bg-[#1f1f1f]
      text-black dark:text-white
      border border-gray-300 dark:border-white/10
      cursor-pointer
      flex justify-between items-center
      hover:border-lime-400
      transition
    "
  >
    {selected}
    <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
      ▼
    </span>
  </div>

  {/* Dropdown Menu */}
  {open && (
    <div
      className="
        absolute w-full mt-2 rounded-2xl overflow-hidden
        bg-white dark:bg-[#1f1f1f]
        border border-gray-200 dark:border-white/10
        shadow-xl z-20
      "
    >
      {["MERN Stack Project", "Portfolio Website", "Internship"].map(
        (item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelected(item);
              setOpen(false);
            }}
            className="
              px-6 py-3 cursor-pointer
              hover:bg-lime-400 hover:text-black
              transition
            "
          >
            {item}
          </div>
        )
      )}
    </div>
  )}
</div>

        {/* Textarea */}
        <div>
          <label className="text-lime-400 text-sm mb-2 block">
            What Can I Help You...
          </label>
          <textarea
            rows="5"
            className="
              w-full p-6 rounded-3xl
              bg-gray-100 dark:bg-[#1f1f1f]
              text-black dark:text-white
              border border-gray-300 dark:border-white/10
              focus:border-lime-400
              outline-none transition
            "
          ></textarea>
        </div>

        {/* Submit */}
        <button
          className="
            px-12 py-4 rounded-full
            border-2 border-lime-400
            text-lime-400 font-bold
            hover:bg-lime-400 hover:text-black
            transition-all duration-300
          "
        >
          SUBMIT
        </button>

      </form>
    </motion.div>

  </div>
</section>
  );
}