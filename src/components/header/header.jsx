import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center">

      {/* Logo */}
      <h1 className="text-2xl font-bold mb-2 md:mb-0">
        MyPortfolio
      </h1>

      {/* Links */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  );
};

export default Header;