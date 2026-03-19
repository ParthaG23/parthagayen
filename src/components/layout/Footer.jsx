import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer({ dark }) {
  return (
    <footer
      className="relative py-16 px-6 transition-colors duration-500"
      style={{
        // ✅ Replace solid bg-gray-100 / dark:bg-[#0f0f0f]
        // with a frosted glass effect so animated background shows through
        background: dark
          ? "rgba(0, 0, 0, 0.35)"
          : "rgba(255, 255, 255, 0.35)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: dark
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* ── LEFT ── */}
        <div>
          <h3
            className="text-2xl font-extrabold mb-4"
            style={{ color: dark ? "#ffffff" : "#111827" }}
          >
            Partha Gayen
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)" }}
          >
            MERN Stack Developer passionate about building scalable
            web applications and transforming ideas into real-world
            digital solutions.
          </p>
        </div>

        {/* ── QUICK LINKS ── */}
        <div>
          <h4 className="font-semibold mb-4 text-lime-500">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3 text-sm">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                whileHover={{ x: 5 }}
                className="transition hover:text-lime-400"
                style={{ color: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)" }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── SOCIAL ── */}
        <div>
          <h4 className="font-semibold mb-4 text-lime-500">
            Connect With Me
          </h4>
          <div className="flex gap-6 text-xl">
            {[
              { icon: <FaGithub />,    href: "https://github.com/ParthaG23" },
              { icon: <FaLinkedin />,  href: "https://www.linkedin.com/in/partha-gayen/" },
              { icon: <FaInstagram />, href: "https://instagram.com/mr.parthag23" },
            ].map(({ icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#a3e635" }}
                className="transition"
                style={{ color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)" }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.03, backgroundColor: "#a3e635", color: "#000" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-6 px-6 py-3 border-2 border-lime-500 rounded-full text-sm font-semibold transition"
            style={{ color: dark ? "#fff" : "#111" }}
          >
            Download CV
          </motion.a>
        </div>
      </div>

      {/* ── BOTTOM ── */}
      <div
        className="mt-12 pt-6 text-center text-sm"
        style={{
          borderTop: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
          color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
        }}
      >
        © {new Date().getFullYear()} Partha Gayen. All rights reserved.
      </div>

      {/* ── SCROLL TO TOP ── */}
      <motion.button
        whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(163,230,53,0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-lime-500 text-black flex items-center justify-center shadow-lg"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
}