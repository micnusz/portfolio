"use client";

import { BriefcaseIcon, HomeIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

const Footer = () => {
  const footerExploreLinks: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[] = [
    { href: "/", title: "Home", icon: <HomeIcon className="w-5 h-5" /> },
    {
      href: "/projects",
      title: "Projects",
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },
    {
      href: "/contact",
      title: "Contact",
      icon: <MailIcon className="w-5 h-5" />,
    },
  ];

  const footerFollowMeLinks: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[] = [
    {
      href: "https://github.com/micnusz/",
      title: "Github",
      icon: <FaGithubSquare />,
    },
    {
      href: "/contact",
      title: "LinkedIn",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <footer className="flex py-6 px-4 md:px-20 bg-muted-foreground text-background border-t-2 h-screen">
      <div className="border-2 w-full pt-15 flex gap-8">
        <div className="flex flex-col w-1/2 border-2">
          <div className="pb-4">
            <h3 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-semibold first:mt-0 leading-none inline-block ">
              What happens next usually starts with a conversation.
            </h3>
          </div>
          <div>
            <a href="mailto:webmaster@example.com">
              <span className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                webmaster@example.com
              </span>
            </a>
          </div>
        </div>
        <div className="w-1/2 flex gap-16 border-2">
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-chart-1 tracking-tight border-b pb-2">
              Explore:
            </h3>
            <ul className="[&>li]:mt-2 text-2xl tracking-tight">
              {footerExploreLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={`${link.href}`}
                    aria-label={`Go to ${link.title} page`}
                    className="flex items-center gap-2  hover:underline"
                  >
                    <span>{link.icon}</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-chart-3 tracking-tight border-b pb-2">
              Follow me:
            </h3>
            <ul className="[&>li]:mt-2 text-2xl tracking-tight">
              {footerFollowMeLinks.map((link) => (
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
    </footer>
  );
};

export default Footer;
