import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-medium transition-colors md:border-b md:border-primary md:pb-1"
      : "text-text-secondary hover:text-primary transition-colors md:pb-1";

  const mobileLinkClass = ({ isActive }) =>
    `text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-secondary'}`;

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/journey", label: "Journey" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 border-b border-border-light transition-colors duration-300 ${isOpen ? 'bg-cream' : 'bg-bg-base/90 backdrop-blur-md'}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-display text-lg text-text-primary tracking-tight font-medium hover:text-primary transition-colors group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-border-light group-hover:border-primary transition-colors">
            <img 
              src="/my_image.png" 
              alt="Rohit Pant" 
              className="w-full h-full object-cover"
            />
          </div>
          Rohit Pant
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} className={linkClass}>{link.label}</NavLink>
          ))}
          <NavLink to="/contact" className="px-5 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-all text-xs tracking-wide uppercase font-medium">
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`md:hidden fixed inset-0 top-16 bg-cream z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center pt-20 gap-10">
          {navLinks.map(link => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink 
            to="/contact" 
            className="px-10 py-4 bg-primary text-white rounded-full text-lg font-medium shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </nav>
  );
}