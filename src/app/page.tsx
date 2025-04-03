"use client";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <main className="flex min-h-screen flex-col bg-[#121212] w-full">
        <Navbar />
        <div className="container mx-auto px-8 md:px-12 py-4">
          <HeroSection />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
