import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPython,
  SiJavascript,
  SiC,
} from "react-icons/si";

/* ================= ICON MAP ================= */

export const iconMap = {
  react: FaReact,
  node: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  javascript: SiJavascript,
  python: SiPython,
  java: FaJava,
  mysql: SiMysql,
  c: SiC,
  git: FaGitAlt,
  github: FaGithub,
};

/* ================= TECH STACK ================= */

export const techStack = [
  { name: "React.js", level: 85, icon: "react" },
  { name: "Node.js", level: 80, icon: "node" },
  { name: "Express.js", level: 75, icon: "express" },
  { name: "MongoDB", level: 75, icon: "mongodb" },
  { name: "JavaScript", level: 90, icon: "javascript" },
  { name: "Python", level: 70, icon: "python" },
  { name: "Java", level: 65, icon: "java" },
  { name: "C", level: 60, icon: "c" },
  { name: "MySQL", level: 70, icon: "mysql" },
  { name: "Git", level: 80, icon: "git" },
  { name: "GitHub", level: 85, icon: "github" },
];

/* ================= CATEGORIZED SKILLS ================= */

export const categorizedSkills = [
  { title: "Programming Languages", items: "Java, C, Python, JavaScript" },
  { title: "Core CS Concepts", items: "Data Structures, Algorithms, OOP" },
  { title: "Frontend", items: "HTML, CSS, React.js" },
  { title: "Backend", items: "Node.js, Express.js, REST APIs" },
  { title: "Databases", items: "MySQL, MongoDB" },
  { title: "Version Control", items: "Git, GitHub" },
  { title: "Tools", items: "VS Code, Postman" },
  { title: "Soft Skills", items: "Problem-solving, Teamwork, Communication" },
];