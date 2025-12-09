import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Características', href: '#features' },
    { name: 'Contacto', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <Terminal size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900">
              Nova<span className="text-primary">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full font-medium transition-transform duration-200 hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Empezar Ahora
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none p-2 rounded-md transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-white border-b shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 max-h-96' : 'opacity-0 scale-y-0 max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
             <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full text-center bg-primary text-white px-4 py-3 rounded-lg font-bold shadow-md active:scale-95 transition-transform"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};