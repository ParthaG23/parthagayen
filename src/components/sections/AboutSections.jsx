import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";
import aboutImg from "../../../public/images/about.jpg";

export default function AboutSection({ dark }) {
  const navigate = useNavigate();

  return (
    <section
      id="about"
   className={`
        relative min-h-screen
        flex items-center justify-center
        px-6 pt-32 pb-24
        transition-colors duration-500
        ${dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"}
      `}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          <h2 className="text-5xl font-extrabold mb-6 tracking-wide">
            ABOUT ME
          </h2>

          <p className="leading-relaxed max-w-xl mb-10 opacity-80">
            Hi, I'm Partha — a passionate Computer Science student and
            aspiring Full-Stack Developer. I love building scalable web
            applications and learning modern technologies that solve
            real-world problems.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-10 mb-10">

            <div>
              <h3 className="text-lime-400 text-4xl font-bold">2026</h3>
              <p className="text-sm mt-2 opacity-70">
                Expected Graduation
              </p>
            </div>

            <div>
              <h3 className="text-lime-400 text-4xl font-bold">10+</h3>
              <p className="text-sm mt-2 opacity-70">
                Academic Projects
              </p>
            </div>

            <div>
              <h3 className="text-lime-400 text-4xl font-bold">5+</h3>
              <p className="text-sm mt-2 opacity-70">
                Technologies Learned
              </p>
            </div>

          </div>

          {/* CONTACT */}
          <div className="mb-8 space-y-2 opacity-80">
            <p><span className="font-medium">Email:</span> work.parthag23@gmail.com</p>
            <p><span className="font-medium">Location:</span> India</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-xl mb-10">

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

          {/* BUTTON */}
          <button
            onClick={() => navigate("/about")}
            className="px-8 py-3 rounded-full border border-lime-400
                       text-lime-400 hover:bg-lime-400 hover:text-black
                       transition-all duration-300"
          >
            MY STORY
          </button>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
  initial={{ rotate: -5, opacity: 0 }}
  whileInView={{ rotate: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="hidden lg:flex justify-center"
>
  <img
    src={aboutImg}
    alt="about"
    className="w-[380px] rounded-3xl shadow-2xl"
  />
</motion.div>

      </div>
    </section>
  );
}