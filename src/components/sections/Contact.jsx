import React, { memo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import heroImg from "../../assets/images/hero.webp";
import { useGlass } from "../../hooks/useGlass";

import SendingMessage from "../ui/SendingMessage";
import SuccessMessage from "../ui/SuccessMessage";
import ErrorMessage from "../ui/ErrorMessage";

const Contact = memo(function Contact({ dark }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const glassStyle = useGlass(dark);

  const validate = useCallback((data) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) newErrors.email = "Invalid email format";
    if (!data.message.trim()) newErrors.message = "Message is required";
    else if (data.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  }, []);

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

  const textMuted = dark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)";

  const inputStyle = {
    background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.12)",
    color: dark ? "#fff" : "#111",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      className={`py-20 lg:py-28 transition-colors duration-500 ${dark ? "text-white" : "text-gray-900"}`}
      style={glassStyle}
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── IMAGE SIDE ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <img
            src={heroImg}
            alt="Contact Partha Gayen"
            loading="lazy"
            width="500"
            height="520"
            className="rounded-3xl shadow-lg w-full max-w-lg object-cover"
          />
        </motion.div>

        {/* ── FORM SIDE ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6">
            LET'S WORK TOGETHER
          </h2>

          <p className="mb-8 text-sm lg:text-base" style={{ color: textMuted }}>
            Have a project idea or collaboration opportunity?
            Send me a message and let's build something amazing.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6" noValidate>

            {/* NAME */}
            <div>
              <label htmlFor="contact-name" className="sr-only">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                aria-invalid={!!errors.name}
                className="p-4 rounded-full"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#a3e635")}
                onBlur={(e) => (e.target.style.borderColor = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)")}
              />
              {errors.name && <p role="alert" className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="contact-email" className="sr-only">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your Email"
                aria-label="Your Email"
                aria-invalid={!!errors.email}
                className="p-4 rounded-full"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#a3e635")}
                onBlur={(e) => (e.target.style.borderColor = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)")}
              />
              {errors.email && <p role="alert" className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* MESSAGE */}
            <div>
              <label htmlFor="contact-message" className="sr-only">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Message"
                aria-label="Your Message"
                aria-invalid={!!errors.message}
                className="p-4 rounded-3xl"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#a3e635")}
                onBlur={(e) => (e.target.style.borderColor = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)")}
              />
              {errors.message && <p role="alert" className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* SUBMIT */}
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.03, backgroundColor: "#a3e635", color: "#000" }}
              whileTap={{ scale: 0.97 }}
              aria-label="Send message"
              className="flex items-center justify-center gap-2 px-10 py-3 rounded-full border-2 border-lime-400 text-lime-400 font-semibold transition-all duration-300 disabled:opacity-60"
            >
              <FiSend />
              SUBMIT
            </motion.button>

          </form>
        </motion.div>
      </div>

      {/* ── STATUS MODALS ── */}
      <AnimatePresence>
        {status === "sending" && <SendingMessage dark={dark} />}
        {status === "success" && <SuccessMessage dark={dark} onClose={() => setStatus("idle")} />}
        {status === "error"   && <ErrorMessage  dark={dark} onClose={() => setStatus("idle")} />}
      </AnimatePresence>
    </section>
  );
});

export default Contact;