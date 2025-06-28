"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { JSX } from "react";
import Image from "next/image";

type ProjectCardProps = {
  id?: string;
  cardNumber: string;
  title: string;
  description: string;
  link?: string;
  links: {
    id: string;
    title: string;
    icon: JSX.Element;
    href: string;
  }[];
  icons: {
    id: string;
    title: string;
    icon: JSX.Element;
  }[];
  images?: string[]; // nowy props
  cardClassName?: string;
  iconsClassName?: string;
  titleClassName?: string;
  linksClassName?: string;
};

const ProjectCard = ({
  id,
  cardNumber,
  title,
  description,
  icons,
  images,
  links,
  link,
  cardClassName = "",
  iconsClassName = "",
  titleClassName = "",
  linksClassName = "",
}: ProjectCardProps) => {
  return (
    <Card
      id={id}
      className={`flex flex-col w-full  min-h-[30rem] mx-auto border-4 ] rounded-xl overflow-hidden ${cardClassName}`}
    >
      <CardHeader>
        <span className={`${iconsClassName}`}>({cardNumber})</span>
        <CardTitle className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl leading-none font-semibold mb-1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Go to ${title} page`}
            className={`transition duration-200 ease-in-out hover:underline hover:underline-offset-4 ${titleClassName}`}
          >
            {title}
          </a>
        </CardTitle>
        <CardAction className="flex">
          <div className="flex gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Go to ${link.title} page`}
                className={`transition duration-200 ease-in-out ${linksClassName}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </CardAction>
        <div id="icons" className="flex flex-col">
          <div className="flex pb-1">
            <span className={`${iconsClassName}`}>Created with:</span>
          </div>
          <div className="flex flex-row gap-2 flex-wrap">
            {icons?.map((icon) => (
              <Tooltip key={icon?.id}>
                <TooltipTrigger asChild>
                  <span className={`${iconsClassName}`}>{icon?.icon}</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{icon?.title}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col md:flex-row flex-grow overflow-hidden pt-6">
        <div className="w-full md:w-1/2">
          <p className="leading-7 text-lg sm:text-xl md:text-2xl">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
