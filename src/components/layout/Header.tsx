"use client";

import { ModeToggle } from "../ui/toggle-mode";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Briefcase, HouseIcon, Mail, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const Header = () => {
  const navLinks: { href: string; title: string }[] = [
    { href: "/", title: "Home" },
    { href: "/projects", title: "Projects" },
    { href: "/contact", title: "Contact" },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between p-2  bg-transparent">
      {/* Home on sm: */}
      <div className="flex sm:hidden">
        <NavigationMenu>
          <NavigationMenuList className="flex">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" aria-label="Go to Home page">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 cursor-pointer"
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
        <div className="hidden sm:flex">
          <NavigationMenu className="border-2 rounded-xl bg-background">
            <NavigationMenuList className="flex">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" aria-label="Go to Home page">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 cursor-pointer"
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
                <NavigationMenuLink asChild>
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
      <div>{/*<ModeToggle />*/}</div>

      {/* Mobile hamburger + sheet */}
      <div className="flex sm:hidden items-center">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <MenuIcon className="w-6 h-6 " />
          </SheetTrigger>

          <SheetContent
            side="top"
            className="bg-black/60 backdrop-blur-sm w-screen [&>button]:hidden "
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-6">
              <div className="flex justify-end">
                <SheetClose
                  className="p-2 rounded-md hover:bg-muted transition"
                  aria-label="Close mobile menu"
                >
                  Close
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
                  <div className="border-2 w-full p-2 text-center rounded-xl">
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
