"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import CardTechnology from "../card-technology";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !lastCardRef.current) return;

    const container = containerRef.current;
    const lastCard = lastCardRef.current;

    const updateScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const lastCardRect = lastCard.getBoundingClientRect();

      const scrollDistance =
        lastCard.offsetLeft + lastCard.offsetWidth - window.innerWidth;

      gsap.to(container, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: "#horizontal-scroll",
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `${scrollDistance}px`,
          markers: true,
          invalidateOnRefresh: true,
        },
      });
    };

    updateScroll();
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <main id="horizontal-scroll" className=" py-6">
      <div className="pb-10">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold leading-none px-4 md:px-10">
          Skills:
        </h1>
      </div>

      <section className="relative overflow-hidden">
        <div className="pb-6">
          <h3 className="scroll-m-20 text-4xl sm:text-5xl md:text-6xl leading-none font-semibold px-4 md:px-10">
            Technologies that I use:
          </h3>
        </div>
        <div
          ref={containerRef}
          className="flex h-full w-fit gap-8 will-change-transform"
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
          <div ref={lastCardRef}>
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
    </main>
  );
};

export default Skills;
