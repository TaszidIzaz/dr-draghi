import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
const LocationsSection = () => {
  const locations = [{
    name: "St Vincent's Private Hospital",
    suite: "Suite 1005, Level 10",
    address: "438 Victoria Street, Darlinghurst NSW 2010",
    providerNo: "470487NB",
    url: "https://www.svph.org.au/specialists/dr-santiago-draghi"
  }, {
    name: "Norwest Private Hospital",
    suite: "Suite 105, Level 1",
    address: "9 Norbrik Drive, Bella Vista NSW 2153",
    providerNo: "470487PL",
    url: "https://specialists.healthscope.com.au/specialist/dr-santiago-draghi"
  }, {
    name: "St Luke's Private Hospital",
    suite: "",
    address: "18 Roslyn St, Potts Point NSW 2011",
    email: "enquiries@slc.org.au",
    phone: "(02) 9356 0200",
    url: "https://www.slc.org.au/doctor/dr-santiago-draghi/"
  }, {
    name: "Hearing Implants Australia",
    suite: "Suite 1002B, Level 10",
    address: "438 Victoria Street, Darlinghurst NSW 2010",
    url: "https://www.hearingimplantsaustralia.com.au/hia-professional-network/"
  }, {
    name: "NeuroAudiology",
    suite: "Level 1, Suite 105",
    address: "9 Norbrik Dr, Bella Vista NSW 2153",
    url: "https://www.neuroaudiology.com.au/ents/"
  }];
  return <section className="py-20 bg-medical-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl text-medical-navy font-medical mb-4 tracking-tight font-medium">
            Practice Locations
          </h2>
          <p className="text-medical-steel max-w-2xl mx-auto font-normal text-xl">
            Providing comprehensive ENT care across multiple Sydney locations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {locations.map((location, index) => {
          const getLocationLogo = () => {
            if (location.name.includes("St Vincent's")) {
              return "/lovable-uploads/a8e6ee11-6784-412d-ba46-f9521a4d1bff.png";
            } else if (location.name.includes("Norwest")) {
              return "/lovable-uploads/5ebc690e-8eda-47ed-8748-a9e0e2bb9d0e.png";
            } else if (location.name.includes("St Luke's")) {
              return "/lovable-uploads/cf681069-6640-4f4d-aacb-c516964e6f8e.png";
            } else if (location.name.includes("Hearing Implants")) {
              return "/lovable-uploads/b21f1a6a-5f4c-41c6-80e4-da0426687948.png";
            } else if (location.name.includes("NeuroAudiology")) {
              return "/lovable-uploads/05651b6d-ec4c-4f2f-a283-363d121fc487.png";
            }
            return null;
          };
          return <Card key={index} className="card-shadow border-medical-navy/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-medical-navy text-white backdrop-blur-sm" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-8 text-center">
                  {/* Logo centered at top */}
                  <div className="flex justify-center mb-6">
                    {getLocationLogo() ? <div className="bg-white/10 p-4 rounded-xl hover-scale">
                        <img src={getLocationLogo()} alt={`${location.name} Logo`} className="h-16 w-auto object-contain" />
                      </div> : <div className="bg-white/10 p-4 rounded-xl">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>}
                  </div>
                  
                  {/* Details centered below */}
                  <div className="space-y-3 mb-6">
                    <h3 className="font-semibold text-white font-medical text-lg">
                      {location.name}
                    </h3>
                    {location.suite && <p className="text-white/80 font-medium">{location.suite}</p>}
                    {location.address && <p className="text-white/80 leading-relaxed font-normal">{location.address}</p>}
                    {location.email && <p className="text-white/70 text-sm">{location.email}</p>}
                    {location.phone && <p className="text-white/70 text-sm">{location.phone}</p>}
                    {location.providerNo && <p className="text-xs text-white/60">
                        Provider No: {location.providerNo}
                      </p>}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full hover-scale bg-white text-medical-navy hover:bg-white/90 hover:text-medical-navy border-white font-medium" onClick={() => window.open(location.url, '_blank')}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default LocationsSection;