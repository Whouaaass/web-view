import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

interface ScheduleItem {
  day: string;
  /** @example 7:00 - 9:00 */
  time: string;
  activity: string;
  location: string;
  /** @example presencial | virtual */
  type: "presencial" | "virtual";
}

export function ScheduleSection() {
  const schedule: ScheduleItem[] = [];
  const googleMeetLink = "";

  const handleJoinMeeting = () => {
    window.open(`https://${googleMeetLink}`, "_blank");
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Horario de Trabajo</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            <p className="text-lg text-gray-600 mt-4">Nuestros encuentros semanales para el desarrollo de proyectos.</p>
          </div>

          <Card className="shadow-lg border-0 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Cronograma Semanal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Día</TableHead>
                      <TableHead className="font-semibold">Horario</TableHead>
                      <TableHead className="font-semibold">Actividad</TableHead>
                      <TableHead className="font-semibold">Ubicación</TableHead>
                      <TableHead className="font-semibold">Modalidad</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schedule.map((item, index) => (
                      <TableRow key={index} className="hover:bg-blue-50">
                        <TableCell className="font-medium">{item.day}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-blue-500" />
                            {item.time}
                          </div>
                        </TableCell>
                        <TableCell>{item.activity}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {item.type === "virtual" ? (
                              <Video className="w-4 h-4 text-green-500" />
                            ) : (
                              <MapPin className="w-4 h-4 text-red-500" />
                            )}
                            {item.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.type === "virtual" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {item.type === "virtual" ? "Virtual" : "Presencial"}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Virtual Meeting Button */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-blue-50">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <Video className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reunión Virtual Semanal</h3>
                <p className="text-gray-600">Únete a nosotros cada viernes de 7:00 - 9:00 PM</p>
              </div>

              <Button
                size="lg"
                onClick={handleJoinMeeting}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Video className="w-5 h-5 mr-2" />
                Ingresar a la sala virtual
              </Button>

              <p className="text-xs text-gray-500 mt-3">{googleMeetLink}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
