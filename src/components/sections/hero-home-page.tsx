"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, TextPlugin } from "gsap/all";
import { DiPostgresql } from "react-icons/di";
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiPrisma, SiTypescript } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

gsap.registerPlugin(SplitText, TextPlugin);

const HeroHomePage = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#split-name",
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power3.inOut",
        duration: 1.5,
      },
      0.1
    );
    tl.fromTo(
      "#split-lastname",
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.inOut",
        duration: 1.5,
      },
      0.1
    );
    tl.fromTo(
      "#split-based",
      {
        clipPath: "inset(0% 100% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.inOut",
        duration: 1,
      },
      0.5
    );
    tl.fromTo(
      "#split-frontend",
      {
        clipPath: "inset(0% 100% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.inOut",
        duration: 1.5,
      },
      0.2
    );
    tl.fromTo(
      "#split-quote",
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.out",
        delay: 0.6,
        duration: 1.5,
      },
      0.6
    );
    tl.fromTo(
      "#icon-react",
      {
        rotation: 0, // startowa rotacja
        opacity: 0,
      },
      {
        opacity: 1,
        rotation: 360, // pełen obrót
        ease: "power4.out",
        duration: 1.5,
      },
      0.3
    );
    tl.fromTo(
      "#icon-typescript",
      {
        rotation: -90, // startowa rotacja
        opacity: 0,
      },
      {
        opacity: 1,
        rotation: 0, // pełen obrót
        ease: "power3.out",
        duration: 1.5,
      },
      0.3
    );
    tl.fromTo(
      "#icon-nextjs",
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power1.out",
        duration: 1.5,
      },
      0.3
    );
    tl.fromTo(
      "#icon-github",
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.out",
        duration: 1.5,
      },
      0.3
    );
    tl.fromTo(
      "#icon-postgress",
      {
        clipPath: "inset(0% 0% 0% 100%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        duration: 1.5,
      },
      0.3
    );
    tl.fromTo(
      "#icon-nodejs",
      {
        rotation: -180, // startowa rotacja
        opacity: 0,
      },
      {
        opacity: 1,
        rotation: 360, // pełen obrót
        ease: "power3.out",
        duration: 2,
      },
      0.3
    );
    tl.fromTo(
      "#icon-javascript",
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        duration: 2,
      },
      0.4
    );
  }, []);

  const icons = [
    {
      id: "reactjs",
      title: "React.JS",
      icon: <FaReact id="icon-react" />,
    },
    {
      id: "nextjs",
      title: "Next.JS",
      icon: <RiNextjsFill id="icon-nextjs" />,
    },
    {
      id: "typescript",
      title: "Typescript",
      icon: <SiTypescript id="icon-typescript" />,
    },
    {
      id: "github",
      title: "Github",
      icon: <IoLogoGithub id="icon-github" />,
    },
    {
      id: "postgress",
      title: "PostgreSQL",
      icon: <DiPostgresql id="icon-postgress" />,
    },
    {
      id: "nodejs",
      title: "Node.JS",
      icon: <FaNodeJs id="icon-nodejs" />,
    },
    {
      id: "prisma",
      title: "Prisma",
      icon: <SiPrisma id="icon-javascript" />,
    },
    {
      id: "aws",
      title: "Amazon Web Services",
      icon: (
        <FaAws
          id="icon-javascript"
          className="w-6 h-6 sm:w-12 sm:h-12 md:w-18 md:h-18"
        />
      ),
    },
  ];

  return (
    <section id="hero-section" className="px-fluid">
      <div
        id="body"
        className="flex items-center justify-center w-full h-screen flex-col border-b-1"
      >
        <div className="tracking-tight ">
          <div className="flex items-end gap-4">
            <h1
              id="split-name"
              className="text-fluid-xxl font-extrabold leading-none origin-bottom"
            >
              Michał
            </h1>
            <div
              id="split-based"
              className="flex flex-col justify-end leading-none pb-1 md:pb-2 origin-left"
            >
              <span className="text-muted-foreground text-fluid-sm">
                {`// Based in`}
              </span>
              <span className="text-muted-foreground text-fluid-sm">
                Łódź, Poland
              </span>
            </div>
          </div>
          <h1
            id="split-lastname"
            className="text-fluid-xxl font-extrabold  text-balance leading-none origin-bottom"
          >
            Nuszkiewicz
          </h1>
          <h2
            id="split-frontend"
            className="scroll-m-20 text-fluid-xl font-semibold first:mt-0 leading-none inline-block text-chart-3"
          >
            Front-end Developer
          </h2>

          <blockquote
            id="split-quote"
            className="mt-6 mb-6 border-l-2 pl-6 italic pb-3 text-fluid-sm text-muted-foreground"
          >
            &quot;I create what I would like to use.&quot;
          </blockquote>
          <div
            id="icons"
            className="flex flex-row gap-2 md:gap-4 border-2 justify-center"
          >
            {icons.map((icon) => (
              <span key={icon.id} className="text-fluid-icons">
                <Tooltip>
                  <TooltipTrigger>{icon.icon}</TooltipTrigger>
                  <TooltipContent>
                    <p>{icon.title}</p>
                  </TooltipContent>
                </Tooltip>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomePage;
