import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

export function MembersSection() {
  const members = [
    {
      name: "Miguel Ángel Calambas Vivas",
      image:
        "https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2MDk2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cvLink: "#cv-miguel",
    },
    {
      name: "Fredy Esteban Anaya Salazar",
      image:
        "https://images.unsplash.com/photo-1571164890820-6c08087e3401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc1NjA5NjA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cvLink: "#cv-fredy",
    },
    {
      name: "Duber Andres Eraso Uni",
      image:
        "https://images.unsplash.com/photo-1663535067514-66386c117b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50fGVufDF8fHx8MTc1NjA5NjA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cvLink: "#cv-duber",
    },
    {
      name: "Julián David Meneses Daza",
      image:
        "https://images.unsplash.com/photo-1627776880991-808c5996527b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTYwOTYwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cvLink: "#cv-julian",
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
