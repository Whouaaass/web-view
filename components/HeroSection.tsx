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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            <span className="text-primary">V.I.E.W.</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-800">
              Virtual Innovation for Engineering and Web
            </span>
          </h1>

          {/* Slogan */}
          <div className="mb-8">
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-2">
              &quot;Landing the vision&quot;
            </div>
            <div className="text-lg sm:text-xl text-gray-700 italic">Aterrizando la visión</div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Desarrollamos soluciones tecnológicas innovadoras que integran ingeniería y desarrollo web para transformar
            la forma en que interactúas con el mundo digital.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Conócenos
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>

          {/* University Info */}
          <div className="mt-12 text-sm text-gray-600">
            <p>Universidad del Cauca</p>
            <p>Facultad de Ingeniería Electrónica y Telecomunicaciones</p>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gray-50 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gray-200 rounded-full opacity-15"></div>
      </div>
    </section>
  );
}
