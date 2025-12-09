import React from 'react';
import { ShieldCheck, Zap, Globe, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Seguridad Integral',
    description: 'Protocolos de encriptación de grado militar y auditorías continuas para proteger tus activos más valiosos.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Alto Rendimiento',
    description: 'Arquitecturas optimizadas para velocidad, reduciendo tiempos de carga y mejorando la experiencia de usuario.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Escala Global',
    description: 'Infraestructura distribuida diseñada para soportar crecimiento exponencial sin interrupciones de servicio.'
  },
  {
    icon: <Users size={32} />,
    title: 'Diseño Centrado',
    description: 'Interfaces intuitivas y accesibles que priorizan la usabilidad y satisfacción del usuario final.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir <span className="text-primary">NovaTech</span>?
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="flex flex-col items-start group">
                <div className="p-3 bg-blue-50 text-primary rounded-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};