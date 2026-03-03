import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Footer({ dark }) {
  return (
    <footer
      className={`relative py-16 px-6 transition-colors duration-500 ${
        dark ? "bg-[#0f0f0f] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
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

            {/* Home */}
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/"
                className="opacity-70 hover:opacity-100 transition"
              >
                Home
              </Link>
            </motion.div>

            {/* About (Section on Home Page) */}
            <motion.div whileHover={{ x: 5 }}>
              <HashLink
                smooth
                to="/about"
                className="opacity-70 hover:opacity-100 transition"
              >
                About
              </HashLink>
            </motion.div>

            {/* Projects Page */}
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/projects"
                className="opacity-70 hover:opacity-100 transition"
              >
                Projects
              </Link>
            </motion.div>

            {/* Contact (Section on Home Page) */}
            <motion.div whileHover={{ x: 5 }}>
              <HashLink
                smooth
                to="/contact"
                className="opacity-70 hover:opacity-100 transition"
              >
                Contact
              </HashLink>
            </motion.div>

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
              rel="noopener noreferrer"
              className="hover:text-lime-500 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/partha-gayen/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-500 transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://instagram.com/mr.parthag23"
              target="_blank"
              rel="noopener noreferrer"
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
                       transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div
        className={`border-t mt-12 pt-6 text-center text-sm opacity-60 ${
          dark ? "border-white/10" : "border-gray-300"
        }`}
      >
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