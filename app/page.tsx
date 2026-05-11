"use client";
import { useReveal } from "./components/useReveal";
import { LangProvider } from "./components/Language/index";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

export default function Home() {
  useReveal();
  return (
    <LangProvider>
      <Header />
      <Navbar />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </LangProvider>
  );
}
