import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import projects from "../../data/Project";

export default function ProjectsPreview({ dark }) {
  const recentProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className={`py-24 lg:py-32 ${
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
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">
            SELECTED PROJECTS
          </h2>
          <p className="opacity-70 max-w-2xl mx-auto text-sm lg:text-base">
            Some of my recent real-world applications.
          </p>
        </motion.div>

        {/* ================= PROJECTS ================= */}
        <div className="space-y-20 lg:space-y-28">
          {recentProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >

                {/* ================= TEXT ================= */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`${isEven ? "lg:order-1" : "lg:order-2"} text-center lg:text-left`}
                >
                  <p className="text-xs uppercase tracking-widest text-lime-400 mb-3">
                    Featured Project
                  </p>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="opacity-70 mb-6 leading-relaxed text-sm lg:text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs lg:text-sm rounded-full border border-lime-400/30 text-lime-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-center lg:justify-start gap-6 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-lime-400 transition"
                    >
                      <FaGithub /> GitHub
                    </a>

                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-lime-400 transition"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* ================= IMAGE (FULL CLICKABLE CARD) ================= */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group block rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width="800"
                      height="500"
                      className="w-full h-[240px] sm:h-[320px] lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-sm lg:text-lg font-semibold">
                      View Project
                    </div>
                  </a>
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        <div className="text-center mt-20 lg:mt-28">
          <Link
            to="/projects"
            className="inline-block px-8 lg:px-12 py-3 lg:py-4 rounded-full
                       border-2 border-lime-400 text-lime-400
                       text-sm lg:text-base font-semibold
                       hover:bg-lime-400 hover:text-black
                       transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}