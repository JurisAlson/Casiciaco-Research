import { Link } from "react-router";

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between px-8 py-5">

        {/* Brand */}
        <Link to="/" className="font-serif text-xl">
          Casiciaco
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>

          <a href="/#services">Services</a>
          <a href="/#methodology">Methodology</a>
          <a href="/#tools">Tools</a>
          <a href="/#contact">Contact</a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;