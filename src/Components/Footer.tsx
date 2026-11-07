
import { Link } from "react-router";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#1A2332] text-[#FDFBF7]">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-2xl tracking-wide">
                Casiciaco
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                Research & Academic Solutions
              </p>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-300">
              Supporting academic research through analytical
              expertise, methodological guidance, and a commitment
              to responsible scholarship.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#C7A98B]">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#services" className="transition hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/#methodology" className="transition hover:text-white">
                  Methodology
                </a>
              </li>
              <li>
                <a href="/#contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#C7A98B]">
              Get in Touch
            </h3>

            <ul className="space-y-5 text-sm text-gray-300">

              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-[#C7A98B]" />
                <span>Calamba, Laguna, Philippines</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={17} className="mt-1 shrink-0 text-[#C7A98B]" />
                <a
                  href="mailto:YOUR_EMAIL_ADDRESS"
                  className="transition hover:text-white"
                >
                  YOUR_EMAIL_ADDRESS
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={17} className="mt-1 shrink-0 text-[#C7A98B]" />
                <a
                  href="tel:YOUR_PHONE_NUMBER"
                  className="transition hover:text-white"
                >
                  YOUR_PHONE_NUMBER
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/15" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Casiciaco. All rights reserved.
          </p>

          <a
            href="#top"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
