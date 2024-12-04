import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-200 text-black py-4 px-8 flex justify-between items-center">
      <div className="text-xl font-bold">Keep Notes</div>
      <nav className="space-x-6">
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/notes" className="hover:underline">
          Notes
        </Link>
        <Link to="/account" className="hover:underline">
          Account
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
