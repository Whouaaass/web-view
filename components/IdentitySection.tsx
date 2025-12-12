import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Eye, Glasses, Lightbulb, Network, MapPin } from "lucide-react";
import Logo from "../assets/logo-name-slogan.svg";

export function IdentitySection() {
  return (
    <section id="identidad" className="py-20 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-blue-950/20 dark:via-slate-950 dark:to-slate-950 opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Identidad del Grupo</h2>
            <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full opacity-80"></div>
          </div>

          {/* Logo y Nombre */}
          <Card className="mb-12 shadow-xl border-0 overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm ring-1 ring-gray-100 dark:ring-slate-800">
            <CardContent className="p-10 lg:p-14 text-center">
              <div className="flex justify-center mb-10 mt-4 transform hover:scale-105 transition-transform duration-500">
                <div className="rounded-3xl ring-4 ring-white/80 dark:ring-white/60 bg-white/40 dark:bg-white/10 backdrop-blur-sm p-4 shadow-lg">
                  <img src={Logo} className="max-w-xs drop-shadow-lg dark:brightness-125" alt="Logo VIEW"></img>
                </div>
              </div>
              <div className="border-b border-gray-100 dark:border-slate-800 mx-auto max-w-2xl my-10" />
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                  <Glasses className="w-4 h-4 mr-2" />
                  Vista de innovación continua
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Ideas e innovación
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">
                  <Network className="w-4 h-4 mr-2" />
                  Sistemas e interconexión
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Visión y Misión */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-blue-950/30 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-blue-700 dark:text-blue-400 flex items-center font-serif">
                  <Eye className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                  Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Ser reconocidos como líderes en innovación tecnológica, ofreciendo soluciones de software de ingeniería y web que marquen estándares de calidad y transformen la forma en que las personas y las empresas interactúan con el mundo digital.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-indigo-50/50 dark:from-slate-900 dark:to-indigo-950/30 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-indigo-700 dark:text-indigo-400 flex items-center font-serif">
                  <MapPin className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
                  Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Desarrollar soluciones de software innovadoras que integren ingeniería y web para impulsar la eficiencia y la conectividad de nuestros clientes. Nos enfocamos en la calidad, la creatividad y la adaptación tecnológica para transformar sus procesos y experiencias digitales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
