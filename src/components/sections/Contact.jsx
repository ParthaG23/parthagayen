import React, { memo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import heroImg from "../../assets/images/hero.webp";

import SendingMessage from "../ui/SendingMessage";
import SuccessMessage from "../ui/SuccessMessage";
import ErrorMessage from "../ui/ErrorMessage";

const Contact = memo(function Contact({ dark }) {
  const formRef = useRef(null);

  // idle | sending | success | error
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  /* ================= VALIDATION ================= */

  const validate = useCallback((data) => {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    } else if (data.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  }, []);

  /* ================= SEND EMAIL ================= */

  const sendEmail = useCallback(
    async (e) => {
      e.preventDefault();
      if (status === "sending") return;

      const formData = {
        name: formRef.current.name.value,
        email: formRef.current.email.value,
        message: formRef.current.message.value,
      };

      const validationErrors = validate(formData);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) return;

      setStatus("sending");

      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAIL_SERVICE,
          import.meta.env.VITE_EMAIL_TEMPLATE,
          formRef.current,
          import.meta.env.VITE_EMAIL_PUBLIC
        );

        formRef.current.reset();
        setStatus("success");
      } catch (error) {
        console.error("EmailJS Error:", error);
        setStatus("error");
      }
    },
    [status, validate]
  );

  /* ================= UI ================= */

  return (
    <section
      id="contact"
      className={`py-20 lg:py-28 ${
        dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* IMAGE SIDE */}
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

        {/* FORM SIDE */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6">
            LET’S WORK TOGETHER
          </h2>

          <p className="opacity-70 mb-8 text-sm lg:text-base">
            Have a project idea or collaboration opportunity?
            Send me a message and let’s build something amazing.
          </p>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6"
            noValidate
          >
            {/* NAME */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`w-full p-4 rounded-full border outline-none transition ${
                  dark
                    ? "bg-[#1a1a1a] border-white/10 focus:border-lime-400"
                    : "bg-white border-gray-300 focus:border-lime-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`w-full p-4 rounded-full border outline-none transition ${
                  dark
                    ? "bg-[#1a1a1a] border-white/10 focus:border-lime-400"
                    : "bg-white border-gray-300 focus:border-lime-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className={`w-full p-4 rounded-3xl border outline-none transition ${
                  dark
                    ? "bg-[#1a1a1a] border-white/10 focus:border-lime-400"
                    : "bg-white border-gray-300 focus:border-lime-500"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 px-10 py-3 rounded-full border-2 border-lime-400 text-lime-400 font-semibold hover:bg-lime-400 hover:text-black transition-all duration-300 disabled:opacity-60"
            >
              <FiSend />
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* STATUS MODALS */}
      <AnimatePresence>
        {status === "sending" && <SendingMessage />}
        {status === "success" && (
          <SuccessMessage onClose={() => setStatus("idle")} />
        )}
        {status === "error" && (
          <ErrorMessage onClose={() => setStatus("idle")} />
        )}
      </AnimatePresence>
    </section>
  );
});

export default Contact;