import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import heroImg from "../../assets/images/hero.webp";

export default function Contact({ dark }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);

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
      className={`py-20 lg:py-28 ${
        dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ================= IMAGE (Desktop Only) ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <img
            src={heroImg}
            alt="Contact"
            loading="lazy"
            width="500"
            height="520"
            className="rounded-3xl shadow-lg w-full max-w-lg object-cover"
          />
        </motion.div>

        {/* ================= FORM SIDE ================= */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6">
            LET’S WORK TOGETHER
          </h2>

          <p className="opacity-70 mb-8 text-sm lg:text-base">
            Have a project idea or collaboration opportunity?  
            Send me a message and let’s build something amazing.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className={`w-full p-4 rounded-full border outline-none transition ${
                dark
                  ? "bg-[#1a1a1a] border-white/10 focus:border-lime-400"
                  : "bg-white border-gray-300 focus:border-lime-500"
              }`}
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className={`w-full p-4 rounded-full border outline-none transition ${
                dark
                  ? "bg-[#1a1a1a] border-white/10 focus:border-lime-400"
                  : "bg-white border-gray-300 focus:border-lime-500"
              }`}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className={`w-full p-4 rounded-3xl border outline-none transition ${
                dark
                  ? "bg-[#1a1a1a] border-white/10 focus:border-lime-400"
                  : "bg-white border-gray-300 focus:border-lime-500"
              }`}
            />

            <button
              type="submit"
              className="px-10 py-3 rounded-full border-2 border-lime-400 text-lime-400 font-semibold hover:bg-lime-400 hover:text-black transition-all duration-300"
            >
              {loading ? "Sending..." : "SUBMIT"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}