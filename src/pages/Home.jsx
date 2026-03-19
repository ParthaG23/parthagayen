import Navbar from "../components/layout/Navbar";

import Hero from "../components/sections/Hero";
import About from "../components/sections/AboutSections";
import Services from "../components/sections/ServicesSections";
import Skill from "../components/sections/SkillSection";
import Project from "../components/sections/ProjectSection";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home({ dark }) {
  return (
    <div className={`min-h-screen transition-colors duration-500 ${dark ? "text-white" : "text-black"}`}>
      <Navbar dark={dark} />

      <main className="pt-20 lg:pt-24 space-y-0">
        <Hero dark={dark} />
        <Services dark={dark} />
        <About dark={dark} />
        <Skill dark={dark} />
        <Project dark={dark} />
        <Contact dark={dark} />
      </main>

      <Footer dark={dark} />
    </div>
  );
}