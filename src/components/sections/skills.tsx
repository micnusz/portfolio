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

    const tl = gsap.timeline();

    tl.set(containerRefTechnology.current, { xPercent: 20 });
    tl.to(containerRefTechnology.current, {
      xPercent: 0,
      duration: 1,
      ease: "power2.out",
    }).add(() => {
      gsap.to(containerRefTechnology.current, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: "#trigger-technology",
          pin: true,
          scrub: 1,
          end: "+=3000",
          markers: false,
        },
      });
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
            <CardTechnology
              id="card-frontend"
              cardNumber="01"
              title="Front-end"
              description="They help me build web apps that are fast, easy to maintain, and enjoyable to work on."
              listItems={[
                { id: "reactjs", title: "React.js" },
                { id: "typescript", title: "TypeScript" },
                { id: "nextjs", title: "Next.js" },
              ]}
            />
            <CardTechnology
              id="card-backend"
              cardNumber="02"
              title="Back-end"
              description="I use them to build APIs and back-end logic that are fast, simple, and ready to scale."
              listItems={[
                { id: "nodejs", title: "Node.js" },
                { id: "restapi", title: "REST API's" },
              ]}
            />
            <CardTechnology
              id="card-database"
              cardNumber="03"
              title="Database"
              description="I work with both relational and NoSQL databases to design scalable and consistent data layers."
              listItems={[
                { id: "postgresql", title: "PostgreSQL" },
                { id: "mysql", title: "MySQL" },
                { id: "mongodb", title: "MongoDB" },
              ]}
            />
            <CardTechnology
              id="card-control"
              cardNumber="04"
              title="Version Control"
              description="I use these tools to stay productive, keep my code clean and work efficiently."
              listItems={[
                { id: "git", title: "Git" },
                { id: "github", title: "GitHub" },
              ]}
            />
            <CardTechnology
              id="card-cloud"
              cardNumber="05"
              title="Cloud Service"
              description="I use these tools to stay productive, keep my code clean and work efficiently."
              listItems={[{ id: "aws", title: "Amazon Web Services" }]}
            />

            <CardTechnology
              id="card-api"
              cardNumber="06"
              title="API"
              description="Tools and libraries that help me efficiently fetch, manage, and test data from APIs."
              listItems={[
                { id: "reactquery", title: "React Query" },
                { id: "postman", title: "Postman" },
                { id: "swagger", title: "Swagger" },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
