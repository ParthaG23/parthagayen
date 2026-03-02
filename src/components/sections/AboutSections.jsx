import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

import aboutImg from "../../assets/images/about.webp";
import projects from "../../data/Project";
import { techStack } from "../../data/skill";

export default function AboutSection({ dark }) {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const projectTarget = projects.length;
  const skillTarget = techStack.length;

  const [projectCount, setProjectCount] = useState(0);
  const [skillCount, setSkillCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  /* ================= INTERSECTION OBSERVER ================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  /* ================= SMOOTH COUNTER ANIMATION ================= */

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);

      setProjectCount(Math.floor(eased * projectTarget));
      setSkillCount(Math.floor(eased * skillTarget));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, projectTarget, skillTarget]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 lg:py-28 transition-colors duration-500 ${
        dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          <p className="text-lime-400 text-sm uppercase tracking-widest mb-2">
            Who I Am
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6 tracking-wide">
            ABOUT ME
          </h2>

          <p className="leading-relaxed max-w-xl mb-6 opacity-80 text-sm sm:text-base">
            I am a results-driven Computer Science undergraduate and MERN Stack
            Developer with hands-on experience building modern web applications
            from concept to deployment.
          </p>

          <p className="leading-relaxed max-w-xl mb-6 opacity-80 text-sm sm:text-base">
            My expertise includes developing secure REST APIs, implementing
            authentication systems, designing optimized database schemas, and
            crafting seamless front-end interfaces using React and TailwindCSS.
          </p>

          <p className="leading-relaxed max-w-xl mb-10 opacity-80 text-sm sm:text-base">
            I am passionate about writing efficient code, solving complex
            technical challenges, and continuously improving my technical and
            analytical skills.
          </p>

          {/* STATS */}
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
              <h3 className="text-lime-400 text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-300">
                {projectCount}+
              </h3>
              <p className="text-xs sm:text-sm mt-2 opacity-70">
                Academic Projects
              </p>
            </div>

            <div>
              <h3 className="text-lime-400 text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-300">
                {skillCount}+
              </h3>
              <p className="text-xs sm:text-sm mt-2 opacity-70">
                Technologies Learned
              </p>
            </div>

          </div>

          {/* CONTACT */}
          <div className="mb-6 space-y-2 opacity-80 text-sm">
            <p><span className="font-medium">Email:</span> work.parthag23@gmail.com</p>
            <p><span className="font-medium">Location:</span> India</p>
          </div>

          {/* SOCIAL */}
          <div className="flex justify-center lg:justify-start gap-6 text-lg mb-8">
            <a href="https://github.com/ParthaG23" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/partha-gayen/" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/mr.parthag23" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition">
              <FaInstagram />
            </a>
            <a href="mailto:work.parthag23@gmail.com" className="hover:text-lime-400 transition">
              <FaEnvelope />
            </a>
          </div>

          {/* BUTTON */}
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

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex justify-center">
          <img
            src={aboutImg}
            alt="About Partha Gayen"
            loading="lazy"
            className="w-[380px] rounded-3xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}