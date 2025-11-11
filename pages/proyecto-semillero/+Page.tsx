import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Code, Database, Layout, Users, Calendar, GitBranch, Server } from "lucide-react";

export default function ProyectoSemilleroPage() {
  const [selectedPhase, setSelectedPhase] = useState("actual");

  const projectInfo = {
    title: "Sistema de Gestión del Semillero de Ciencia de Datos",
    institution: "Universidad del Cauca",
    status: "En Desarrollo",
    startDate: "2024",
    technologies: ["Laravel", "React", "MySQL"],
  };

  const completedFeatures = [
    {
      name: "Sistema de Login",
      description: "Autenticación segura de usuarios con validación de credenciales",
      icon: Users,
      progress: 100,
    },
    {
      name: "Gestión de Perfiles",
      description: "Creación y edición de perfiles de usuario con información personalizada",
      icon: Layout,
      progress: 100,
    },
    {
      name: "Gestión de Usuarios y Roles",
      description: "Sistema completo de administración de usuarios con asignación de roles y permisos",
      icon: Users,
      progress: 100,
    },
    {
      name: "Publicación de Eventos",
      description: "Módulo para crear, editar y publicar eventos del semillero",
      icon: Calendar,
      progress: 100,
    },
  ];

  const inProgressFeatures = [
    {
      name: "Gestión de Proyectos",
      description: "Sistema para administrar proyectos de investigación del semillero",
      icon: GitBranch,
      progress: 40,
    },
    {
      name: "Foro de Discusión",
      description: "Espacio colaborativo para intercambio de ideas entre miembros",
      icon: Users,
      progress: 20,
    },
  ];

  const plannedFeatures = [
    {
      name: "Sistema de Notificaciones",
      description: "Alertas en tiempo real para eventos y actualizaciones importantes",
    },
    {
      name: "Repositorio de Recursos",
      description: "Biblioteca digital con materiales de estudio y recursos compartidos",
    },
    {
      name: "Dashboard Analítico",
      description: "Visualización de métricas y estadísticas del semillero",
    },
    {
      name: "Sistema de Asistencia",
      description: "Control de asistencia a reuniones y eventos",
    },
  ];

  const techStack = [
    {
      category: "Backend",
      tech: "Laravel",
      description: "Framework PHP para arquitectura monolítica robusta",
      icon: Server,
    },
    {
      category: "Frontend",
      tech: "React",
      description: "Biblioteca JavaScript para interfaces de usuario interactivas",
      icon: Code,
    },
    {
      category: "Base de Datos",
      tech: "MySQL",
      description: "Sistema de gestión de bases de datos relacional",
      icon: Database,
    },
  ];

  const architectureDetails = {
    type: "Monolítica",
    description: "Arquitectura unificada donde todos los componentes están integrados en una sola aplicación",
    benefits: [
      "Desarrollo más rápido en etapas iniciales",
      "Despliegue simplificado",
      "Debugging más sencillo",
      "Menor complejidad operacional",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header del Proyecto */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500 text-white mb-4">
              <Clock className="w-3 h-3 mr-1" />
              {projectInfo.status}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{projectInfo.title}</h1>
            <p className="text-xl text-blue-100 mb-6">Semillero de Ciencia de Datos - {projectInfo.institution}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {projectInfo.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Stack Tecnológico</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {techStack.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
                  >
                    <CardHeader>
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">
                        <span className="text-gray-600 text-sm block mb-1">{item.category}</span>
                        {item.tech}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Arquitectura */}
            <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-600" />
                  Arquitectura {architectureDetails.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{architectureDetails.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {architectureDetails.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selector de Fase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-4 mb-12">
              <Button
                variant={selectedPhase === "completado" ? "default" : "outline"}
                onClick={() => setSelectedPhase("completado")}
                className="min-w-[140px]"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Completado
              </Button>
              <Button
                variant={selectedPhase === "actual" ? "default" : "outline"}
                onClick={() => setSelectedPhase("actual")}
                className="min-w-[140px]"
              >
                <Clock className="w-4 h-4 mr-2" />
                En Desarrollo
              </Button>
              <Button
                variant={selectedPhase === "planificado" ? "default" : "outline"}
                onClick={() => setSelectedPhase("planificado")}
                className="min-w-[140px]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Planificado
              </Button>
            </div>

            {/* Funcionalidades Completadas */}
            {selectedPhase === "completado" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Funcionalidades Implementadas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {completedFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Card
                        key={index}
                        className="border-l-4 border-l-green-500 hover:shadow-xl transition-all duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-2 flex items-center gap-2">
                                {feature.name}
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              </CardTitle>
                              <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${feature.progress}%` }}
                              />
                            </div>
                            <span className="text-sm font-semibold text-green-600">{feature.progress}%</span>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Funcionalidades en Desarrollo */}
            {selectedPhase === "actual" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Actualmente en Desarrollo</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {inProgressFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Card
                        key={index}
                        className="border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-2 flex items-center gap-2">
                                {feature.name}
                                <Clock className="w-5 h-5 text-blue-600 animate-pulse" />
                              </CardTitle>
                              <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${feature.progress}%` }}
                              />
                            </div>
                            <span className="text-sm font-semibold text-blue-600">{feature.progress}%</span>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Funcionalidades Planificadas */}
            {selectedPhase === "planificado" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Próximas Funcionalidades</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {plannedFeatures.map((feature, index) => (
                    <Card
                      key={index}
                      className="border-l-4 border-l-gray-400 hover:shadow-xl transition-all duration-300"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg mb-2 flex items-center gap-2">
                          {feature.name}
                          <Badge variant="outline" className="text-xs">
                            Próximamente
                          </Badge>
                        </CardTitle>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Estadísticas del Proyecto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Progreso del Proyecto</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center border-2 hover:border-blue-400 transition-all">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">4</div>
                  <div className="text-gray-600 text-sm">Completadas</div>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-blue-400 transition-all">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-gray-600 text-sm">En Desarrollo</div>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-blue-400 transition-all">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-gray-600 mb-2">4</div>
                  <div className="text-gray-600 text-sm">Planificadas</div>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-blue-400 transition-all">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
                  <div className="text-gray-600 text-sm">Completado</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proyecto en Constante Evolución</h2>
            <p className="text-xl text-blue-100 mb-8">
              Este sistema está siendo desarrollado por el grupo V.I.E.W. en colaboración con el Semillero de Ciencia de
              Datos de la Universidad del Cauca.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-base px-4 py-2">
                Inicio: {projectInfo.startDate}
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2 bg-green-500 text-white">
                Estado: Desarrollo Activo
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
