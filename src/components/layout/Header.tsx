"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Dot, HouseIcon, MenuIcon, X } from "lucide-react";
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
      <div className="flex sm:hidden items-center py-2 ">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 cursor-pointer bg-background"
            >
              <span className="text-xl font-semibold tracking-tight">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-transparent w-[15rem] max-w-1/2 max-h-[10rem] border-none [&>button]:hidden"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <SheetTitle>
              <VisuallyHidden>Mobile Navigation</VisuallyHidden>
            </SheetTitle>
            <div className="px-4 space-y-6 bg-foreground rounded-xl">
              <div className="flex justify-end">
                <SheetClose
                  className="p-2 hover:bg-muted transition text-background"
                  aria-label="Close mobile menu"
                >
                  <span className="text-xl font-semibold tracking-tight">
                    Close
                  </span>
                </SheetClose>
              </div>

              {/* Linki */}
              <Separator className="p-0 m-0 mb-2" />
              <div className="flex flex-col  gap-4 bg-foreground  px-4 pb-14  justify-end">
                {navLinks.map((link) => (
                  <Button
                    variant="ghost"
                    key={link.title}
                    onClick={() => handleClick(link.id)}
                  >
                    <p className="text-muted-background scroll-m-20 text-2xl font-semibold tracking-tight">
                      {link.title}
                    </p>
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
