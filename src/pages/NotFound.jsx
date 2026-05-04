import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center">
        <h1 className="mb-2 text-5xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* React Router friendly navigation */}
        <Link
          to="/"
          className="inline-block rounded-md bg-primary px-6 py-2 text-primary-foreground font-medium hover:bg-primary/90 transition"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
