"use client";

import { LucideGithub } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-center justify-center flex py-8 md:py-12 gap-4">
      <a
        href="https://github.com/micnusz/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to creator github profile"
      >
        <LucideGithub />
      </a>
      <p className="text-foreground text-sm">Work in progress.</p>
    </footer>
  );
};

export default Footer;
