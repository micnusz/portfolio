"use client";

import { SiReactquery, SiReacttable, SiTypescript } from "react-icons/si";
import ProjectCard from "../ui/project-card";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { HiOutlineArrowDownOnSquareStack } from "react-icons/hi2";

const Projects = () => {
  return (
    <section
      id="trigger"
      className="py-6 px-4 md:px-20 min-h-screen bg-muted-foreground text-background"
    >
      <div className="pb-10">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold leading-none ">
          Projects:
        </h1>
      </div>

      <div>
        <div className="pb-6">
          <h3 className="scroll-m-20 text-4xl sm:text-5xl md:text-6xl leading-none font-semibold">
            Projects that i made:
          </h3>
        </div>
        <p className="w-1/2">
          Teams are different. Needs shift. And not every engagement looks the
          same. That’s why we shape our approach around how you work—and what
          you’re trying to achieve. Then we help you move it forward.
        </p>
        <div id="trigger" className="md:p-12 border-2 h-full">
          <div className="md:py-12 border-3">
            <ProjectCard
              id="card-frontend"
              cardNumber="01"
              title="Tarkov.db"
              description="Tarkov.db is a web application designed to provide Escape from Tarkov players with easy access to detailed information about in-game items and quests."
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
