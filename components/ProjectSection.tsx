import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Code, Database, Users, CheckCircle, Clock } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Sistema de Gestión - Semillero de Ciencia de Datos",
      institution: "Universidad del Cauca",
      description:
        "Plataforma integral para la gestión del Semillero de Ciencia de Datos, incluyendo autenticación, perfiles, roles y publicación de eventos.",
      status: "En Desarrollo",
      statusColor: "bg-blue-500",
      progress: 60,
      technologies: ["Laravel", "React", "MySQL"],
      completedFeatures: 4,
      inProgressFeatures: 2,
      link: "./proyecto-semillero",
      highlights: [
        "Sistema de Login y Autenticación",
        "Gestión de Usuarios y Roles",
        "Publicación de Eventos",
        "Gestión de Perfiles",
      ],
    },
  ];

  const scrollToSection = (href: string) => {
    // Para navegación interna
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Para navegación a otras páginas
      window.location.href = href;
    }
  };

  return (
    <section id="proyectos" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Desarrollos innovadores que transforman ideas en soluciones tecnológicas reales.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-32 -mt-32 opacity-50"></div>

                <CardHeader className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <Badge className={`${project.statusColor} text-white mb-3`}>
                        <Clock className="w-3 h-3 mr-1" />
                        {project.status}
                      </Badge>
                      <CardTitle className="text-2xl lg:text-3xl text-gray-900 mb-2">{project.title}</CardTitle>
                      <p className="text-sm text-gray-600 font-medium">{project.institution}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mt-4">{project.description}</p>
                </CardHeader>

                <CardContent className="relative">
                  {/* Estadísticas Rápidas */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-2xl font-bold text-gray-900">{project.completedFeatures}</span>
                      </div>
                      <p className="text-xs text-gray-600">Completadas</p>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">{project.inProgressFeatures}</span>
                      </div>
                      <p className="text-xs text-gray-600">En Desarrollo</p>
                    </div>

                    <div className="text-center col-span-2 sm:col-span-1">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{project.progress}%</div>
                      <p className="text-xs text-gray-600">Progreso Total</p>
                    </div>
                  </div>

                  {/* Barra de Progreso */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Progreso del Proyecto</span>
                      <span className="text-sm font-bold text-primary">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Funcionalidades Destacadas */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Funcionalidades Implementadas
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-600" />
                      Stack Tecnológico
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                      <Badge variant="outline" className="text-sm">
                        <Database className="w-3 h-3 mr-1" />
                        Arquitectura Monolítica
                      </Badge>
                    </div>
                  </div>

                  {/* Botón de Acción */}
                  <Button
                    size="lg"
                    onClick={() => scrollToSection(project.link)}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Ver Detalles del Proyecto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Información Adicional */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-gray-50 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <div className="text-center sm:text-left">
                    <p className="text-gray-900 font-semibold">
                      Proyectos desarrollados en colaboración con semilleros de investigación
                    </p>
                    <p className="text-gray-600 text-sm">
                      Aplicando metodologías ágiles y las mejores prácticas de desarrollo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
