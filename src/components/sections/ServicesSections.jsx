import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaChartLine } from "react-icons/fa";

export default function Services({ dark }) {

  const services = [
    {
      icon: <FaReact size={28} />,
      title: "MERN Stack Development",
      desc: "Building scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js with clean architecture and performance optimization."
    },
    {
      icon: <FaNodeJs size={28} />,
      title: "Backend & API Engineering",
      desc: "Developing secure REST APIs, authentication systems, and server-side logic using Node.js and Express."
    },
    {
      icon: <FaDatabase size={28} />,
      title: "Database & System Design",
      desc: "Designing optimized MongoDB schemas and implementing efficient data handling for scalable applications."
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Data Analytics & Insights",
      desc: "Analyzing and visualizing data using Python, Excel, and Power BI to create actionable insights."
    }
  ];

  return (
    <section
      id="services"
     className={`
        relative min-h-screen
        flex items-center justify-center
        px-6 pt-32 pb-24
        transition-colors duration-500
        ${dark ? "bg-[#0f0f0f] text-white" : "bg-[#f5f5f5] text-gray-900"}
      `}
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          WHAT I CAN DO FOR YOU
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto opacity-70 mb-20"
        >
          As a MERN stack developer and Computer Science student,
          I build modern, scalable, and performance-driven applications
          focused on clean design and efficient architecture.
        </motion.p>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`
                group p-8 rounded-3xl
                border transition-all duration-500
                ${
                  dark
                    ? "bg-[#151515] border-white/10 hover:border-lime-400/50"
                    : "bg-white border-black/10 hover:border-lime-500/50"
                }
              `}
            >

              {/* Icon */}
              <div className="mb-6 text-lime-400 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="opacity-70 leading-relaxed">
                {service.desc}
              </p>

              {/* Animated Bottom Line */}
              <div className="mt-6 h-[2px] bg-lime-400 w-0 group-hover:w-full transition-all duration-500"></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}