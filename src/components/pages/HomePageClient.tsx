"use client";

import Footer from "../layout/Footer";
import AboutMe from "../ui/about-me";
import HeroHomePage from "../ui/hero-home-page";
import Skills from "../ui/skills";

const HomePageClient = () => {
  return (
    <main className="w-full h-full">
      <HeroHomePage />
      <AboutMe />
      <Skills />
    </main>
  );
};

export default HomePageClient;
