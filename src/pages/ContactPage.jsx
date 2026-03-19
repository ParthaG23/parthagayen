import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";

export default function ContactPage({ dark }) {
  return (
    <div className={`min-h-screen transition-colors duration-500 ${dark ? "text-white" : "text-black"}`}>
      <Navbar dark={dark} />

      <div className="h-32 lg:h-36"></div>

      <main>

        {/* Page Heading */}
        <section
          className="text-center px-6 mb-12"
          style={{
            background: dark ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.25)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            CONTACT ME
          </h1>

          <p className="opacity-70 max-w-2xl mx-auto text-sm lg:text-base">
            Have a project idea, collaboration, or opportunity?
            Let's connect and build something amazing.
          </p>
        </section>

        {/* Contact Section */}
        <Contact dark={dark} />

      </main>

      <Footer dark={dark} />
    </div>
  );
}