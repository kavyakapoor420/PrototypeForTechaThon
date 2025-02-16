import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          MyBrand
        </Link>
        {/* Menu Items */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/features" className="hover:text-gray-400">Features</Link>
          <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
          <Link to="/premium" className="hover:text-gray-400">Premium</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
          <Link to="/ai" className="hover:text-gray-400">Ai</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
