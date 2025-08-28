import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, CheckCircle, MessageCircle, Heart, RefreshCw, Handshake } from "lucide-react";

export function PoliciesSection() {
  const policies = [
    {
      title: "Confirmación de reuniones",
      description: "Toda reunión deberá ser confirmada con al menos 3 horas de anticipación a través de WhatsApp.",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Cumplimiento de responsabilidades",
      description: "Cada integrante deberá cumplir puntualmente las tareas adquiridas.",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Comunicación efectiva",
      description: "Comunicación clara, respetuosa y oportuna.",
      icon: MessageCircle,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Respeto y ética",
      description: "Actuar con integridad, respeto mutuo y responsabilidad.",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Adaptabilidad y mejora continua",
      description: "Evaluar procesos y optimizarlos.",
      icon: RefreshCw,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Trabajo colaborativo",
      description: "Cooperación activa y reconocimiento de habilidades.",
      icon: Handshake,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Políticas</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Los lineamientos que rigen nuestro comportamiento y trabajo en equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <Card
                  key={index}
                  className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 ${policy.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${policy.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900 leading-tight">{policy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{policy.description}</p>
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
