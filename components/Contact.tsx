import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Formato de email inválido.';
    }

    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulation of API call
      setTimeout(() => {
        console.log('Formulario enviado:', formData);
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-600 opacity-10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hablemos de tu Proyecto</h2>
            <p className="text-gray-400 text-lg">
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
            {isSuccess ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-300">Gracias por contactarnos. Te responderemos pronto.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-primary hover:text-white transition-colors underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                      placeholder="Juan Pérez"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                      placeholder="juan@empresa.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none`}
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg flex justify-center items-center gap-2 transition-all duration-300 transform hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};