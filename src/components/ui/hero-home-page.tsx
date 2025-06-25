"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, TextPlugin } from "gsap/all";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoGithub, IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";

gsap.registerPlugin(SplitText, TextPlugin);

const HeroHomePage = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#split-name",
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power1.inOut",
        delay: 0.1,
        duration: 1.5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#split-lastname",
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.inOut",
        delay: 0.1,
        duration: 1.5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#split-based",
      {
        clipPath: "inset(0% 100% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.inOut",
        delay: 0.5,
        duration: 1,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#split-frontend",
      {
        clipPath: "inset(0% 100% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.inOut",
        delay: 0.2,
        duration: 1.5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#split-quote",
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.out",
        delay: 1,
        duration: 1.5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#icon-react",
      {
        rotation: 0, // startowa rotacja
        opacity: 0,
      },
      {
        opacity: 1,
        rotation: 360, // pełen obrót
        ease: "power4.out",
        delay: 0.3,
        duration: 1.5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#icon-typescript",
      {
        rotation: -90, // startowa rotacja
        opacity: 0,
      },
      {
        opacity: 1,
        rotation: 0, // pełen obrót
        ease: "power3.out",
        delay: 0.3,
        duration: 1.5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#icon-nextjs",
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power1.out",
        delay: 0.3,
        duration: 1.5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#icon-github",
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.out",
        delay: 0.3,
        duration: 1.5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#icon-postgress",
      {
        clipPath: "inset(0% 0% 0% 100%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        delay: 0.3,
        duration: 1.5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#icon-nodejs",
      {
        rotation: -180, // startowa rotacja
        opacity: 0,
      },
      {
        opacity: 1,
        rotation: 360, // pełen obrót
        ease: "power3.out",
        delay: 0.3,
        duration: 2,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      "#icon-javascript",
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        delay: 0.4,
        duration: 2,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div
      id="body"
      className="flex items-center justify-center w-full h-screen flex-col border-b-1 px-4"
    >
      <div className="tracking-tight mb-40 ">
        <div className="flex items-end gap-4">
          <h1
            id="split-name"
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none origin-bottom"
          >
            Michał
          </h1>
          <div
            id="split-based"
            className="flex flex-col justify-end leading-none pb-1 md:pb-2 origin-left"
          >
            <span className="text-muted-foreground text-md sm:text-lg md:text-xl">
              // Based in
            </span>
            <span className="text-muted-foreground text-md sm:text-lg md:text-xl">
              Łódź, Poland
            </span>
          </div>
        </div>
        <h1
          id="split-lastname"
          className="scroll-m-20 text-6xl sm:text-7xl md:text-8xl font-extrabold  text-balance leading-none origin-bottom"
        >
          Nuszkiewicz
        </h1>
        <h2
          id="split-frontend"
          className="scroll-m-20 text-5xl sm:text-6xl md:text-7xl font-semibold first:mt-0 leading-none inline-block text-chart-3"
        >
          Front-end Developer
        </h2>

        <blockquote
          id="split-quote"
          className="mt-6 mb-6 border-l-2 pl-6 italic pb-3 text-md sm:text-lg md:text-xl text-muted-foreground"
        >
          &quot;I create what I would like to use.&quot;
        </blockquote>
        <div id="icons" className="flex flex-row  gap-4">
          <FaReact id="icon-react" className="w-12 h-12 md:w-18 md:h-18" />
          <RiNextjsFill
            id="icon-nextjs"
            className="w-12 h-12 md:w-18 md:h-18"
          />
          <SiTypescript
            id="icon-typescript"
            className="w-12 h-12 md:w-18 md:h-18"
          />
          <IoLogoGithub
            id="icon-github"
            className="w-12 h-12 md:w-18 md:h-18"
          />
          <DiPostgresql
            id="icon-postgress"
            className="w-12 h-12 md:w-18 md:h-18"
          />
          <FaNodeJs id="icon-nodejs" className="w-12 h-12 md:w-18 md:h-18" />
          <SiJavascript
            id="icon-javascript"
            className="w-12 h-12 md:w-18 md:h-18"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHomePage;
