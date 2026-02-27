import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import projects from "../../data/Project";

export default function ProjectsPreview({ dark }) {
  // Only first 3 projects
  const recentProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
    className={`
        relative min-h-screen
        flex items-center justify-center
        px-6 pt-32 pb-24
        transition-colors duration-500
        ${dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"}
      `}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-extrabold mb-6">
            SELECTED PROJECTS
          </h2>
          <p className="opacity-70 max-w-2xl mx-auto">
            Some of my recent real-world MERN stack applications.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">

          {recentProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <p className="text-sm uppercase tracking-widest text-lime-400 mb-4">
                    Featured Project
                  </p>

                  <h3 className="text-3xl font-bold mb-6">
                    {project.title}
                  </h3>

                  <p className="opacity-70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 text-sm rounded-full border border-lime-400/40 text-lime-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-lime-400 transition"
                    >
                      <FaGithub /> GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-lime-400 transition"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  </div>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-lg font-semibold">
                      View Project
                    </div>

                  </div>
                </motion.div>

              </div>
            );
          })}

        </div>

        {/* View All Button */}
        <div className="text-center mt-28">
          <Link
            to="/projects"
            className="inline-block px-12 py-4 rounded-full
                       border-2 border-lime-400 text-lime-400
                       font-semibold hover:bg-lime-400 hover:text-black
                       transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}