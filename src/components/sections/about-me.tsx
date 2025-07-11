"use client";

import Link from "next/link";

const AboutMe = () => {
  return (
    <main
      id="about-me-section"
      className="flex  w-full h-screen flex-col border-b-1 px-20 py-6 bg-muted-foreground"
    >
      <div className="pb-10">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold leading-none text-background">
          About Me:
        </h1>
      </div>

      <div>
        <div className="border-b w-fit pb-2">
          <h3 className="scroll-m-20 text-4xl sm:text-5xl md:text-6xl leading-none font-semibold text-background">
            Hi, my name is Michał.
          </h3>
        </div>
        <p className="leading-9 [&:not(:first-child)]:mt-6 text-xl sm:text-2xl md:text-3xl w-full md:w-2/3 text-background">
          I&apos;m a 20-year-old front-end developer based in Łódź, Poland.
          Although I don&apos;t have professional experience yet, you can see
          examples of my work in the{" "}
          <Link href={"/projects"}>
            <span className="text-chart-1 hover:underline hover:text-chart-3">
              Projects
            </span>
          </Link>{" "}
          section. I am currently looking for a full-time front-end position,
          preferably remote, but I&apos;m also open to relocation.
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
