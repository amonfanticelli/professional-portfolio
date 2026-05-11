import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  return (
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
              title: "Car Auction API",
              description:
                "Backend API for a vehicle listing platform. Users can register as buyers or announcers, publish listings, and interact through a comment system. Built with Node.js, TypeORM, and Docker.",
              tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
              category: "BACK END",
              categoryColor: "#667eea",
              github: "https://github.com/amonfanticelli/car-auction-back-end",
              demo: null as string | null,
              image: "car-auction-api.jpeg" as string | null,
            },
            {
              title: "Car Auction",
              description:
                "Front-end platform for buying and selling cars and motorcycles. Features user registration as buyer or announcer, vehicle listings with image gallery, and protected routes via JWT.",
              tags: ["React", "TypeScript", "Styled Components", "Axios"],
              category: "FRONT END",
              categoryColor: "#667eea",
              github: "https://github.com/amonfanticelli/car-auction-front-end",
              demo: null as string | null,
              image: "auction-home.jpg" as string | null,
            },
            {
              title: "CineExpress API",
              description:
                "Backend API for a cinema platform built by a team of 6. Features movie session scheduling, ticket purchasing with seat selection, payment management, and role-based access control with admin and employee permissions.",
              tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "Jest"],
              category: "BACK END",
              categoryColor: "#667eea",
              github: "https://github.com/amonfanticelli/API-Cinema",
              demo: null as string | null,
              image: "/diagram_api_cine.png" as string | null,
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
  );
};
