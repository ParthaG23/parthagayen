import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

import aboutImg from "../../assets/images/about.webp";

export default function AboutSection({ dark }) {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className={`py-20 lg:py-28 transition-colors duration-500 ${
        dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div className="text-center lg:text-left">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6 tracking-wide">
            ABOUT ME
          </h2>

          {/* Description */}
          <p className="leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 opacity-80 text-sm sm:text-base">
            Hi, I'm Partha — a passionate Computer Science student and
            aspiring Full-Stack Developer.
          </p>

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-3 gap-6 lg:gap-10 mb-8 justify-items-center lg:justify-items-start">
            <div>
              <h3 className="text-lime-400 text-2xl sm:text-3xl lg:text-4xl font-bold">
                2026
              </h3>
              <p className="text-xs sm:text-sm mt-2 opacity-70">
                Expected Graduation
              </p>
            </div>

            <div>
              <h3 className="text-lime-400 text-2xl sm:text-3xl lg:text-4xl font-bold">
                10+
              </h3>
              <p className="text-xs sm:text-sm mt-2 opacity-70">
                Academic Projects
              </p>
            </div>

            <div>
              <h3 className="text-lime-400 text-2xl sm:text-3xl lg:text-4xl font-bold">
                5+
              </h3>
              <p className="text-xs sm:text-sm mt-2 opacity-70">
                Technologies Learned
              </p>
            </div>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div className="mb-6 space-y-2 opacity-80 text-sm">
            <p>
              <span className="font-medium">Email:</span> work.parthag23@gmail.com
            </p>
            <p>
              <span className="font-medium">Location:</span> India
            </p>
          </div>

          {/* ================= SOCIAL ================= */}
          <div className="flex justify-center lg:justify-start gap-6 text-lg mb-8">
            <a
              href="https://github.com/ParthaG23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/partha-gayen/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/mr.parthag23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:work.parthag23@gmail.com"
              className="hover:text-lime-400 transition transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* ================= BUTTON ================= */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-2.5 rounded-full border border-lime-400
                         text-lime-400 text-sm sm:text-base
                         hover:bg-lime-400 hover:text-black
                         transition-all duration-300"
            >
              MY STORY
            </button>
          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ rotate: -5, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden lg:flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About Partha Gayen"
            loading="lazy"
            width="380"
            height="500"
            className="w-[380px] rounded-3xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}