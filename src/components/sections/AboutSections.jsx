import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import aboutImg from "../../assets/images/about.webp";
import projects from "../../data/Project";
import { techStack } from "../../data/skill";
import { useGlass } from "../../hooks/useGlass";

export default function AboutSection({ dark }) {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const glassStyle = useGlass(dark);

  const projectTarget = projects.length;
  const skillTarget = techStack.length;

  const [projectCount, setProjectCount] = useState(0);
  const [skillCount, setSkillCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) setHasAnimated(true);
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 1000;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setProjectCount(Math.floor(eased * projectTarget));
      setSkillCount(Math.floor(eased * skillTarget));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasAnimated, projectTarget, skillTarget]);

  const textPrimary = dark ? "text-white" : "text-gray-900";
  const textMuted = dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)";

  const vp = { once: true, amount: 0.1, margin: "0px 0px -100px 0px" };

  const socialLinks = [
    { icon: <FaGithub />,    href: "https://github.com/ParthaG23",                        label: "GitHub profile"    },
    { icon: <FaLinkedin />,  href: "https://www.linkedin.com/in/partha-gayen/",            label: "LinkedIn profile"  },
    { icon: <FaInstagram />, href: "https://www.instagram.com/mr.parthag23",              label: "Instagram profile" },
    { icon: <FaEnvelope />,  href: "mailto:work.parthag23@gmail.com",                     label: "Send email"        },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About me"
      className={`py-20 lg:py-28 transition-colors duration-500 ${textPrimary}`}
      style={glassStyle}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* ── LEFT CONTENT ── */}
        <div className="text-center lg:text-left">

          <motion.p
            className="text-lime-400 text-sm uppercase tracking-widest mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
          >
            Who I Am
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6 tracking-wide"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            ABOUT ME
          </motion.h2>

          {[
            "I am a results-driven Computer Science undergraduate and MERN Stack Developer with hands-on experience building modern web applications from concept to deployment.",
            "My expertise includes developing secure REST APIs, implementing authentication systems, designing optimized database schemas, and crafting seamless front-end interfaces using React and TailwindCSS.",
            "I am passionate about writing efficient code, solving complex technical challenges, and continuously improving my technical and analytical skills.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="leading-relaxed max-w-xl mb-6 text-sm sm:text-base"
              style={{ color: textMuted }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            >
              {text}
            </motion.p>
          ))}

          {/* STATS */}
          <motion.div
            className="grid grid-cols-3 gap-6 lg:gap-10 mb-8 justify-items-center lg:justify-items-start"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { value: "2026",              label: "Expected Graduation"  },
              { value: `${projectCount}+`,  label: "Academic Projects"    },
              { value: `${skillCount}+`,    label: "Technologies Learned" },
            ].map(({ value, label }) => (
              <div key={label}>
                <h3 className="text-lime-400 text-2xl sm:text-3xl lg:text-4xl font-bold">{value}</h3>
                <p className="text-xs sm:text-sm mt-2" style={{ color: textMuted }}>{label}</p>
              </div>
            ))}
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            className="mb-6 space-y-2 text-sm"
            style={{ color: textMuted }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <p>
              <span className="font-medium" style={{ color: dark ? "#fff" : "#111" }}>Email:</span>{" "}
              work.parthag23@gmail.com
            </p>
            <p>
              <span className="font-medium" style={{ color: dark ? "#fff" : "#111" }}>Location:</span>{" "}
              India
            </p>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            className="flex justify-center lg:justify-start gap-6 text-lg mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {socialLinks.map(({ icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, color: "#a3e635" }}
                whileTap={{ scale: 0.9 }}
                className="transition"
                style={{ color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

          {/* BUTTON */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <motion.button
              onClick={() => navigate("/about")}
              whileHover={{ scale: 1.04, backgroundColor: "#a3e635", color: "#000" }}
              whileTap={{ scale: 0.96 }}
              aria-label="Read my full story"
              className="px-6 py-2.5 rounded-full border border-lime-400 text-lime-400 text-sm sm:text-base transition-all duration-300"
            >
              MY STORY
            </motion.button>
          </motion.div>
        </div>

        {/* ── RIGHT IMAGE ── */}
        <div className="hidden lg:flex justify-center">
          <motion.img
            src={aboutImg}
            alt="Partha Gayen"
            loading="lazy"
            fetchPriority="high"
            width="340"
            height="450"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            className="w-[240px] lg:w-[340px] aspect-[3/4] object-cover rounded-[32px] shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}