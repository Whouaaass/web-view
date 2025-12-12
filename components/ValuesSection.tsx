import { Card, CardContent } from "./ui/card";
import { Lightbulb, Award, Users, Palette, HandHeart, Zap, Shield } from "lucide-react";

export function ValuesSection() {
  const values = [
    { name: "Innovación continua", icon: Lightbulb, color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
    { name: "Calidad y excelencia", icon: Award, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "Orientación al cliente", icon: HandHeart, color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-900/20" },
    { name: "Creatividad", icon: Palette, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/20" },
    { name: "Colaboración", icon: Users, color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" },
    { name: "Adaptabilidad", icon: Zap, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { name: "Integridad", icon: Shield, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
  ];

  return (
    <section id="valores" className="py-20 lg:py-32 bg-gray-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Nuestros Valores</h2>
            <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full opacity-80"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
              Los principios fundamentales que guían nuestro trabajo y definen nuestra cultura organizacional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="shadow-md border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-800 group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className={`w-20 h-20 ${value.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-10 h-10 ${value.color}`} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-center text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{value.name}</h3>
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
