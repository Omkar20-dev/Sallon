import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero pt-20">
      <div className="text-center px-4 animate-fade-in">
        <h1 className="text-9xl font-display font-bold gradient-text mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Button asChild variant="luxury" size="lg">
          <Link to="/">
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
