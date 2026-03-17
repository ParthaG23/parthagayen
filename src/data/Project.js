import cineverseImg from "../assets/projects/cineverse.webp";

import tapasvImg from "../assets/projects/tapasvi.webp";
import movienestImg from "../assets/projects/movienest.webp"
import snakeGameImg from "../assets/projects/snakeGameImg.webp"
import calculatorImg from "../assets/projects/calcVison.webp"

const projects = [

{
  id: 5,
  title: "CalcVision- All-in-One Calculator Platform",
  description:
    "A scalable MERN-based calculator platform with Firebase authentication, offering multiple dynamic tools like BMI, unit conversion, and advanced calculations. Features secure user login, persistent calculation history, and a responsive, performance-optimized UI for seamless experience across devices.",
  tech: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Firebase Authentication",
    "Tailwind CSS",
    "Framer Motion"
  ],
  github: "https://github.com/ParthaG23/SmartCal", // replace with your repo
  live: "https://smart-cal-tan.vercel.app", // replace with your live link
  image: calculatorImg,
  date: "Mar 2026",
},
  {
  id: 4,
  title: "Neon Snake Game",
  description:
    "A modern, mobile-optimized Snake game featuring smooth controls, neon UI effects, and performance-tuned gameplay built with React and Canvas.",
  tech: ["React.js", "Tailwind CSS", "JavaScript", "Canvas API"],
  github: "https://github.com/ParthaG23/sankeGame",
  live: "https://sanke-game-kohl.vercel.app/",
  image: snakeGameImg,
  date: "Feb 14, 2026",
},
  {
    id: 3,
    title: "CineVerse — Movie Information Platform",
    description:
      "Built a responsive movie information platform with categorized content and structured navigation. Focused on improving user experience through clean UI design and dynamic rendering.",
    tech: ["HTML", "CSS", "JavaScript", "React.js","Tailwind"],
    github: "https://github.com/ParthaG23/CineVerse",
    live: "https://cine-verse-fpoj.vercel.app/",
    image:  cineverseImg,
    date: "Jan 2026",
  },
   {
    id:2,
    title: "MoviesNest — Movie Information and download Platform",
    description:
      "Built a responsive movie information platform with categorized content and structured navigation. Focused on improving user experience through clean UI design and dynamic rendering.",
    tech: ["HTML", "CSS", "JavaScript", "React.js","Tailwind"],
    github: "https://github.com/ParthaG23/MovieNest",
    live: "https://movie-nest-black.vercel.app/",
    image: movienestImg ,
    date: "Jan 2026",
  },



  {
    id: 1,
    title: "Tapasvi — School Website",
    description:
      "Designed and developed a responsive school website featuring sections for admissions, facilities, and events, delivering a clean and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ParthaG23/tapasvi",
    live: "https://parthag23.github.io/tapasvi/",
    image: tapasvImg,
    date: "Apr 2025",
  },
    

];

export default projects;