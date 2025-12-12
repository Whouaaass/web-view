import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Crown, FileText, Users, ClipboardCheck, Globe } from "lucide-react";

export function RolesSection() {
  const roles = [
    {
      title: "Líder",
      icon: Crown,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      responsibilities: ["Coordinar y guiar al equipo", "Fomentar la participación activa", "Representar al grupo"],
    },
    {
      title: "Secretario",
      icon: FileText,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      responsibilities: [
        "Gestionar comunicación interna y externa",
        "Organizar y mantener documentos",
        "Redactar actas y coordinar agendas",
      ],
    },
    {
      title: "Moderador",
      icon: Users,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      responsibilities: [
        "Garantizar orden y efectividad en reuniones",
        "Facilitar participación",
        "Concluir reuniones cuando objetivos se cumplan",
      ],
    },
    {
      title: "Interventor del Proyecto",
      icon: ClipboardCheck,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      responsibilities: [
        "Supervisar desarrollo y cumplimiento de planes",
        "Corregir desviaciones estratégicamente",
        "Garantizar trazabilidad del proyecto",
      ],
    },
    {
      title: "Web Master",
      icon: Globe,
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      responsibilities: [
        "Diseñar y mantener plataformas digitales",
        "Optimizar interfaz web",
        "Asegurar seguridad y actualización tecnológica",
      ],
    },
  ];

  return (
    <section id="roles" className="py-16 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Roles y Responsabilidades</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              La estructura organizativa que garantiza el éxito de nuestros proyectos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card
                  key={index}
                  className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-900"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${role.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${role.color}`} />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{role.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {role.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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
