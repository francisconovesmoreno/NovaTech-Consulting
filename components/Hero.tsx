import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl mix-blend-overlay animate-pulse"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-purple-400 blur-3xl mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Impulsamos tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">Transformación Digital</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100 mb-10">
            Ayudamos a empresas líderes a escalar sus operaciones con soluciones tecnológicas de vanguardia, diseño estratégico y desarrollo SaaS a medida.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              Comienza tu proyecto
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            >
              Explorar servicios
            </a>
          </div>
        </ScrollReveal>

        {/* Stats Strip */}
        <ScrollReveal delay={600}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-blue-200 uppercase tracking-wider">Clientes Felices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-blue-200 uppercase tracking-wider">Retención</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-blue-200 uppercase tracking-wider">Soporte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10A</div>
              <div className="text-sm text-blue-200 uppercase tracking-wider">Experiencia</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};