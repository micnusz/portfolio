"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import CardTechnology from "../ui/card-technology";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRefTechnology = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRefTechnology.current) return;

    const container = containerRefTechnology.current;
    const cards = gsap.utils.toArray<HTMLDivElement>(
      ".technology-card",
      container
    );
    let totalWidth = 0;
    cards.forEach((card) => {
      totalWidth += card.offsetWidth;
    });

    const viewportWidth = window.innerWidth;
    const scrollWidth = totalWidth - viewportWidth;
    const endValue = scrollWidth > 0 ? `+=${scrollWidth}` : "+=0";

    gsap.to(container, {
      x: () => `-${scrollWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: "#trigger-technology",
        pin: true,
        scrub: true,
        end: endValue,
        markers: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div id="technology-section">
      <section id="trigger-technology" className="py-6 px-fluid">
        <div className="pb-10">
          <h1 className="text-fluid-section leading-none ">Skills:</h1>
        </div>

        <div>
          <div className="pb-6">
            <h3 className="scroll-m-20 text-fluid-title leading-none font-bold">
              Technologies that I use:
            </h3>
          </div>
          <div
            ref={containerRefTechnology}
            className="flex h-screen md:w-[300vw] gap-8 overflow-hidden"
          >
            <div className="technology-card">
              <CardTechnology
                id="card-frontend"
                cardNumber="01"
                title="Languages"
                listItems={[
                  { id: "typescript", title: "Typescript" },
                  { id: "javascript", title: "Javascript" },
                ]}
              />
            </div>
            <div className="technology-card">
              <CardTechnology
                id="card-frontend"
                cardNumber="02"
                title="Front-end"
                listItems={[
                  { id: "reactjs", title: "React.js" },
                  { id: "nextjs", title: "Next.js" },
                  { id: "reactquery", title: "TanStack Query" },
                  { id: "reacttable", title: "TanStack Table" },
                ]}
              />
            </div>
            <div className="technology-card">
              <CardTechnology
                id="card-backend"
                cardNumber="03"
                title="Back-end"
                listItems={[
                  { id: "nodejs", title: "Node.js" },
                  { id: "restapi", title: "REST API's" },
                ]}
              />
            </div>
            <div className="technology-card">
              <CardTechnology
                id="card-database"
                cardNumber="04"
                title="Database & ORM"
                listItems={[
                  { id: "postgresql", title: "PostgreSQL" },
                  { id: "mysql", title: "MySQL" },
                  { id: "prisma", title: "Prisma" },
                ]}
              />
            </div>
            <div className="technology-card">
              <CardTechnology
                id="card-control"
                cardNumber="05"
                title="Tools & DevOps"
                listItems={[
                  { id: "git", title: "Git" },
                  { id: "aws", title: "AWS" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
