import { Card, CardContent } from "./ui/card";

export function IntroSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-white dark:bg-slate-950 relative transition-colors duration-500">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50 dark:opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Nosotros</h2>
            <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full opacity-80"></div>
          </div>

          <Card className="shadow-2xl border-0 bg-white dark:bg-slate-900 overflow-hidden ring-1 ring-gray-100 dark:ring-slate-800">
            <CardContent className="p-10 lg:p-16">
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 leading-loose text-justify">
                <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 dark:first-letter:text-blue-400 first-letter:mr-1 first-letter:float-left first-letter:-mt-[1.15rem] first-letter:leading-none">
                  En <strong className="text-gray-900 dark:text-white font-semibold">V.I.E.W. (Virtual Innovation for Engineering and Web)</strong>{" "}
                  somos un grupo de estudiantes de la Facultad de Ingeniería Electrónica y Telecomunicaciones de la
                  Universidad del Cauca, unidos por la pasión de crear soluciones tecnológicas innovadoras que integren
                  la ingeniería y el desarrollo web.
                </p>

                <p className="mb-8">
                  Nuestro equipo se inspira en valores como la <strong className="text-blue-600 dark:text-blue-400">innovación</strong>,
                  <strong className="text-indigo-600 dark:text-indigo-400"> calidad</strong>,{" "}
                  <strong className="text-purple-600 dark:text-purple-400">colaboración</strong> y
                  <strong className="text-pink-600 dark:text-pink-400"> responsabilidad</strong>, los cuales guían cada uno de nuestros
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
