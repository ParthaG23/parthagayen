import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";

export default function ContactPage({ dark }) {
  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        dark ? "bg-[#0b0b0b] text-white" : "bg-[#f2f2f2] text-black"
      }`}
    >
      {/* Navbar */}
      <Navbar dark={dark} />

      {/* Spacer for fixed navbar */}
      <div className="h-32 lg:h-36"></div>

      <main>

        {/* Page Heading */}
        <section className="text-center px-6 mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            CONTACT ME
          </h1>

          <p className="opacity-70 max-w-2xl mx-auto text-sm lg:text-base">
            Have a project idea, collaboration, or opportunity?
            Let’s connect and build something amazing.
          </p>
        </section>

        {/* Contact Section */}
        <Contact dark={dark} />

      </main>

      {/* Footer */}
      <Footer dark={dark} />
    </div>
  );
}