import { Card, CardContent } from "./ui/card";
import { Target, Users, Cog, HandHeart, Search, Scale } from "lucide-react";

export function ObjectivesSection() {
  const objectives = [
    {
      title: "Desarrollar soluciones tecnológicas innovadoras",
      description: "Aplicando conocimientos en ingeniería y desarrollo web",
      icon: Target,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Garantizar la excelencia y satisfacción del cliente",
      description: "Ofreciendo productos y servicios de la más alta calidad",
      icon: HandHeart,
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-rose-100 dark:bg-rose-900/30",
    },
    {
      title: "Optimizar el uso de recursos y metodologías ágiles",
      description: "Maximizando la eficiencia en nuestros procesos de desarrollo",
      icon: Cog,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
      title: "Fomentar un entorno laboral colaborativo y motivador",
      description: "Promoviendo el crecimiento personal y profesional del equipo",
      icon: Users,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
    {
      title: "Explorar nuevas aplicaciones tecnológicas",
      description: "En diversos sectores para generar impacto positivo",
      icon: Search,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      title: "Operar bajo principios de legalidad, ética y responsabilidad",
      description: "Manteniendo los más altos estándares profesionales",
      icon: Scale,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
    },
  ];

  return (
    <section id="objetivos" className="py-20 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Objetivos</h2>
            <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full opacity-80"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
              Las metas que nos impulsan a crear soluciones tecnológicas de impacto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((obj, index) => {
              const Icon = obj.icon;
              return (
                <Card
                  key={index}
                  className="shadow-lg border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-50 dark:bg-slate-900 group overflow-hidden"
                >
                  <CardContent className="p-8 flex flex-col items-start h-full relative">
                    <div className={`absolute top-0 right-0 w-24 h-24 ${obj.bg} rounded-bl-full opacity-20 transition-transform duration-500 group-hover:scale-150`}></div>
                    <div className={`p-3 rounded-xl ${obj.bg} ${obj.color} mb-6`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {obj.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{obj.description}</p>
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
