import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <header className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <NavLink to="/" className="text-2xl font-bold text-white">
            GrowthLift
          </NavLink>

          <div className="flex flex-wrap justify-center gap-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
