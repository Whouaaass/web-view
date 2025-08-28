import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/globals.css";

import "./tailwind.css";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
