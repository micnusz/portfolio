"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Dot } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "../ui/separator";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const navLinks: { title: string; id: string }[] = [
    {
      title: "About Me",
      id: "about-me-section",
    },
    {
      title: "Technology",
      id: "technology-section",
    },
    {
      title: "Projects",
      id: "projects-section",
    },
    {
      title: "Contact",
      id: "contact-section",
    },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);

  const isScrollingRef = useRef(false);

  const handleScroll = (id: string) => {
    isScrollingRef.current = true;
    setActiveSection(id);

    gsap.to(window, {
      duration: 2,
      scrollTo: { y: `#${id}` },
      ease: "power2.out",
      onComplete: () => {
        isScrollingRef.current = false;
      },
    });
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#hero-section",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        if (!isScrollingRef.current) setActiveSection("hero-section");
      },
      onEnterBack: () => {
        if (!isScrollingRef.current) setActiveSection("hero-section");
      },
    });

    navLinks.forEach((link) => {
      ScrollTrigger.create({
        trigger: `#${link.id}`,
        start: "top center",
        end: "bottom center",
        markers: false,
        onEnter: () => {
          if (!isScrollingRef.current) setActiveSection(link.id);
        },
        onEnterBack: () => {
          if (!isScrollingRef.current) setActiveSection(link.id);
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    handleScroll(id);
  };

  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between p-2 bg-transparent">
      {/* FullScreen links */}
      <nav
        className="flex-grow flex justify-center"
        aria-label="Main navigation"
      >
        <div className="hidden sm:flex ">
          <div className="flex gap-2 rounded-full p-2">
            <Button
              key="hero-section"
              variant="ghost"
              className={cn(
                "flex items-center gap-2 transition-opacity duration-300 rounded-full w-10 h-10",
                activeSection === "hero-section"
                  ? "bg-chart-1 text-chart-1 opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              )}
              onClick={() => handleScroll("hero-section")}
            >
              <Dot
                className="w-6 h-6"
                aria-hidden={activeSection !== "hero-section"}
              />
            </Button>
          </div>
          <div className="flex gap-2 rounded-full bg-background border p-2">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                className={cn(
                  "flex items-center gap-2 cursor-pointer transition rounded-full",
                  activeSection === link.id
                    ? "bg-muted-foreground text-muted-background"
                    : "hover:text-chart-1"
                )}
                onClick={() => handleScroll(link.id)}
              >
                <span className="text-xl font-semibold tracking-tight">
                  {link.title}
                </span>
              </Button>
            ))}
          </div>
          <div className="flex gap-2 rounded-full p-2">
            <Button
              variant="ghost"
              disabled
              className="w-10 h-10 opacity-0 pointer-events-none"
            >
              {/* Pusta zawartość */}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile hamburger + sheet */}
      <div className="flex sm:hidden items-center">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="cursor-pointer bg-muted-foreground border-1"
            >
              <span className="text-fluid-sm font-semibold tracking-tight text-muted-background">
                Menu
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="w-full max-h-[10rem] border-none [&>button]:hidden m-0 p-0"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <SheetTitle>
              <VisuallyHidden>Mobile Navigation</VisuallyHidden>
            </SheetTitle>
            <div className="px-4 space-y-4 bg-foreground rounded-xl">
              <div className="flex justify-end">
                <SheetClose
                  className="hover:bg-muted transition text-background"
                  aria-label="Close mobile menu"
                >
                  <span className="text-xl font-semibold tracking-tight">
                    Close
                  </span>
                </SheetClose>
              </div>

              {/* Linki */}
              <Separator />
              <div className="flex flex-col gap-4 bg-foreground">
                {navLinks.map((link) => (
                  <Button
                    variant="ghost"
                    key={link.title}
                    onClick={() => handleClick(link.id)}
                  >
                    <p className="text-muted-background  text-fluid-md font-semibold tracking-tight">
                      {link.title}
                    </p>
                  </Button>
                ))}
                <Button>Resume</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
