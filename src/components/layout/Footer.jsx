import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp
} from "react-icons/fa";

export default function Footer({ dark }) {
  return (
    <footer className="relative py-16 px-6 transition-colors duration-500
                       bg-gray-100 dark:bg-[#0f0f0f]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* ================= LEFT ================= */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4">
            Partha Gayen
          </h3>

          <p className="opacity-70 text-sm leading-relaxed">
            MERN Stack Developer passionate about building scalable
            web applications and transforming ideas into real-world
            digital solutions.
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h4 className="font-semibold mb-4 text-lime-500">
            Quick Links
          </h4>

          <div className="flex flex-col gap-3 text-sm">
            {["Home", "About", "Projects", "Contact"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                whileHover={{ x: 5 }}
                className="opacity-70 hover:opacity-100 transition"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* ================= SOCIAL ================= */}
        <div>
          <h4 className="font-semibold mb-4 text-lime-500">
            Connect With Me
          </h4>

          <div className="flex gap-6 text-xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/ParthaG23"
              target="_blank"
              className="hover:text-lime-500 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/partha-gayen/"
              target="_blank"
              className="hover:text-lime-500 transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://instagram.com/mr.parthag23"
              target="_blank"
              className="hover:text-lime-500 transition"
            >
              <FaInstagram />
            </motion.a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 px-6 py-3
                       border-2 border-lime-500
                       rounded-full text-sm font-semibold
                       hover:bg-lime-500 hover:text-black
                       transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-gray-300 dark:border-white/10 mt-12 pt-6
                      text-center text-sm opacity-60">
        © {new Date().getFullYear()} Partha Gayen. All rights reserved.
      </div>

      {/* ================= SCROLL TO TOP ================= */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6
                   w-12 h-12 rounded-full
                   bg-lime-500 text-black
                   flex items-center justify-center
                   shadow-lg"
      >
        <FaArrowUp />
      </motion.button>

    </footer>
  );
}