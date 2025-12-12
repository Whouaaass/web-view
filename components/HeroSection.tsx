import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#nosotros");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:[mask-image:linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">V.I.E.W.</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 dark:text-gray-300 font-serif mt-4 block">
              Virtual Innovation for Engineering and Web
            </span>
          </h1>

          {/* Slogan */}
          <div className="mb-10 space-y-2">
            <div className="text-2xl sm:text-3xl font-medium text-blue-600 dark:text-blue-400">
              &quot;Landing the vision&quot;
            </div>
            <div className="text-xl text-gray-500 dark:text-gray-400 italic font-light">Aterrizando la visión</div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Desarrollamos soluciones tecnológicas innovadoras que integran ingeniería y desarrollo web para transformar
            la forma en que interactúas con el mundo digital.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Conócenos
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>

          {/* University Info */}
          <div className="mt-16 text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">
            <p>Universidad del Cauca</p>
            <p className="mt-1">Facultad de Ingeniería Electrónica y Telecomunicaciones</p>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full opacity-40 blur-3xl"></div>
      </div>
    </section>
  );
}
