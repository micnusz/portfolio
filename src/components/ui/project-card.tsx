"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { JSX } from "react";
import Image from "next/image";

type ProjectCardProps = {
  id?: string;
  cardNumber: string;
  title: string;
  description: string;
  icons: {
    id: string;
    title: string;
    icon: JSX.Element;
  }[];
  images?: string[]; // nowy props
};

const ProjectCard = ({
  id,
  cardNumber,
  title,
  description,
  icons,
  images,
}: ProjectCardProps) => {
  return (
    <Card
      id={id}
      className="flex flex-col w-full  mx-auto border-4 bg-background text-foreground h-auto lg:h-[42rem] rounded-xl overflow-hidden"
    >
      <CardHeader>
        <span className="text-muted-foreground">{cardNumber}</span>
        <CardTitle className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl leading-none font-semibold text-chart-1 mb-1">
          <a
            href="https://tarkov-db.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Go to ${title} page`}
            className="text-chart-1 transition hover:text-muted-foreground hover:underline hover:underline-offset-4"
          >
            {title}
          </a>
        </CardTitle>
        <CardAction className="flex">
          <div className="flex gap-4">
            <a
              href="https://tarkov-db.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Go to ${title} page`}
              className="text-foreground transition hover:text-chart-1"
            >
              <FaExternalLinkAlt className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://tarkov-db.vercel.app/"
              className="text-foreground transition hover:text-chart-1"
            >
              <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </CardAction>
        <div id="icons" className="flex flex-col">
          <div className="flex pb-1">
            <span className="text-muted-foreground">Created with:</span>
          </div>
          <div className="flex flex-row gap-2 flex-wrap">
            {icons?.map((icon) => (
              <Tooltip key={icon?.id}>
                <TooltipTrigger asChild>
                  <span className="text-muted-foreground">{icon?.icon}</span>
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
