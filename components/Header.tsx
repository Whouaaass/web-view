import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "../assets/logo.svg";
import { usePageContext } from "vike-react/usePageContext";
import { applyTheme, getStoredTheme, setStoredTheme, ThemeMode } from "../utils/theme";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pageContext = usePageContext();

  useEffect(() => {
    const savedTheme = getStoredTheme();
    const initialMode: ThemeMode = savedTheme ?? "dark";
    applyTheme(initialMode);
    setIsDarkMode(initialMode === "dark");

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "theme" && (event.newValue === "dark" || event.newValue === "light")) {
        applyTheme(event.newValue);
        setIsDarkMode(event.newValue === "dark");
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      applyTheme("light");
      setStoredTheme("light");
      setIsDarkMode(false);
    } else {
      applyTheme("dark");
      setStoredTheme("dark");
      setIsDarkMode(true);
    }
  };

  const navItems = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Identidad", href: "#identidad" },
    { name: "Políticas", href: "#politicas" },
    { name: "Valores", href: "#valores" },
    { name: "Objetivos", href: "#objetivos" },
    { name: "Roles", href: "#roles" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Equipo", href: "#equipo" },
    { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    if (pageContext.pageId !== "/pages/index") {
      window.location.href = "/web-view/" + href;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm border-b border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer select-none"
            onClick={() => scrollToSection("#inicio")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                scrollToSection("#inicio");
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Ir al inicio"
          >
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
          <nav className="ml-auto hidden lg:flex items-center space-x-1">
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
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
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
