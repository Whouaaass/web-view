import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

export function MembersSection() {
  const members = [
    {
      name: "Miguel Ángel Calambas Vivas",
      image: "/web-view/miembros/miguel.jpg",
      cvLink: "https://drive.google.com/file/d/1NuYAnijju1uBjuEstWrKkoOiaIFuZ-oa/view",
    },
    {
      name: "Fredy Esteban Anaya Salazar",
      image: "/web-view/miembros/fredy.jpg",
      cvLink: "#",
    },
    {
      name: "Duber Andres Eraso Uni",
      image: "/web-view/miembros/duber.JPEG",
      cvLink: "https://drive.google.com/file/d/1V8EddQzmw9oZgZ57mYb6FXZH39S9HFVe/view",
    },
    {
      name: "Julián David Meneses Daza",
      image: "/web-view/miembros/julian.jpg",
      cvLink: "https://drive.google.com/file/d/1YCYFvYCHRxy4SJ8mGB7uQrNDBOh8Yf5V/view",
    },
  ];

  return (
    <section id="equipo" className="py-16 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestro Equipo</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Conoce a los integrantes del grupo V.I.E.W. y sus hojas de vida.
            </p>
          </div>

          <div className="grid justify-center gap-6 [grid-template-columns:repeat(auto-fit,minmax(240px,max-content))]">
            {members.map((member, index) => (
              <Card
                key={index}
                className="w-full max-w-xs mx-auto shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-950"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
                      <ImageWithFallback src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm leading-tight">{member.name}</h3>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700"
                    onClick={() => window.open(member.cvLink, "_blank")}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Ver CV
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
