import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiPython, SiJavascript } from "react-icons/si";

export default function Skills({ dark }) {

  const techStack = [
    { name: "React.js", level: 85, icon: FaReact },
    { name: "Node.js", level: 80, icon: FaNodeJs },
    { name: "Express.js", level: 75, icon: SiExpress },
    { name: "MongoDB", level: 75, icon: SiMongodb },
    { name: "JavaScript", level: 90, icon: SiJavascript },
    { name: "Python", level: 70, icon: SiPython },
    { name: "Java", level: 65, icon: FaJava },
    { name: "MySQL", level: 70, icon: SiMysql },
  ];

  const categorizedSkills = [
    { title: "Programming Languages", items: "Java, C, Python, JavaScript" },
    { title: "Core CS Concepts", items: "Data Structures, Algorithms, OOP" },
    { title: "Frontend", items: "HTML, CSS, React.js" },
    { title: "Backend", items: "Node.js, Express.js, REST APIs" },
    { title: "Databases", items: "MySQL, MongoDB" },
    { title: "Tools", items: "Git, GitHub, VS Code, Postman" },
    { title: "Soft Skills", items: "Problem-solving, Teamwork, Communication" },
  ];

  return (
    <section
      id="skills"
      className={`py-20 lg:py-28 ${
        dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            TECHNICAL SKILLS
          </h2>
          <p className="max-w-2xl mx-auto opacity-70 text-sm sm:text-base">
            MERN Stack Developer with strong fundamentals.
          </p>
        </motion.div>

        {/* ================= TECH STACK ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">

          {techStack.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`p-5 lg:p-6 rounded-2xl border transition-all duration-300 ${
                  dark
                    ? "bg-[#151515] border-white/10 hover:border-lime-400/40"
                    : "bg-white border-black/10 hover:border-lime-500/40"
                }`}
              >
                <div className="text-2xl text-lime-400 mb-3">
                  <Icon />
                </div>

                <h3 className="font-semibold mb-2 text-sm sm:text-base">
                  {skill.name}
                </h3>

                <div
                  className={`h-2 rounded-full ${
                    dark ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-lime-400 to-green-500"
                  />
                </div>

                <div className="text-xs sm:text-sm mt-2 opacity-70">
                  {skill.level}% Proficiency
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* ================= CATEGORIES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">

          {categorizedSkills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`p-5 lg:p-6 rounded-2xl border ${
                dark
                  ? "bg-[#151515] border-white/10"
                  : "bg-white border-black/10"
              }`}
            >
              <h4 className="text-base lg:text-lg font-bold text-lime-400 mb-3">
                {category.title}
              </h4>

              <p className="opacity-80 text-sm sm:text-base leading-relaxed">
                {category.items}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}