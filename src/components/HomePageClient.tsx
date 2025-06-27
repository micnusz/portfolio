"use client";

import { useRef } from "react";
import Footer from "./layout/Footer";
import AboutMe from "./sections/about-me";
import HeroHomePage from "./sections/hero-home-page";
import Skills from "./sections/skills";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";
import Projects from "./sections/projects";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HomePageClient = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 0.6,
      effects: true,
    });

    return () => {
      smoother.kill(); // cleanup on unmount
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef} className="w-full h-full">
      <div id="smooth-content" ref={contentRef}>
        <HeroHomePage />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default HomePageClient;
