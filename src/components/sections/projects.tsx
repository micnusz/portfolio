"use client";

import { SiReactquery, SiReacttable, SiTypescript } from "react-icons/si";
import ProjectCard from "../ui/project-card";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { HiOutlineArrowDownOnSquareStack } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger); //Gsap register
ScrollTrigger.refresh();

const Projects = () => {
  const containerProjects = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card: any, index) => {
        if (index === 0) {
          gsap.set(card, {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: index,
            yPercent: 0,
            scale: 1,
          });
        } else {
          gsap.set(card, {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: index,
            yPercent: 200,
            scale: 0.95,
          });

          gsap.to(card, {
            yPercent: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#trigger-projects",
              start: () => `top+=${index * 200} top`,
              end: () => `+=300`,
              scrub: true,
              markers: false,
            },
          });
        }
      });

      ScrollTrigger.create({
        trigger: "#trigger-projects",
        pin: true,
        start: "top top",
        end: () => `+=${cards.length * 300}`,
        scrub: true,
        markers: true,
      });

      ScrollTrigger.refresh();
    }, containerProjects);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-6 px-4 md:px-20 bg-muted-foreground text-background min-h-screen md:min-h-[150vh]">
      <div className="pb-10">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold leading-none ">
          Projects:
        </h1>
      </div>

      <div id="trigger-projects">
        <div className="pb-6">
          <h3 className="scroll-m-20 text-4xl sm:text-5xl md:text-6xl leading-none font-semibold">
            Projects that i made:
          </h3>
        </div>
        <div
          ref={containerProjects}
          className="relative h-screen md:py-12 gap-8 overflow-hidden border-2"
        >
          <div className="project-card">
            <ProjectCard
              id="tarkovdb"
              cardNumber="01"
              title="Tarkov.db"
              description="Tarkov.db is a web application designed to provide Escape from Tarkov players with easy access to detailed information about in-game items and quests."
              link="https://tarkov-db.vercel.app/"
              icons={[
                {
                  id: "typescript",
                  title: "Typescript",
                  icon: (
                    <SiTypescript className="text-xl sm:text-2xl md:text-3xl" />
                  ),
                },
                {
                  id: "reactjs",
                  title: "React.JS",
                  icon: <FaReact className="text-xl sm:text-2xl md:text-3xl" />,
                },
                {
                  id: "reactquery",
                  title: "TanStack Query",
                  icon: (
                    <SiReactquery className="text-xl sm:text-2xl md:text-3xl" />
                  ),
                },
                {
                  id: "reacttable",
                  title: "TanStack Table",
                  icon: (
                    <SiReacttable className="text-xl sm:text-2xl md:text-3xl" />
                  ),
                },
                {
                  id: "nextjs",
                  title: "Next.JS",
                  icon: (
                    <RiNextjsFill className="text-xl sm:text-2xl md:text-3xl" />
                  ),
                },
                {
                  id: "api",
                  title: "API",
                  icon: (
                    <HiOutlineArrowDownOnSquareStack className="text-xl sm:text-2xl md:text-3xl" />
                  ),
                },
              ]}
              images={[
                "/images/tarkov1.png",
                "/images/tarkov2.png",
                "/images/tarkov3.png",
                "/images/tarkov4.png",
                "/images/tarkov5.png",
              ]}
            />
          </div>
          <div className="project-card">
            <ProjectCard
              id="productpage"
              cardNumber="02"
              title="Product Page"
              description="A simple and responsive products page built with Next.js. Features include live search, dynamic filters (e.g., price sorting), and pagination."
              link="https://github.com/micnusz/DummyJSON-Products-Page"
              icons={[
                {
                  id: "typescript",
                  title: "Typescript",
                  icon: (
                    <SiTypescript className="text-xl sm:text-2xl md:text-3xl" />
                  ),
                },
                {
                  id: "reactjs",
                  title: "React.JS",
                  icon: <FaReact className="text-xl sm:text-2xl md:text-3xl" />,
                },
                {
                  id: "reactquery",
                  title: "TanStack Query",
                  icon: (
                    <SiReactquery className="text-xl sm:text-2xl md:text-3xl" />
                  ),
                },
                {
                  id: "reacttable",
                  title: "TanStack Table",
                  icon: (
                    <SiReacttable className="text-xl sm:text-2xl md:text-3xl" />
                  ),
                },
                {
                  id: "nextjs",
                  title: "Next.JS",
                  icon: (
                    <RiNextjsFill className="text-xl sm:text-2xl md:text-3xl" />
                  ),
                },
                {
                  id: "api",
                  title: "API",
                  icon: (
                    <HiOutlineArrowDownOnSquareStack className="text-xl sm:text-2xl md:text-3xl" />
                  ),
                },
              ]}
              images={[
                "/images/tarkov1.png",
                "/images/tarkov2.png",
                "/images/tarkov3.png",
                "/images/tarkov4.png",
                "/images/tarkov5.png",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
