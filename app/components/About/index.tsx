"use client";
import { FaCode, FaCogs, FaLayerGroup, FaMobileAlt } from "react-icons/fa";
import { useLang } from "../../components/Language/index";

export const About = () => {
  const { lang } = useLang();

  const t = {
    pt: {
      title: "Sobre Mim",
      bio1: "Engenheiro de software com mais de 3 anos de experiência no desenvolvimento de aplicações web, atuando tanto no front-end quanto no back-end. Tenho domínio em JavaScript e TypeScript, com foco em React e Next.js para interfaces responsivas e de alta performance.",
      bio2: "Tenho experiência com APIs RESTful em Node.js com Express, bancos de dados relacionais (PostgreSQL, MySQL), Docker e AWS. Trabalhei em projetos de e-commerce com VTEX IO e FastStore, em equipes ágeis com Scrum e Kanban, utilizando GitFlow e ferramentas como Jira e Trello.",
      skills: [
        "Full Stack Dev",
        "Engenheiro de Software",
        "Análise e Desenvolvimento de Sistemas",
        "E-commerce",
      ],
    },
    en: {
      title: "About Me",
      bio1: "Software engineer with over 3 years of experience building web applications across front-end and back-end. Proficient in JavaScript and TypeScript, with a focus on React and Next.js for responsive, high-performance interfaces.",
      bio2: "Experienced with RESTful APIs using Node.js and Express, relational databases (PostgreSQL, MySQL), Docker, and AWS. Worked on e-commerce projects with VTEX IO and FastStore, in agile teams using Scrum, Kanban, GitFlow, Jira, and Trello.",
      skills: [
        "Full Stack Dev",
        "Software Engineer",
        "Systems Analysis & Development",
        "E-commerce",
      ],
    },
  }[lang];

  const icons = [<FaCode />, <FaCogs />, <FaLayerGroup />, <FaMobileAlt />];

  return (
    <section id="sobre" className="py-24 w-full relative">
      <div className="mx-auto max-w-[1200] px-5 w-full">
        <h2 className="text-center reveal mb-3.5 text-white font-bold text-4xl">
          {t.title}
        </h2>
        <div className="reveal">
          <p className="text-[1.15rem] text-white mb-6 leading-[1.8] text-justify">
            {t.bio1}
          </p>
          <p className="text-[1.15rem] text-white mb-6 leading-[1.8] text-justify">
            {t.bio2}
          </p>

          <div className="flex flex-wrap gap-5">
            {t.skills.map((skill, i) => (
              <div
                key={skill}
                className="skill-item flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[rgba(255,107,157,0.15)] transition-all duration-300 hover:-translate-y-1.25 hover:border-[#ff6b9d]"
              >
                <div className="animate-[bounceSubtle_2s_infinite]">
                  {icons[i]}
                </div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
