import { motion } from "framer-motion";
import educationData from "../../data/education";

export default function Education({ dark }) {
  return (
    <section
      id="education"
      className={`py-20 lg:py-28 px-6 transition-colors duration-500 ${
        dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Education Journey
          </h2>
          <p className="opacity-70 text-sm sm:text-base">
            My academic growth and learning progression.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="relative">

          {/* Center Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-lime-400/40 hidden md:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >

                  {/* CARD */}
                  <div
                    className={`w-full md:w-5/12 p-6 lg:p-8 rounded-3xl shadow-md ${
                      dark
                        ? "bg-[#151515] border border-white/10"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <span className="text-xs sm:text-sm text-lime-400 font-semibold">
                      {item.year}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold mt-2">
                      {item.degree}
                    </h3>

                    <p className="opacity-70 mt-1 text-sm sm:text-base">
                      {item.institution}
                    </p>

                    <p className="mt-2 text-lime-400 font-semibold text-sm">
                      Result: {item.percentage}
                    </p>

                    <p className="opacity-70 text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* TIMELINE DOT (Desktop Only) */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-5 h-5 bg-lime-400 rounded-full shadow-md"></div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}