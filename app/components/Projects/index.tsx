"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLang } from "../../components/Language/index";

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  categoryColor: string;
  github: string;
  demo: string | null;
  image: string | null;
};

export const Projects = () => {
  const { lang } = useLang();

  const t = {
    pt: {
      title: "Projetos em Destaque",
      subtitle: "Explore meus trabalhos mais recentes",
    },
    en: {
      title: "Featured Projects",
      subtitle: "Explore my most recent work",
    },
  }[lang];

  const projects: Project[] = [
    {
      title: "KenzieHamburgueria",
      description:
        lang === "pt"
          ? "Aplicação e-commerce front-end para um restaurante de hambúrgueres com listagem de produtos por categoria, carrinho de compras e busca de produtos."
          : "Front-end e-commerce application for a burger restaurant featuring product listing by category, shopping cart management, and product search.",
      tags: ["React", "JavaScript"],
      category: lang === "pt" ? "FRONT END" : "FRONT END",
      categoryColor: "#667eea",
      github: "https://github.com/amonfanticelli/KenzieHamburgueria",
      demo: null,
      image: "/kenzieburguer.jpg",
    },
    {
      title: "KenzieHub",
      description:
        lang === "pt"
          ? "Aplicação front-end para desenvolvedores gerenciarem seu stack de tecnologias e acompanharem o progresso de aprendizado, com autenticação e rotas protegidas."
          : "Front-end application for developers to manage their personal tech stack and track learning progress, with user authentication and protected routes.",
      tags: ["React", "TypeScript", "React Hook Form", "Yup"],
      category: "FRONT END",
      categoryColor: "#667eea",
      github: "https://github.com/amonfanticelli/KenzieHub",
      demo: null,
      image: "/kenziehub.jpg",
    },
    {
      title: "BlackBank API",
      description:
        lang === "pt"
          ? "API backend que permite transações de crédito e débito entre usuários, com autenticação JWT, banco de dados PostgreSQL e suporte a Docker."
          : "Backend API that enables credit and debit transactions between users, with JWT authentication, PostgreSQL database, and Docker support.",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
      category: "BACK END",
      categoryColor: "#667eea",
      github: "https://github.com/amonfanticelli/blackBank-backend",
      demo: null,
      image: "/black-bank-back-end.jpeg",
    },
    {
      title: "BlackBank",
      description:
        lang === "pt"
          ? "Cliente front-end da BlackBank API para transações de crédito e débito entre usuários, com autenticação e histórico de transações."
          : "Front-end client for the BlackBank API, enabling credit and debit transactions between users with authentication and transaction history.",
      tags: ["React", "TypeScript", "Styled Components", "Axios"],
      category: "FRONT END",
      categoryColor: "#667eea",
      github: "https://github.com/amonfanticelli/blackBank-frontend",
      demo: null,
      image: "/black-bank-front-end.jpeg",
    },
    {
      title: "Car Auction API",
      description:
        lang === "pt"
          ? "API backend para uma plataforma de anúncios de veículos. Usuários podem se cadastrar como compradores ou anunciantes, publicar anúncios e interagir através de comentários."
          : "Backend API for a vehicle listing platform. Users can register as buyers or announcers, publish listings, and interact through a comment system. Built with Node.js, TypeORM, and Docker.",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
      category: "BACK END",
      categoryColor: "#667eea",
      github: "https://github.com/amonfanticelli/car-auction-back-end",
      demo: null,
      image: "/car-auction-api.jpeg",
    },
    {
      title: "Car Auction",
      description:
        lang === "pt"
          ? "Plataforma front-end para compra e venda de carros e motos. Permite cadastro como comprador ou anunciante, listagens com galeria de imagens e rotas protegidas via JWT."
          : "Front-end platform for buying and selling cars and motorcycles. Features user registration as buyer or announcer, vehicle listings with image gallery, and protected routes via JWT.",
      tags: ["React", "TypeScript", "Styled Components", "Axios"],
      category: "FRONT END",
      categoryColor: "#667eea",
      github: "https://github.com/amonfanticelli/car-auction-front-end",
      demo: null,
      image: "/auction-home.jpg",
    },
    {
      title: "CineExpress API",
      description:
        lang === "pt"
          ? "API backend para uma plataforma de cinema desenvolvida por uma equipe de 6 pessoas. Inclui agendamento de sessões, compra de ingressos com seleção de assento e controle de acesso por perfil."
          : "Backend API for a cinema platform built by a team of 6. Features movie session scheduling, ticket purchasing with seat selection, payment management, and role-based access control.",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "Jest"],
      category: "BACK END",
      categoryColor: "#667eea",
      github: "https://github.com/amonfanticelli/API-Cinema",
      demo: null,
      image: "/diagram_api_cine.png",
    },
  ];

  return (
    <section id="projetos" className="py-24 w-full relative">
      <div className="mx-auto max-w-[1200px] px-5 w-full">
        <h3 className="reveal text-[2.8rem] text-white font-bold text-center mx-auto mb-3.75 max-w-full px-2.5">
          {t.title}
        </h3>
        <p className="reveal text-center text-white/80 text-[1.2rem] mb-17.5 max-w-150 mx-auto px-2.5">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(
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
  );
};
