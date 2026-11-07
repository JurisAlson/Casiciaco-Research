
import { Link } from "react-router";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#1A2332] text-[#FDFBF7]">
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12 lg:px-12 lg:py-16">

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-xl tracking-wide sm:text-2xl">
                Casiciaco
              </h2>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-400 sm:text-xs">
                Research & Academic Solutions
              </p>
            </Link>

            <p className="mt-3 max-w-md text-xs leading-6 text-gray-300 sm:mt-5 sm:text-sm sm:leading-7">
              Supporting academic research through analytical
              expertise, methodological guidance, and a commitment
              to responsible scholarship.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C7A98B] sm:mb-5">
              Explore
            </h3>

            <ul className="space-y-2.5 text-xs text-gray-300 sm:space-y-3 sm:text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/#services" className="hover:text-white">Services</Link></li>
              <li><Link to="/#tools" className="hover:text-white">Research Tools</Link></li>
              <li><Link to="/#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C7A98B] sm:mb-5">
              Get in Touch
            </h3>

            <ul className="space-y-3 text-xs text-gray-300 sm:space-y-4 sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#C7A98B]" />
                <span>Calamba, Laguna, Philippines</span>
              </li>

              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-0.5 shrink-0 text-[#C7A98B]" />
                <a href="mailto:YOUR_EMAIL_ADDRESS" className="break-all hover:text-white">
                  YOUR_EMAIL_ADDRESS
                </a>
              </li>

              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#C7A98B]" />
                <a href="tel:YOUR_PHONE_NUMBER" className="break-all hover:text-white">
                  YOUR_PHONE_NUMBER
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="my-7 border-t border-white/15 sm:my-10 lg:my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-3 text-[10px] text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>
            © {new Date().getFullYear()} Casiciaco. All rights reserved.
          </p>

          <a
            href="#home"
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
