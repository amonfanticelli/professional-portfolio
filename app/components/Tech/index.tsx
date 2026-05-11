"use client";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiVtex,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { useLang } from "../../components/Language/index";

export const Tech = () => {
  const { lang } = useLang();

  const t = {
    pt: {
      title: "Tech Stack",
      subtitle: "Ferramentas que utilizo",
    },
    en: {
      title: "Tech Stack",
      subtitle: "Tools I work with",
    },
  }[lang];

  const tools = [
    { icon: <SiTypescript />, label: "TypeScript", color: "#3178C6" },
    { icon: <FaReact />, label: "React", color: "#61DAFB" },
    { icon: <SiNextdotjs />, label: "Next.js", color: "#000000" },
    { icon: <FaNodeJs />, label: "Node.js", color: "#339933" },
    { icon: <SiExpress />, label: "Express", color: "#000000" },
    { icon: <SiPostgresql />, label: "PostgreSQL", color: "#4169E1" },
    { icon: <SiTailwindcss />, label: "Tailwind", color: "#06B6D4" },
    { icon: <FaPython />, label: "Python", color: "#3776AB" },
    { icon: <FaDocker />, label: "Docker", color: "#2496ED" },
    { icon: <FaAws />, label: "AWS", color: "#FF9900" },
    { icon: <FaGitAlt />, label: "Git", color: "#F05032" },
    { icon: <SiVtex />, label: "VTEX", color: "#F71963" },
  ];

  return (
    <section id="ferramentas" className="py-24 w-full relative">
      <div className="mx-auto max-w-[1200px] px-5 w-full">
        <h3 className="reveal text-[2.8rem] text-white font-bold text-center mx-auto mb-3.75 max-w-full px-2.5">
          {t.title}
        </h3>
        <p className="reveal text-center text-white text-[1.2rem] mb-17.5 max-w-150 mx-auto px-2.5">
          {t.subtitle}
        </p>

        <div className="flex flex-row gap-7 flex-wrap justify-center">
          {tools.map(({ icon, label }) => (
            <div
              key={label}
              className="ferramenta w-36 h-44 flex flex-col items-center justify-center reveal bg-white rounded-2xl px-5 py-10 text-center border border-transparent"
            >
              {icon}
              <span className="block font-bold text-[1.1rem] text-black mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
