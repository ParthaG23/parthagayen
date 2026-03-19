import { motion } from "framer-motion";
import services from "../../data/services";
import { useGlass } from "../../hooks/useGlass";

export default function Services({ dark }) {
  const glassStyle = useGlass(dark);

  const cardStyle = {
    background: dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.4)",
    borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  return (
    <section
      id="services"
      aria-label="Services"
      className={`py-20 lg:py-28 transition-colors duration-500 ${dark ? "text-white" : "text-gray-900"}`}
      style={glassStyle}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4"
        >
          WHAT I CAN DO FOR YOU
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
          className="max-w-2xl mx-auto opacity-70 mb-14 text-sm sm:text-base"
        >
          As a MERN stack developer and Computer Science student, I build modern, scalable, and performance-driven applications focused on clean design and efficient architecture.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
                whileHover={{ y: -6 }}
                className="group p-6 lg:p-8 rounded-3xl border transition-all duration-300"
                style={cardStyle}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = dark ? "rgba(163,230,53,0.4)" : "rgba(101,163,13,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"; }}
              >
                <div className="mb-4 text-lime-400 flex justify-center"><Icon size={28} /></div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="opacity-70 text-sm sm:text-base leading-relaxed">{service.desc}</p>
                <div className="mt-6 h-[2px] bg-lime-400 w-0 group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}