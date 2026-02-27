import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AboutSection from "../components/sections/AboutSections";
import Skills from "../components/sections/SkillSection";
import Services from "../components/sections/ServicesSections";
import Education from "../components/sections/Education";

import profileImg from "../../public/images/about.jpg";
import { motion } from "framer-motion";

export default function AboutPage({ dark }) {
  return (
    <div
      className={`transition-colors duration-500 ${
        dark ? "bg-[#0b0b0b] text-white" : "bg-[#f2f2f2] text-black"
      }`}
    >
      <Navbar dark={dark} />

      <main className="pt-24 lg:pt-28">

        {/* ===== MOBILE ONLY PROFILE ===== */}
        <div className="lg:hidden flex flex-col items-center text-center  mt-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src={profileImg}
              alt="profile"
              className="w-36 h-36 rounded-full object-cover shadow-xl border-4 border-lime-400"
            />
          </motion.div>

          <h2 className="text-xl font-bold mt-4">
            Partha Gayen
          </h2>

          <p className="text-sm opacity-70 mt-2 px-6 leading-relaxed">
            MERN Stack Developer & B.Tech CSE Student passionate about
            building scalable web applications.
          </p>

        </div>

        {/* Sections */}
        <AboutSection dark={dark} />
        <Education dark={dark} />
        <Skills dark={dark} />
        <Services dark={dark} />

      </main>

      <Footer dark={dark} />
    </div>
  );
}