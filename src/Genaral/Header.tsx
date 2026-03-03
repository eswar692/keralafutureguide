import { MenuIcon, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { company_name, phone_number, whatsapp_number } from "./secrete";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 border-b border-white/10">
      <div className="w-full md:w-[90%] mx-auto">
        <Logo />
      </div>
    </header>
  );
};

export default Header;

/* ================= LOGO SECTION ================= */

const Logo = () => (
  <div className="w-full px-4 py-4 md:px-10 md:py-6">
    <div className="flex items-center justify-between">
      {/* Logo + Info */}
      <div className="flex items-start gap-4 md:gap-6">
        {/* Logo Image */}
        <div
          className="w-14 h-14 md:w-20 md:h-20 rounded-2xl overflow-hidden 
          border border-yellow-400 shadow-lg"
        >
          <img
            src="https://i.pinimg.com/1200x/28/9c/2e/289c2e010fbf9b1e4cba8bab99aa9ed1.jpg"
            alt="Company Logo"
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h1
            className="montserrat font-extrabold text-xl md:text-3xl 
            text-white tracking-wide"
          >
            {company_name}
          </h1>

          <p className="text-xs md:text-sm text-yellow-300 italic">
            Trusted Guidance Services
          </p>

          <p className="text-xs md:text-sm text-gray-300 mt-2 leading-relaxed max-w-[360px]">
            No. 34, 7th Cross, Vijay Nagar
            <br />
            Bilekahalli, Bengaluru – 560076
            <br />
            Karnataka, India
            <br />
            <span className="text-yellow-400 font-semibold">
              📞 {phone_number}
            </span>
          </p>
        </div>
      </div>

      {/* Menu */}
      <Menu />
    </div>
  </div>
);

/* ================= MENU ================= */

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 font-medium text-gray-100 montserrat text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 border rounded bg-orange-500 transition duration-300"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className="w-6 h-6 text-white" strokeWidth={2} />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

/* ================= NAV LINK ================= */

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link to={to} className="relative group cursor-pointer">
    <span className="transition-colors duration-300 group-hover:text-yellow-400">
      {children}
    </span>
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

/* ================= MOBILE MENU ================= */

const MobileMenu = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <div
      className="fixed inset-0 z-[9999]
      bg-gradient-to-b from-black via-purple-950 to-indigo-950
      px-6 py-8 flex flex-col"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          {company_name}
        </h1>

        <button
          onClick={() => setOpen(false)}
          className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition"
        >
          <X className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-5 mt-8 text-white text-lg font-semibold">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className="py-3 px-4 rounded-xl hover:bg-white/10 hover:text-yellow-400 transition"
          >
            {item.name}
          </Link>
        ))}
      </ul>

      {/* CTA Section */}
      <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
        {/* Call Button */}
        <a
          href={`tel:${phone_number}`}
          className="flex items-center justify-center gap-2 w-full
          bg-yellow-400 text-black py-3 rounded-full font-bold
          hover:bg-yellow-500 transition"
        >
          <Phone size={18} />
          Contact Us
        </a>

        {/* WhatsApp Button (Safe Prefilled Message) */}
        <a
          href={`https://wa.me/${whatsapp_number}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full
          bg-green-500 text-white py-3 rounded-full font-bold
          hover:bg-green-600 transition"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
};
