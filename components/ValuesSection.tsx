import { Card, CardContent } from "./ui/card";
import { Lightbulb, Award, Users, Palette, HandHeart, Zap, Shield } from "lucide-react";

export function ValuesSection() {
  const values = [
    { name: "Innovación continua", icon: Lightbulb, color: "text-gray-700" },
    { name: "Calidad y excelencia", icon: Award, color: "text-gray-600" },
    { name: "Orientación al cliente", icon: HandHeart, color: "text-gray-800" },
    { name: "Creatividad", icon: Palette, color: "text-gray-500" },
    { name: "Colaboración", icon: Users, color: "text-gray-700" },
    { name: "Adaptabilidad", icon: Zap, color: "text-gray-600" },
    { name: "Integridad", icon: Shield, color: "text-gray-800" },
  ];

  return (
    <section id="valores" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Los principios fundamentales que guían nuestro trabajo y definen nuestra cultura organizacional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Icon className={`w-8 h-8 ${value.color}`} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-center leading-tight">{value.name}</h3>
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
