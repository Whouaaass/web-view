import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "../assets/logo.svg";
import { usePageContext } from "vike-react/usePageContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pageContext = usePageContext();

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Roles", href: "#roles" },
    { name: "Valores", href: "#valores" },
    { name: "Objetivos", href: "#objetivos" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Miembros", href: "#miembros" },
    { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    if (pageContext.pageId !== "/pages/index") {
      window.location.href = "/" + href;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <ImageWithFallback src={logo} alt="V.I.E.W. Logo" className="h-8" />
            </div>
            <div>
              <div className="font-semibold text-lg text-primary">V.I.E.W.</div>
              <div className="text-xs text-muted-foreground hidden sm:block">
                Virtual Innovation for Engineering and Web
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary hover:bg-accent transition-colors"
              >
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start text-foreground hover:text-primary hover:bg-accent"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
