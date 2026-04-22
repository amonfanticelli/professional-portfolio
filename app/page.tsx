"use client";
import profileImage from "./assets/profile-image.jpg";
// import profileImage from "./assets/black-bank-back-end.jpeg";
import Image from "next/image";
import { useReveal } from "./components/useReveal";
import { MdEmail } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaCogs,
  FaLayerGroup,
  FaMobileAlt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaAws,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiVtex,
} from "react-icons/si";

export default function Home() {
  useReveal();
  return (
    <>
      <header
        className="
        max-lg:pt-5
        relative
        overflow-hidden
        max-lg:h-auto         
        max-lg:pb-18
        py-20
        [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)]
        h-135.25
      "
      >
        <div className="max-lg:justify-center max-w-300 mx-auto px-5 w-full relative z-10 flex items-center justify-between flex-wrap gap-10">
          <div className="flex items-center flex-col lg:flex-row gap-8">
            <div className="max-h-36 relative shrink-0 gap-8 profile-image-container">
              <Image
                src={profileImage}
                alt="Amon Fanticelli"
                width={140}
                height={140}
                className="
                w-35
                h-35
                rounded-full
                border-4
                border-white/40
                object-cover
                shadow-2xl
                bg-white
                profile-image
                "
              />
            </div>

            <div className="max-lg:items-center flex flex-col max-w-lg">
              <h1
                style={{ transitionDelay: "0ms" }}
                className="max-lg:text-4xl max-lg:text-center text-5xl font-bold mb-3 break-normal text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.1)] reveal"
              >
                Amon Fanticelli
              </h1>
              <span
                style={{ transitionDelay: "200ms" }}
                className="max-lg:text-center max-lg:rounded-2xl max-w-max text-[1.4rem] text-white/95 mb-3 font-semibold inline-block bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm reveal"
              >
                {" "}
                Dev Full-Stack • Data Science • Game Dev{" "}
              </span>
              <span
                style={{ transitionDelay: "400ms" }}
                className="max-lg:text-center text-[1.1rem] text-white/90 max-w-125 leading-relaxed reveal"
              >
                De jogos interativos a pipelines de dados e aplicações web
                completas — construo soluções criativas que combinam código
                limpo, design inteligente e análise robusta.
              </span>
            </div>
          </div>

          <div
            style={{ transitionDelay: "600ms" }}
            className="max-lg:gap-3.5 justify-center flex-wrap flex flex-row gap-6 reveal"
          >
            <div className="max-lg:px-2.5 max-lg:py-3.75 origin-center will-change-transform text-center bg-white/15 px-7.5 py-5 rounded-lg backdrop-blur-md border border-white/30 transition-all duration-400 cursor-default flex-1 min-w-30 flex flex-col hover:-translate-y-1.25 hover:scale-[1.05] hover:bg-white/25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
              <span className="block text-[2.8rem] font-bold text-white leading-none">
                16+
              </span>
              <span className="text-[0.85rem] text-white/90 uppercase tracking-[1.5px] mt-2 font-semibold">
                PROJETOS
              </span>
            </div>
            <div className="max-lg:px-2.5 max-lg:py-3.75 origin-center will-change-transform text-center bg-white/15 px-7.5 py-5 rounded-lg backdrop-blur-md border border-white/30 transition-all duration-400 cursor-default flex-1 min-w-30 flex flex-col hover:-translate-y-1.25 hover:scale-[1.05] hover:bg-white/25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
              <span className="block text-[2.8rem] font-bold text-white leading-none">
                9+
              </span>
              <span className="text-[0.85rem] text-white/90 uppercase tracking-[1.5px] mt-2 font-semibold">
                TECNOLOGIAS
              </span>
            </div>
            <div className="max-lg:px-2.5 max-lg:py-3.75 origin-center will-change-transform min-w-30 flex-1 text-center bg-white/15 px-7.5 py-5 rounded-lg backdrop-blur-md border border-white/30 transition-all duration-400 cursor-default  flex flex-col hover:-translate-y-1.25 hover:scale-[1.05] hover:bg-white/25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
              <span className="block text-[2.8rem] font-bold text-white leading-none">
                3+
              </span>
              <span className="text-[0.85rem] text-white/90 uppercase tracking-[1.5px] mt-2 font-semibold">
                ANOS EXP.
              </span>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white/85 backdrop-blur-[20px] border-b border-pink-300/10 relative z-100 transition-all w-full">
        <div className="max-lg:gap-3.5 max-lg:flex-col flex items-center justify-between py-3.75 px-5 max-w-300 mx-auto">
          <div className="max-lg:gap-3.5 flex gap-10 flex-wrap justify-center">
            <a
              href="#sobre"
              className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
            >
              Sobre
            </a>
            <a
              href="#ferramentas"
              className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
            >
              Ferramentas
            </a>
            <a
              href="#projetos"
              className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
            >
              Contato
            </a>
          </div>

          <div className="flex gap-3.75">
            <a
              href="https://github.com/amonfanticelli"
              target="_blank"
              title="GitHub"
              className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm duration-300 hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amon-fanticelli/"
              target="_blank"
              title="LinkedIn"
              className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm  duration-300 hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:amonfanticelli@gmail.com"
              title="Email"
              className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm duration-300
     hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </nav>

      <section id="sobre" className="py-24 w-full relative">
        <div className="mx-auto max-w-[1200] px-5 w-full">
          <h2 className="text-center reveal mb-3.5 text-white font-bold text-4xl">
            Sobre Mim
          </h2>
          <div className=" reveal">
            <p className="text-[1.15rem] text-white mb-6 leading-[1.8] text-justify">
              Desenvolvedora versátil com experiência em desenvolvimento de
              jogos (Pygame), análise de dados (Python, R, SQL) e aplicações
              full-stack. Gosto de explorar desde algoritmos visuais e gráficos
              interativos até modelagem preditiva e dashboards analíticos.
            </p>
            <p className="text-[1.15rem] text-white mb-6 leading-[1.8] text-justify">
              Desenvolvedora versátil com experiência em desenvolvimento de
              jogos (Pygame), análise de dados (Python, R, SQL) e aplicações
              full-stack. Gosto de explorar desde algoritmos visuais e gráficos
              interativos até modelagem preditiva e dashboards analíticos.
            </p>

            <div className="flex flex-wrap gap-5 ">
              <div className="skill-item flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[rgba(255,107,157,0.15)] transition-all duration-300  hover:-translate-y-1.25 hover:border-[#ff6b9d] ">
                <div className="animate-[bounceSubtle_2s_infinite]">
                  <FaCode />
                </div>

                <span>Full Stack Dev</span>
              </div>
              <div className="skill-item flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[rgba(255,107,157,0.15)] transition-all duration-300  hover:-translate-y-1.25 hover:border-[#ff6b9d] ">
                <div className="animate-[bounceSubtle_2s_infinite]">
                  <FaCogs />
                </div>

                <span>Engenheiro de software</span>
              </div>
              <div className="skill-item flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[rgba(255,107,157,0.15)] transition-all duration-300  hover:-translate-y-1.25 hover:border-[#ff6b9d] ">
                <div className="animate-[bounceSubtle_2s_infinite]">
                  <FaLayerGroup />
                </div>

                <span>Analise e desenvolvimento de sistemas</span>
              </div>
              <div className="skill-item flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[rgba(255,107,157,0.15)] transition-all duration-300  hover:-translate-y-1.25 hover:border-[#ff6b9d] ">
                <div className="animate-[bounceSubtle_2s_infinite]">
                  <FaMobileAlt />
                </div>

                <span>Mobile Apps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ferramentas" className="py-24 w-full relative">
        <div className="mx-auto max-w-[1200px] px-5 w-full">
          <h3 className="reveal text-[2.8rem] text-white font-bold text-center mx-auto mb-3.75 max-w-full px-2.5">
            Tech Stack
          </h3>
          <p className="reveal text-center text-white text-[1.2rem] mb-17.5 max-w-150 mx-auto px-2.5">
            Ferramentas que utilizo
          </p>

          <div className="flex flex-row gap-7 flex-wrap justify-center">
            {[
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
            ].map(({ icon, label, color }) => (
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

      <section id="projetos" className="py-24 w-full relative">
        <div className="mx-auto max-w-[1200px] px-5 w-full">
          <h3 className="reveal text-[2.8rem] text-white font-bold text-center mx-auto mb-3.75 max-w-full px-2.5">
            Projetos em Destaque
          </h3>
          <p className="reveal text-center text-white/80 text-[1.2rem] mb-17.5 max-w-150 mx-auto px-2.5">
            Explore meus trabalhos mais recentes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "KenzieHamburgueria",
                description:
                  "Front-end e-commerce application for a burger restaurant featuring product listing by category, shopping cart management, and product search.",
                tags: ["React", "JavaScript"],
                category: "FRONT END",
                categoryColor: "#667eea",
                github: "https://github.com/amonfanticelli/KenzieHamburgueria",
                demo: null as string | null,
                image: "/kenzieburguer.jpg" as string | null,
              },
              {
                title: "KenzieHub",
                description:
                  "Front-end application for developers to manage their personal tech stack and track learning progress, with user authentication and protected routes.",
                tags: ["React", "TypeScript", "React Hook Form", "Yup"],
                category: "FRONT END",
                categoryColor: "#667eea",
                github: "https://github.com/amonfanticelli/KenzieHub",
                demo: null as string | null,
                image: "/kenziehub.jpg" as string | null,
              },
              {
                title: "BlackBank API",
                description:
                  "Backend API that enables credit and debit transactions between users, with JWT authentication, PostgreSQL database, and Docker support.",
                tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
                category: "BACK END",
                categoryColor: "#667eea",
                github: "https://github.com/amonfanticelli/blackBank-backend",
                demo: null as string | null,
                image: "/black-bank-back-end.jpeg" as string | null,
              },
              {
                title: "BlackBank",
                description:
                  "Front-end client for the BlackBank API, enabling credit and debit transactions between users with authentication and transaction history.",
                tags: ["React", "TypeScript", "Styled Components", "Axios"],
                category: "FRONT END",
                categoryColor: "#667eea",
                github: "https://github.com/amonfanticelli/blackBank-frontend",
                demo: null as string | null,
                image: "/black-bank-front-end.jpeg" as string | null,
              },
              {
                title: "API RESTful Node",
                description:
                  "API robusta com Node.js e Express seguindo Repository Pattern com TypeORM. Autenticação JWT, estrutura MVC e banco PostgreSQL.",
                tags: ["Node.js", "Express", "PostgreSQL"],
                category: "BACK END",
                categoryColor: "#667eea",
                github: "https://github.com/amonfanticelli",
                demo: null as string | null,
                image: null as string | null,
              },
              {
                title: "Dashboard Analytics",
                description:
                  "Dashboard analítico com Next.js para visualização de dados em tempo real, gráficos interativos e filtros dinâmicos com Context API.",
                tags: ["Next.js", "TypeScript", "Tailwind"],
                category: "FULL STACK",
                categoryColor: "#667eea",
                github: "https://github.com/amonfanticelli",
                demo: "https://github.com/amonfanticelli" as string | null,
                image: null as string | null,
              },
            ].map(
              ({
                title,
                description,
                tags,
                category,
                categoryColor,
                github,
                demo,
                image,
              }) => (
                <div
                  key={title}
                  className="projeto-card reveal bg-white rounded-2xl overflow-hidden border border-transparent flex flex-col"
                  style={
                    { "--card-accent": categoryColor } as React.CSSProperties
                  }
                >
                  <div className="relative w-full h-52 overflow-hidden flex items-center justify-center">
                    {image ? (
                      <img src={image} alt={title} className="w-full h-full" />
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center opacity-80">
                        <span className="text-white/20 text-6xl font-black tracking-tighter select-none">
                          {title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span
                      className="absolute top-4 right-4 text-white text-[0.7rem] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase"
                      style={{ background: categoryColor }}
                    >
                      {category}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h4 className="text-[1.25rem] font-bold text-gray-900 mb-2">
                      {title}
                    </h4>
                    <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-4 flex-1">
                      {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.8rem] px-3 py-1 rounded-full border font-medium"
                          style={{
                            color: categoryColor,
                            borderColor: `${categoryColor}40`,
                            background: `${categoryColor}10`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={github}
                        target="_blank"
                        className="projeto-btn flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-[0.9rem] font-semibold transition-all duration-300"
                        style={{
                          borderColor: categoryColor,
                          color: categoryColor,
                        }}
                      >
                        <FaGithub /> Code
                      </a>
                      {demo && (
                        <a
                          href={demo}
                          target="_blank"
                          className="projeto-btn flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-[0.9rem] font-semibold transition-all duration-300"
                          style={{
                            borderColor: categoryColor,
                            color: categoryColor,
                          }}
                        >
                          <FaExternalLinkAlt /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
