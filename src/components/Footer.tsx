import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-medical-navy text-primary-foreground py-16 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-medical-navy via-medical-navy/95 to-medical-navy"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-2xl font-medical mb-8 text-white tracking-tight font-normal">
            Professional Memberships
          </h3>
          <div className="flex justify-center items-center gap-12">
            <Button variant="ghost" className="text-medical-navy hover:bg-white/90 p-6 h-24 rounded-xl hover-scale transition-all duration-300 bg-white shadow-lg" onClick={() => window.open('https://www.surgeons.org/Profile/dr-santiago-draghi', '_blank')}>
              <div className="flex items-center gap-4">
                <div className="bg-medical-navy/10 p-3 rounded-lg">
                  <img src="/lovable-uploads/06a09d4f-ff0d-4547-a913-bc5ddf8c8920.png" alt="RACS Logo" className="h-12 w-auto object-contain" />
                </div>
                <div className="text-left hidden md:block">
                  <div className="text-sm font-semibold text-medical-navy">RACS</div>
                  <div className="text-xs text-medical-navy/70 font-light">Royal Australasian College of Surgeons</div>
                </div>
              </div>
            </Button>
            
            <Button variant="ghost" className="text-medical-navy hover:bg-white/90 p-6 h-24 rounded-xl hover-scale transition-all duration-300 bg-white shadow-lg" onClick={() => window.open('https://www.asohns.org.au', '_blank')}>
              <div className="flex items-center gap-4">
                <div className="bg-medical-navy/10 p-3 rounded-lg">
                  <img src="/lovable-uploads/5a5895fc-d0d6-47a3-a68a-b8e50ad1629f.png" alt="ASOHNS Logo" className="h-12 w-auto object-contain" />
                </div>
                <div className="text-left hidden md:block">
                  <div className="text-sm font-semibold text-medical-navy">ASOHNS</div>
                  <div className="text-xs text-medical-navy/70 font-light">Australian Society of Otolaryngology</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center animate-fade-in" style={{
        animationDelay: '0.2s'
      }}>
          <p className="text-sm opacity-90 font-medical text-white mb-2 font-medium">© 2025 Dr Santiago Draghi. All rights reserved.</p>
          <p className="text-xs opacity-70 font-medical">
            Website currently under development
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;