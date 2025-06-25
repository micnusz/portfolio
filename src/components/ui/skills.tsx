"use client";

import { Badge } from "./badge";

const Skills = () => {
  return (
    <main className="flex  w-full h-screen flex-col border-2 px-20 py-6">
      <div className="pb-10">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold leading-none">
          Skills:
        </h1>
      </div>
      <article className="border-b w-fit pb-2">
        <div className="border-b w-fit pb-2">
          <h3 className="scroll-m-20 text-4xl sm:text-5xl md:text-6xl leading-none font-semibold">
            Technologies that i use:
          </h3>
        </div>
        <div className="flex flex-col items-center gap-4 leading-9 [&:not(:first-child)]:mt-6 text-sm sm:text-md md:text-xl">
          <div className="flex flex-col w-full gap-1">
            <h3> Front-end:</h3>
            <div className="flex flex-row gap-2">
              <Badge className="p-2 rounded-xl" variant="secondary">
                Typescript
              </Badge>
              <Badge className="p-2" variant="default">
                Javascript
              </Badge>
              <Badge className="p-2 rounded-sm" variant="destructive">
                React.js
              </Badge>
              <Badge className="p-2 rounded-full" variant="outline">
                Next.js
              </Badge>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <h3>Back-end:</h3>
            <div className="flex flex-row gap-2">
              <Badge className="p-2 rounded-sm" variant="outline">
                Node.js
              </Badge>
              <Badge className="p-2 rounded-full" variant="secondary">
                REST APIs
              </Badge>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <h3>Databases:</h3>
            <div className="flex flex-row gap-2">
              <Badge className="p-2 rounded-xl">Node.js</Badge>
              <Badge className="p-2 rounded-sm" variant="secondary">
                PostgreSQL
              </Badge>
              <Badge className="p-2" variant="destructive">
                SQL
              </Badge>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <h3>Other:</h3>
            <div className="flex flex-row gap-2">
              <Badge className="p-2 rounded-full" variant="outline">
                Git
              </Badge>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Skills;
