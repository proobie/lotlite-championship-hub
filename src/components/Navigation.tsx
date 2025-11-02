import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const competitions: { title: string; href: string; description: string }[] = [
    {
      title: "Microsoft Office Specialist",
      href: "/mos-championship",
      description:
        "The world's most popular competition that tests students' proficiency in Microsoft Office applications.",
    },
    {
      title: "Adobe Certified Professional",
      href: "/adobe-championship",
      description:
        "The premier event for young designers and aspiring content creators to showcase their digital media skills.",
    },
    {
      title: "ICT Junior Championship",
      href: "/ict-championship",
      description:
        "Cultivating computational thinking and foundational IT knowledge in younger students.",
    },
    {
      title: "AI Hackathon",
      href: "/ai-hackathon",
      description:
        "A high-intensity, project-based competition where teams prototype AI solutions for real-world problems.",
    },
]

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCompetitionsOpen, setMobileCompetitionsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/resources" },
    { name: "Register", path: "/register" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path || (path.startsWith('/mos') && location.pathname.startsWith('/mos')) || (path.startsWith('/adobe') && location.pathname.startsWith('/adobe')) || (path.startsWith('/ict') && location.pathname.startsWith('/ict')) || (path.startsWith('/ai') && location.pathname.startsWith('/ai'));


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 px-4">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start hover:opacity-80 transition-opacity">
            <img src="/Logo.png" alt="Lotlite Technology logo" className="w-20 h-20 object-contain rounded-lg" />
            <span className="mt-1 text-xs text-muted-foreground">Championship Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinks.slice(0, 1).map((link) => (
                <NavigationMenuItem key={link.path}>
                  <Link to={link.path} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), isActive(link.path) ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-muted")}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    isActive("/mos-championship") || isActive("/adobe-championship") || isActive("/ict-championship") || isActive("/ai-hackathon")
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  Competitions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {competitions.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navLinks.slice(1).map((link) => (
                 <NavigationMenuItem key={link.path}>
                 <Link to={link.path} legacyBehavior passHref>
                   <NavigationMenuLink
                     className={cn(navigationMenuTriggerStyle(), isActive(link.path) ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-muted")}
                   >
                     {link.name}
                   </NavigationMenuLink>
                 </Link>
               </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/register">
              <Button className="gradient-primary text-white font-semibold hover:opacity-90 transition-opacity">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="flex flex-col space-y-1 p-4">
              <Link
                  key="/"
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all ${isActive("/")
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-muted"
                    }`}
                >
                  Home
                </Link>
              <button
                onClick={() => setMobileCompetitionsOpen(!mobileCompetitionsOpen)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all text-left ${
                  isActive("/mos-championship") || isActive("/adobe-championship") || isActive("/ict-championship") || isActive("/ai-hackathon")
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-muted"
                }`}
              >
                <span>Competitions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCompetitionsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCompetitionsOpen && (
                <div className="pl-4 border-l-2 border-primary/20">
                  {competitions.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-lg transition-all text-sm ${isActive(link.href)
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-muted"
                        }`}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all ${isActive(link.path)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-muted"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/register" onClick={() => setIsOpen(false)} className="pt-2">
                <Button className="w-full gradient-primary text-white font-semibold">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export default Navigation;
