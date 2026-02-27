import { motion } from "framer-motion";
import educationData from "../../data/education";

export default function Education({ dark }) {
  return (
    <section className="py-28 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold mb-4">
            Education Journey
          </h2>
          <p className="opacity-70">
            My academic growth and learning progression.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-lime-400/40 hidden md:block"></div>

          <div className="space-y-20">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`
                      w-full md:w-5/12
                      p-8 rounded-3xl shadow-xl
                      ${
                        dark
                          ? "bg-[#1a1a1a] border border-white/10"
                          : "bg-white border border-gray-200"
                      }
                    `}
                  >
                    <span className="text-sm text-lime-400 font-semibold">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-bold mt-2">
                      {item.degree}
                    </h3>

                    <p className="opacity-70 mt-1">
                      {item.institution}
                    </p>

                    {/* Percentage */}
                    <p className="mt-2 text-lime-400 font-semibold">
                      Result: {item.percentage}
                    </p>

                    <p className="opacity-70 text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-lime-400 rounded-full shadow-lg"></div>
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