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
import {
  Briefcase,
  BriefcaseIcon,
  HomeIcon,
  HouseIcon,
  Mail,
  MailIcon,
  MenuIcon,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const navLinks: { href: string; title: string; icon: JSX.Element }[] = [
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Funkcja scrollująca do danego refa
  const scrollToSection = (ref) => {
    if (ref.current) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: ref.current, offsetY: 70 }, // 70px to np. wysokość navbaru
        ease: "power2.out",
      });
    }
  };
  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between p-2 bg-transparent">
      {/* Home on sm: */}
      <div className="flex sm:hidden">
        <NavigationMenu>
          <NavigationMenuList className="flex">
            <NavigationMenuItem className="rounded-xl bg-background">
              <NavigationMenuLink asChild>
                <Link href="/" aria-label="Go to Home page">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => scrollToSection(aboutRef)}
                  >
                    <HouseIcon aria-hidden="true" />
                    <span className="text-xl font-semibold tracking-tight">
                      Home
                    </span>
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <nav
        className="flex-grow flex justify-center"
        aria-label="Main navigation"
      >
        <div className="hidden sm:flex ">
          <NavigationMenu className=" rounded-xl bg-background border-1">
            <NavigationMenuList className="flex">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className=" rounded-l-xl">
                  <Link href="/" aria-label="Go to Home page ">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 cursor-pointer "
                    >
                      <HouseIcon
                        aria-hidden="true"
                        className="hover:text-background"
                      />
                      <span className="text-xl font-semibold tracking-tight">
                        Home
                      </span>
                    </Button>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/projects" aria-label="View Projects">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Briefcase
                        aria-hidden="true"
                        className="hover:text-background"
                      />
                      <span className="text-xl font-semibold tracking-tight">
                        Projects
                      </span>
                    </Button>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className=" rounded-r-xl">
                  <Link href="/contact" aria-label="Contact page">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 cursor-pointer "
                    >
                      <Mail
                        aria-hidden="true"
                        className="hover:text-background"
                      />
                      <span className="text-xl font-semibold tracking-tight">
                        Contact
                      </span>
                    </Button>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Mobile hamburger + sheet */}
      <div className="flex sm:hidden items-center">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="mx-4">
            <MenuIcon className="w-8 h-8" />
          </SheetTrigger>

          <SheetContent
            side="top"
            className="bg-background w-screen [&>button]:hidden"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <SheetTitle>
              <VisuallyHidden>Mobile Navigation</VisuallyHidden>
            </SheetTitle>
            <div className="px-4 space-y-6">
              <div className="flex justify-end">
                <SheetClose
                  className="p-2 rounded-md hover:bg-muted transition"
                  aria-label="Close mobile menu"
                >
                  <X />
                </SheetClose>
              </div>

              {/* Linki */}

              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="border-2 w-full p-2 text-center rounded-xl flex items-center justify-center gap-2 my-10">
                    {link.icon}
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                      {link.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
