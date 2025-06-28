"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { JSX, useRef } from "react";

gsap.registerPlugin(ScrollTrigger); //Gsap register

const Contact = () => {
  const contactExploreLinks: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[] = [
    { href: "/", title: "Home", icon: <ArrowRight className="w-5 h-5" /> },
    {
      href: "/projects",
      title: "Projects",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    {
      href: "/contact",
      title: "Contact",
      icon: <ArrowRight className="w-5 h-5" />,
    },
  ];

  const contactFollowMeLinks: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[] = [
    {
      href: "https://github.com/micnusz/",
      title: "Github",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    {
      href: "/contact",
      title: "LinkedIn",
      icon: <ArrowRight className="w-5 h-5" />,
    },
  ];

  const containerContact = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerContact.current) return;

    gsap.from(containerContact.current, {
      yPercent: 10,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#trigger-contact",
        start: "top 80%",
        end: "bottom bottom",
        markers: true,
      },
    });
  }, [containerContact]);

  return (
    <div id="contact-section">
      <section
        id="trigger-contact"
        ref={containerContact}
        className="flex py-6 px-fluid  bg-muted-foreground text-background border-t-2 h-[50vh]"
      >
        <div className="w-full flex flex-col gap-6 md:flex-row ">
          <div className="flex flex-col w-full md:w-1/2      ">
            <div className="pb-4">
              <h3 className="scroll-m-20 text-fluid-mail font-semibold first:mt-0 leading-none inline-block ">
                What happens next usually starts with a conversation.
              </h3>
            </div>
            <div>
              <a
                href="mailto:webmaster@example.com"
                className="break-words scroll-m-20 text-fluid-mail font-semibold text-chart-1 transition duration-150 ease-in-out hover:text-chart-3 hover:underline hover:underline-offset-4"
              >
                <p>webmaster@example.com</p>
              </a>
            </div>
          </div>
          <div className="w-1/2 flex gap-2 md:gap-8">
            <div className="flex flex-col">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-chart-1 tracking-tight underline underline-offset-4">
                Explore:
              </h3>
              <ul className="[&>li]:mt-2 text-2xl tracking-tight">
                {contactExploreLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={`${link.href}`}
                      aria-label={`Go to ${link.title} page`}
                      className="flex items-center gap-2 hover:underline"
                    >
                      <span>{link.icon}</span>
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-chart-3 tracking-tight underline underline-offset-4">
                Follow me:
              </h3>
              <ul className="[&>li]:mt-2 text-2xl tracking-tight">
                {contactFollowMeLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={`${link.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Go to creator ${link.title} profile`}
                      className="flex items-center gap-2  hover:underline"
                    >
                      <span>{link.icon}</span>
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
