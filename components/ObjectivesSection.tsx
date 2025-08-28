import { Card, CardContent } from "./ui/card";
import { Target, Users, Cog, HandHeart, Search, Scale } from "lucide-react";

export function ObjectivesSection() {
  const objectives = [
    {
      title: "Desarrollar soluciones tecnológicas innovadoras",
      description: "Aplicando conocimientos en ingeniería y desarrollo web",
      icon: Target,
    },
    {
      title: "Garantizar la excelencia y satisfacción del cliente",
      description: "Ofreciendo productos y servicios de la más alta calidad",
      icon: HandHeart,
    },
    {
      title: "Optimizar el uso de recursos y metodologías ágiles",
      description: "Maximizando la eficiencia en nuestros procesos de desarrollo",
      icon: Cog,
    },
    {
      title: "Fomentar un entorno laboral colaborativo y motivador",
      description: "Promoviendo el crecimiento personal y profesional del equipo",
      icon: Users,
    },
    {
      title: "Explorar nuevas aplicaciones tecnológicas",
      description: "En diversos sectores para generar impacto positivo",
      icon: Search,
    },
    {
      title: "Operar bajo principios de legalidad, ética y responsabilidad",
      description: "Manteniendo los más altos estándares profesionales",
      icon: Scale,
    },
  ];

  return (
    <section id="objetivos" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Objetivos</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Las metas que nos impulsan a crear soluciones tecnológicas de impacto.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                            {index + 1}
                          </span>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">{objective.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
