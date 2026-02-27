import { useState } from "react";
import Navbar from "../components/layout/Navbar";

import Hero from "../components/sections/Hero";
import About from "../components/sections/AboutSections";
import Services from "../components/sections/ServicesSections";
import Skill from "../components/sections/SkillSection"
import Project from "../components/sections/ProjectSection"
import Contact from "../components/sections/Contact"
import Footer from "../components/layout/Footer";

export default function Home({dark}) {
 

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        dark ? "bg-[#0b0b0b] text-white" : "bg-[#f2f2f2] text-black"
      }`}
    >
      <Navbar dark={dark} />

      

      <main >
        <section id="home">
          <Hero dark={dark} />
        </section>

        <section id="services">
          <Services dark={dark} />
        </section>

        <section id="about">
          <About dark={dark} />
        </section>
        <section id="skill">
          <Skill dark={dark} />
        </section>
        <section id="project"   >
          <Project dark={dark} />
        </section>
        <section id="contact">
          <Contact dark={dark} />
        </section>
        <section id="footer">
          <Footer dark={dark} />
        </section>
      
      

      </main>
    </div>
  );
}