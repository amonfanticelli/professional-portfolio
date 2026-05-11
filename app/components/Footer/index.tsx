export const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-5 text-center">
        <p className="text-white/40 text-[0.9rem]">
          © {new Date().getFullYear()} Amon Fanticelli — Desenvolvido com
          Next.js e TypeScript
        </p>
      </div>
    </footer>
  );
};
