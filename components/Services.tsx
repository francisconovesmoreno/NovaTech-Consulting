import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const ServiceCard: React.FC<{
  emoji: string;
  title: string;
  description: string;
  delay: number;
}> = ({ emoji, title, description, delay }) => (
  <ScrollReveal delay={delay} className="h-full">
    <div className="h-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-default">
      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 block w-fit">
        {emoji}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </ScrollReveal>
);

export const Services: React.FC = () => {
  const services = [
    {
      emoji: '🚀',
      title: 'Aceleración Digital',
      description: 'Llevamos tu negocio al siguiente nivel mediante estrategias digitales personalizadas, optimización de procesos y adopción de nuevas tecnologías para maximizar el ROI.'
    },
    {
      emoji: '💼',
      title: 'Consultoría SaaS',
      description: 'Desarrollamos e implementamos software como servicio escalable y seguro. Desde la arquitectura inicial hasta el despliegue final, garantizamos robustez empresarial.'
    },
    {
      emoji: '📊',
      title: 'Big Data & Analytics',
      description: 'Transformamos datos complejos en decisiones inteligentes. Implementamos dashboards interactivos y modelos predictivos para que lideres tu mercado con información real.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Nuestros Servicios</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Soluciones para la Era Digital</h3>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Combinamos innovación técnica con visión de negocio para entregar resultados excepcionales.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};