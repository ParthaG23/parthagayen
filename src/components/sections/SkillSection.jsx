import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiPython, SiJavascript } from "react-icons/si";

export default function Skills({ dark }) {

  const techStack = [
    { name: "React.js", level: 85, icon: <FaReact /> },
    { name: "Node.js", level: 80, icon: <FaNodeJs /> },
    { name: "Express.js", level: 75, icon: <SiExpress /> },
    { name: "MongoDB", level: 75, icon: <SiMongodb /> },
    { name: "JavaScript", level: 90, icon: <SiJavascript /> },
    { name: "Python", level: 70, icon: <SiPython /> },
    { name: "Java", level: 65, icon: <FaJava /> },
    { name: "MySQL", level: 70, icon: <SiMysql /> },
  ];

  const categorizedSkills = [
    {
      title: "Programming Languages",
      items: "Java, C, Python, JavaScript",
    },
    {
      title: "Core CS Concepts",
      items: "Data Structures, Algorithms, OOP",
    },
    {
      title: "Frontend",
      items: "HTML, CSS, React.js",
    },
    {
      title: "Backend",
      items: "Node.js, Express.js, REST APIs",
    },
    {
      title: "Databases",
      items: "MySQL, MongoDB",
    },
    {
      title: "Tools",
      items: "Git, GitHub, VS Code, Postman",
    },
    {
      title: "Soft Skills",
      items: "Problem-solving, Teamwork, Communication",
    },
  ];

  return (
    <section
      id="skills"
     className={`
        relative min-h-screen
        flex items-center justify-center
        px-6 pt-32 pb-24
        transition-colors duration-500
        ${dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"}
      `}
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold mb-6">
            TECHNICAL SKILLS
          </h2>
          <p className="max-w-2xl mx-auto opacity-70">
            MERN Stack Developer with strong fundamentals in computer science,
            full-stack development, and problem-solving.
          </p>
        </motion.div>

        {/* ================= TECH STACK CARDS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

          {techStack.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
                dark
                  ? "bg-[#151515] border-white/10 hover:border-lime-400/40"
                  : "bg-white border-black/10 hover:border-lime-500/40"
              }`}
            >
              <div className="text-2xl text-lime-400 mb-4">
                {skill.icon}
              </div>

              <h3 className="font-semibold mb-3">
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
                  transition={{ duration: 1 }}
                  className="h-2 rounded-full bg-gradient-to-r from-lime-400 to-green-500"
                />
              </div>

              <div className="text-sm mt-2 opacity-70">
                {skill.level}% Proficiency
              </div>
            </motion.div>
          ))}

        </div>

        {/* ================= CATEGORIZED SKILLS ================= */}
        <div className="grid md:grid-cols-2 gap-10">

          {categorizedSkills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${
                dark
                  ? "bg-[#151515] border-white/10"
                  : "bg-white border-black/10"
              }`}
            >
              <h4 className="text-lg font-bold text-lime-400 mb-3">
                {category.title}
              </h4>

              <p className="opacity-80 leading-relaxed">
                {category.items}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}