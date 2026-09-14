import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-blue-500">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4">Page Not Found</h1>
        <p className="text-gray-400 mt-3">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
