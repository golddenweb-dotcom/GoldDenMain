import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-6xl font-bold text-brown-dark mb-4">404</h1>
        <p className="font-serif text-2xl font-bold text-cobalt mb-8">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-cobalt text-white px-8 py-3 font-semibold hover:bg-cobalt-dark transition-colors"
        >
          Return Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
