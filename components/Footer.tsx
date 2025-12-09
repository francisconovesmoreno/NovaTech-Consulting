import React from 'react';
import { Twitter, Linkedin, Github, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nova<span className="text-primary">Tech</span></h3>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Transformando el futuro digital de las empresas con innovación, estrategia y tecnología de punta.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-600 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-primary transition-colors">Características</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {year} NovaTech Consulting. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">Privacidad</a>
            <a href="#" className="hover:text-gray-900">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};