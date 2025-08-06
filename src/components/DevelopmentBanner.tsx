import { Badge } from "@/components/ui/badge";

const DevelopmentBanner = () => {
  return (
    <div className="bg-blue-100 py-3 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <Badge 
            variant="outline" 
            className="bg-blue-50 text-blue-900 border-blue-200 hover-scale transition-all duration-300"
          >
            Website Under Development - Coming Soon!
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentBanner;