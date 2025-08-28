import { Card, CardContent } from "./ui/card";

export function IntroSection() {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nosotros</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  En <strong className="text-primary">V.I.E.W. (Virtual Innovation for Engineering and Web)</strong>{" "}
                  somos un grupo de estudiantes de la Facultad de Ingeniería Electrónica y Telecomunicaciones de la
                  Universidad del Cauca, unidos por la pasión de crear soluciones tecnológicas innovadoras que integren
                  la ingeniería y el desarrollo web.
                </p>

                <p className="mb-6">
                  Nuestro equipo se inspira en valores como la innovación,{" "}
                  <strong className="text-primary">innovación</strong>,
                  <strong className="text-primary"> calidad</strong>,{" "}
                  <strong className="text-primary">colaboración</strong> y
                  <strong className="text-primary"> responsabilidad</strong>, los cuales guían cada uno de nuestros
                  proyectos.
                </p>

                <p className="mb-0">
                  Más que un grupo, somos una comunidad de aprendizaje y crecimiento, donde fortalecemos nuestras
                  competencias técnicas y profesionales, al mismo tiempo que buscamos generar un impacto positivo en las
                  organizaciones y comunidades con las que trabajamos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
