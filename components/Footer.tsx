import { Button } from "./ui/button";
import { Mail, Video, MapPin, Phone } from "lucide-react";

export function Footer() {
  const mail = "view.group@unicauca.edu.co";
  const meetLink = "meet.google.com/xyt-kjmh-xnn";

  const handleEmailClick = () => {
    window.location.href = `mailto:${mail}`;
  };

  const handleMeetClick = () => {
    window.open(`https://${meetLink}`, "_blank");
  };

  return (
    <footer id="contacto" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* University Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Información Institucional</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>Universidad del Cauca</p>
                    <p>Facultad de Electrónica y Telecomunicaciones</p>
                    <p>Ingeniería de Sistemas</p>
                    <p>Popayán, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Contacto</h3>
              <div className="space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleEmailClick}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 p-0 h-auto justify-start"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  view.group@unicauca.edu.co
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleMeetClick}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 p-0 h-auto justify-start"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Sala Virtual Google Meet
                </Button>
              </div>
            </div>

            {/* Group Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">V.I.E.W.</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <p>Virtual Innovation for Engineering and Web</p>
                <p className="italic text-gray-200">&quot;Landing the vision&quot;</p>
                <p className="text-xs">Aterrizando la visión</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            {/* Copyright and Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>© 2025 V.I.E.W. - Virtual Innovation for Engineering and Web</p>
                <p>Universidad del Cauca. Todos los derechos reservados.</p>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-4 text-sm">
                <button
                  onClick={() => document.querySelector("#inicio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => document.querySelector("#miembros")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Miembros
                </button>
                <button
                  onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
