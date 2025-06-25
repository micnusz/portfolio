"use client";

const HeroHomePage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen flex-col border-b-1">
      <div className="tracking-tight ">
        <div className="flex items-end gap-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none">
            Michał
          </h1>
          <div className="flex flex-col justify-end leading-none pb-1 md:pb-2">
            <span className="text-muted-foreground text-md sm:text-lg md:text-xl">
              // Based in
            </span>
            <span className="text-muted-foreground text-md sm:text-lg md:text-xl">
              Łódź, Poland
            </span>
          </div>
        </div>
        <h1 className="scroll-m-20 text-6xl sm:text-7xl md:text-8xl font-extrabold  text-balance leading-none">
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
