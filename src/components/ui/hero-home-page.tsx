"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const HeroHomePage = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#split-name",
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        delay: 0.3,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#split-lastname",
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        delay: 0.2,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#split-based",
      {
        clipPath: "inset(0 100% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.out",
        delay: 0.3,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen flex-col border-b-1">
      <div className="tracking-tight mb-40">
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
        <h2 className="scroll-m-20 text-5xl sm:text-6xl md:text-7xl font-semibold first:mt-0 leading-none">
          Front-end Developer
        </h2>
        <blockquote className="mt-6 border-l-2 pl-6 italic pb-3 text-md sm:text-lg md:text-xl">
          &quot;I create what I would like to use.&quot;
        </blockquote>
      </div>
    </div>
  );
};

export default HeroHomePage;
