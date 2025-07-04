"use client";

import {
  SiPostgresql,
  SiPrisma,
  SiReactquery,
  SiReacttable,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import ProjectCard from "../ui/project-card";
import { FaGithub, FaReact, FaExternalLinkAlt } from "react-icons/fa";

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
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card, index) => {
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
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#trigger-projects",
              start: () => `top+=${index * 400} top`,
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
        end: () => `+=${cards.length * 400}`,
        scrub: true,
        markers: false,
      });

      ScrollTrigger.refresh();
    }, containerProjects);

    return () => ctx.revert();
  }, []);

  return (
    <div id="projects-section">
      <section
        id="trigger-projects"
        className="py-6 px-fluid bg-muted-foreground text-background min-h-screen  "
      >
        <div className="pb-2 md:pb-6 ">
          <h1 className="text-fluid-section leading-none ">Projects:</h1>
        </div>

        <div>
          <div className="pb-2 md:pb-6 ">
            <h3 className="scroll-m-20 text-fluid-title leading-none font-bold">
              Projects that i made:
            </h3>
          </div>
          <div
            ref={containerProjects}
            className="relative min-h-screen md:py-12 gap-8 overflow-hidden  "
          >
            <div className="project-card">
              {/* Tarkov-db */}
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
                    icon: (
                      <FaReact className="text-xl sm:text-2xl md:text-3xl" />
                    ),
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
                links={[
                  {
                    id: "website",
                    title: "Website",
                    href: "https://tarkov-db.vercel.app/",
                    icon: (
                      <FaExternalLinkAlt className="text-xl sm:text-2xl md:text-3xl" />
                    ),
                  },
                  {
                    id: "github",
                    title: "Github",
                    href: "https://github.com/micnusz/tarkov-db",
                    icon: (
                      <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
                    ),
                  },
                ]}
                cardClassName="bg-background text-foreground"
                iconsClassName="text-muted-foreground"
                titleClassName="hover:text-muted-foreground text-chart-1"
                linksClassName="text-foreground hover:text-chart-1"
              />
            </div>
            <div className="project-card">
              {/* Product Page */}
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
                    icon: (
                      <FaReact className="text-xl sm:text-2xl md:text-3xl" />
                    ),
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
                links={[
                  {
                    id: "github",
                    title: "Github",
                    href: "https://github.com/micnusz/tarkov-db",
                    icon: (
                      <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
                    ),
                  },
                  {
                    id: "website",
                    title: "Website",
                    href: "https://tarkov-db.vercel.app/",
                    icon: (
                      <FaExternalLinkAlt className="text-xl sm:text-2xl md:text-3xl" />
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
                cardClassName="bg-foreground text-muted-background"
                iconsClassName="text-muted-background"
                titleClassName="hover:text-chart-1 text-background underline underline-offset-4"
                linksClassName="text-muted-background hover:text-chart-1"
              />
            </div>
            <div className="project-card">
              <ProjectCard
                id="taskboard"
                cardNumber="03"
                title="Project Taskboard"
                description="A professional task management app, created to simplify work and improve clarity when tackling project-related problems. Users can create, read, update, and delete tasks, as well as filter, sort, and search tasks in real time using a dynamic search bar. "
                link="https://github.com/micnusz/task-todo"
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
                    icon: (
                      <FaReact className="text-xl sm:text-2xl md:text-3xl" />
                    ),
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
                    id: "prisma",
                    title: "Prisma",
                    icon: (
                      <SiPrisma className="text-xl sm:text-2xl md:text-3xl" />
                    ),
                  },
                  {
                    id: "postgresql",
                    title: "PostgreSQL",
                    icon: (
                      <SiPostgresql className="text-xl sm:text-2xl md:text-3xl" />
                    ),
                  },
                ]}
                links={[
                  {
                    id: "github",
                    title: "Github",
                    href: "https://github.com/micnusz/task-todo",
                    icon: (
                      <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
                    ),
                  },
                  {
                    id: "website",
                    title: "Website",
                    href: "https://tarkov-db.vercel.app/",
                    icon: (
                      <FaExternalLinkAlt className="text-xl sm:text-2xl md:text-3xl" />
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
                cardClassName="bg-chart-1 text-muted-background"
                iconsClassName="text-muted-background"
                titleClassName="hover:text-muted-foreground text-background underline underline-offset-4"
                linksClassName="text-muted-background hover:text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
