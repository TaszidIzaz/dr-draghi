import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navigationItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "#"
  }, {
    name: "For Patients",
    href: "#"
  }, {
    name: "For Referrers",
    href: "#"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  return <header className="sticky top-0 z-50 transition-all duration-300" style={{
    backgroundImage: 'url(/lovable-uploads/69d150be-c0f2-49ce-b928-4030d197e49a.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="hover-scale transition-transform duration-300">
                <img src="/lovable-uploads/draghi-logo.png" alt="Dr Santiago Draghi Logo" className="h-16 w-auto" />
              </div>
              <div className="block">
                <h1 className="text-lg sm:text-xl font-semibold font-medical tracking-tight text-white">
                  Dr Santiago Draghi
                </h1>
                <p className="text-xs sm:text-sm font-medical font-normal text-white">Paediatric and Adult ENT Surgeon</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                   {navigationItems.slice(0, -1).map((item, index) => <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild>
                        <Link to={item.href} className="bg-transparent text-white hover:bg-white/20 hover:text-white px-4 py-2 rounded-md transition-colors duration-200" style={{
                      animationDelay: `${0.3 + index * 0.05}s`
                    }}>
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>)}
                   <NavigationMenuItem>
                    <Button variant="default" className="bg-medical-navy text-white hover:bg-medical-navy/90 transition-all duration-300" style={{
                    animationDelay: `${0.3 + (navigationItems.length - 1) * 0.05}s`
                  }} onClick={() => navigate('/contact')}>
                      Contact
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white">
                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-medical-navy">Navigation</h2>
                    </div>
                    {navigationItems.slice(0, -1).map(item => <Link key={item.name} to={item.href} className="text-medical-navy hover:text-medical-navy/80 py-2 px-4 rounded-lg hover:bg-medical-navy/5 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                        {item.name}
                      </Link>)}
                    <Button className="bg-medical-navy text-white hover:bg-medical-navy/90 mt-4" onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate('/contact');
                    }}>
                      Contact
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;