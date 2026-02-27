import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import projects from "../data/Project";

export default function Projects({ dark }) {
  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        dark ? "bg-[#0b0b0b] text-white" : "bg-[#f2f2f2] text-black"
      }`}
    >
      <Navbar dark={dark} />

      {/* EXTRA TOP GAP */}
      <main className="pt-32 lg:pt-40 px-6 pb-24">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-28"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
            MY PROJECTS
          </h1>
          <p className="opacity-70 max-w-2xl mx-auto text-base">
            A collection of my academic and real-world development projects.
          </p>
        </motion.div>

        {/* ================= PROJECT LIST ================= */}
        <div className="max-w-7xl mx-auto space-y-24 lg:space-y-40">

          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >

                {/* ================= TEXT ================= */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${isEven ? "lg:order-1" : "lg:order-2"} text-center lg:text-left`}
                >
                  <p className="text-sm uppercase tracking-widest text-lime-400 mb-4">
                    Featured Project
                  </p>

                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    {project.title}
                  </h2>

                  <p className="opacity-70 leading-relaxed mb-8 text-sm lg:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 text-sm rounded-full border border-lime-400/40 text-lime-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* ================= IMAGE (FULL CLICKABLE) ================= */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group block rounded-3xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold">
                      View Project
                    </div>
                  </a>
                </motion.div>

              </div>
            );
          })}

        </div>

      </main>

      <Footer dark={dark} />
    </div>
  );
}