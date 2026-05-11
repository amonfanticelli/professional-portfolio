"use client";
import { FaCode, FaCogs, FaLayerGroup, FaMobileAlt } from "react-icons/fa";
import { useLang } from "../../components/Language/index";

export const About = () => {
  const { lang } = useLang();

  const t = {
    pt: {
      title: "Sobre Mim",
      bio1: "Desenvolvedora versátil com experiência em desenvolvimento de jogos (Pygame), análise de dados (Python, R, SQL) e aplicações full-stack. Gosto de explorar desde algoritmos visuais e gráficos interativos até modelagem preditiva e dashboards analíticos.",
      bio2: "Desenvolvedora versátil com experiência em desenvolvimento de jogos (Pygame), análise de dados (Python, R, SQL) e aplicações full-stack. Gosto de explorar desde algoritmos visuais e gráficos interativos até modelagem preditiva e dashboards analíticos.",
      skills: [
        "Full Stack Dev",
        "Engenheiro de software",
        "Análise e desenvolvimento de sistemas",
        "Mobile Apps",
      ],
    },
    en: {
      title: "About Me",
      bio1: "Versatile developer with experience in game development (Pygame), data analysis (Python, R, SQL), and full-stack applications. I enjoy exploring everything from visual algorithms and interactive charts to predictive modeling and analytical dashboards.",
      bio2: "Versatile developer with experience in game development (Pygame), data analysis (Python, R, SQL), and full-stack applications. I enjoy exploring everything from visual algorithms and interactive charts to predictive modeling and analytical dashboards.",
      skills: [
        "Full Stack Dev",
        "Software Engineer",
        "Systems Analysis & Development",
        "Mobile Apps",
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
