import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="bg-gradient-to-br from-slate-50 to-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-medical-navy font-medical mb-6 tracking-tight leading-tight font-bold">
                Dr Santiago Draghi
              </h1>
              <p className="text-xl text-medical-steel mb-6 tracking-wide font-normal md:text-lg">M.B.B.S., F.R.A.C.S (OHNS), O.R.L (U.B.A)</p>
            </div>
            
            <div className="max-w-2xl">
              <p className="text-lg font-normal leading-relaxed text-medical-steel md:text-xl">
                Specialized in Paediatric and Adult Ear, Nose and Throat & Head and Neck Surgery and 
                Otology, Neurotology and Hearing Implants Surgery
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3 bg-medical-navy/5 py-4 rounded-xl hover-scale transition-all duration-300 my-0 mx-0 px-[14px]">
                <Phone className="h-5 w-5 text-medical-navy" />
                <div className="text-left">
                  <p className="text-sm text-medical-steel font-medium">All appointments</p>
                  <p className="font-semibold text-medical-navy text-base">02 8382 6080 / 02 8382 6085</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-medical-navy/5 py-4 rounded-xl hover-scale transition-all duration-300 px-[16px]">
                <Mail className="h-5 w-5 text-medical-navy" />
                <div className="text-left">
                  <p className="text-sm text-medical-steel font-medium">Email</p>
                  <p className="font-semibold text-medical-navy">drsantiagodraghi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative">
              <img src="/lovable-uploads/05cbfb64-2492-4ed8-9ec4-978b142e5e43.png" alt="Dr Santiago Draghi" className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-2xl shadow-2xl animate-scale-in" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-medical-navy/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;