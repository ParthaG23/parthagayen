import React, { memo } from "react";
import { motion } from "framer-motion";
import { techStack, categorizedSkills, iconMap } from "../../data/skill";
import { useGlass } from "../../hooks/useGlass";

const Skills = memo(function Skills({ dark }) {
  const glassStyle = useGlass(dark);

  const cardStyle = {
    background: dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.4)",
    borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  const hoverEnter = (e) => { e.currentTarget.style.borderColor = dark ? "rgba(163,230,53,0.4)" : "rgba(101,163,13,0.4)"; };
  const hoverLeave = (e) => { e.currentTarget.style.borderColor = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"; };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true, amount: 0.1, margin: "0px 0px -100px 0px" },
  };

  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className={`py-20 lg:py-28 transition-colors duration-500 ${dark ? "text-white" : "text-gray-900"}`}
      style={glassStyle}
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div {...fadeUp} className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">TECHNICAL SKILLS</h2>
          <p className="max-w-2xl mx-auto opacity-70 text-sm sm:text-base">MERN Stack Developer with strong fundamentals.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {techStack.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
                whileHover={{ y: -4 }}
                className="p-5 lg:p-6 rounded-2xl border transition-all duration-300"
                style={cardStyle}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                <div className="text-2xl text-lime-400 mb-3">{Icon && <Icon />}</div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{skill.name}</h3>
                <div className={`h-2 rounded-full overflow-hidden ${dark ? "bg-gray-700" : "bg-gray-200"}`}>
                  <div style={{ width: `${skill.level}%` }} className="h-full">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                      className="h-full rounded-full bg-gradient-to-r from-lime-400 to-green-500"
                    />
                  </div>
                </div>
                <div className="text-sm mt-2 opacity-70">{skill.level}% Proficiency</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {categorizedSkills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
              className="p-5 lg:p-6 rounded-2xl border"
              style={cardStyle}
            >
              <h4 className="text-base lg:text-lg font-bold text-lime-400 mb-3">{category.title}</h4>
              <p className="opacity-80 text-sm sm:text-base leading-relaxed">{category.items}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});

export default Skills;