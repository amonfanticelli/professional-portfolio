import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contato" className="py-24 w-full relative">
      <div className="mx-auto max-w-[1200px] px-5 w-full">
        <h3 className="reveal text-[2.8rem] text-white font-bold text-center mx-auto mb-3 max-w-full px-2.5">
          Vamos Conversar?
        </h3>
        <p className="reveal text-center text-white/80 text-[1.2rem] mb-16 max-w-150 mx-auto px-2.5">
          Estou sempre aberto a novas ideias e oportunidades
        </p>

        <div className="reveal flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: <FaEnvelope className="text-3xl" />,
              label: "E-mail",
              value: "amonfanticelli@gmail.com",
              href: "mailto:amonfanticelli@gmail.com",
            },
            {
              icon: <FaLinkedin className="text-3xl" />,
              label: "LinkedIn",
              value: "/amon-fanticelli",
              href: "https://www.linkedin.com/in/amon-fanticelli/",
            },
            {
              icon: <FaGithub className="text-3xl" />,
              label: "GitHub",
              value: "/amonfanticelli",
              href: "https://github.com/amonfanticelli",
            },
          ].map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="ferramenta flex-1 flex flex-col items-center gap-3 p-8 rounded-2xl border border-white/10 bg-white/5 text-white no-underline"
            >
              <span style={{ color: "#667eea" }}>{icon}</span>
              <span className="font-bold text-[1rem]">{label}</span>
              <span className="text-white/60 text-[0.9rem]">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
