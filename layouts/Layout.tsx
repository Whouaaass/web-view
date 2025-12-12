import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/globals.css";

import "./tailwind.css";
import { applyTheme, detectInitialTheme, setStoredTheme } from "../utils/theme";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const mode = detectInitialTheme();
    applyTheme(mode);
    setStoredTheme(mode);

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "theme" && (event.newValue === "dark" || event.newValue === "light")) {
        applyTheme(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
