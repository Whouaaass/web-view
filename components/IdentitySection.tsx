import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Eye, Glasses, Lightbulb, Network } from "lucide-react";

export function IdentitySection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Identidad del Grupo</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
          </div>

          {/* Logo y Nombre */}
          <Card className="mb-8 shadow-lg border-0">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6 mt-6">
                <img src="./assets/logo-name-slogan.svg" className="max-w-xs"></img>
              </div>
              <div className="border-b-2 mx-24 my-12" />
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="secondary" className="text-gray-700">
                  <Glasses className="w-3 h-3 mr-1" />
                  Vista de innovación continua
                </Badge>
                <Badge variant="secondary" className="text-gray-600">
                  <Lightbulb className="w-3 h-3 mr-1" />
                  Ideas e innovación
                </Badge>
                <Badge variant="secondary" className="text-gray-500 ">
                  <Network className="w-3 h-3 mr-1" />
                  Sistemas e interconexión
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Visión y Misión */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Eye className="w-6 h-6 mr-2" />
                  Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconocidos como líderes en innovación tecnológica, ofreciendo soluciones de software de
                  ingeniería y web que marquen estándares de calidad y transformen la forma en que las personas y las
                  empresas interactúan con el mundo digital.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2" />
                  Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Desarrollar soluciones de software innovadoras que integren ingeniería y web para impulsar la
                  eficiencia y la conectividad de nuestros clientes. Nos enfocamos en la calidad, la creatividad y la
                  adaptación tecnológica para transformar sus procesos y experiencias digitales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
