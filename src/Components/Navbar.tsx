import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/#services" },
    { label: "Methodology", to: "/#methodology" },
    { label: "Research Tools", to: "/#tools" },
    { label: "Contact Us", to: "/#contact" },
    { label: "Location", to: "/#location" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#FDFBF7]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">

        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0 font-serif text-xl tracking-wide text-[#1A2332]"
        >
          Casiciaco
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="whitespace-nowrap text-sm text-stone-600 transition-colors hover:text-[#7A1C1C]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center p-2 text-[#1A2332] lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-stone-200 bg-[#FDFBF7] px-5 py-5 lg:hidden sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className="border-b border-stone-200 py-3 text-sm text-stone-700 transition-colors hover:text-[#7A1C1C]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;