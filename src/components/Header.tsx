import React, { useState } from 'react';
import { Phone, Mail, Github, ChevronDown, X } from 'lucide-react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-purple-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-purple-200 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Photo Placeholder */}
          <div 
            className="w-32 h-32 rounded-full mb-6 shadow-2xl overflow-hidden border-4 border-purple-400 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-3xl hover:border-purple-300 group"
            onClick={openModal}
          >
            <img 
              src="/FOTO MINHA.png" 
              alt="Douglas Santos" 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-full flex items-center justify-center">
              <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Clique para ampliar
              </span>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 rounded-text">
            Douglas Santos
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-purple-200 mb-6 mt-4">
            Quality Assurance | Especialista em Testes Manuais e Automatizados
          </h2>

          {/* Headline */}
          <p className="text-xl md:text-2xl font-medium mb-4 text-gray-100">
            "Garantindo qualidade e confiança em cada entrega de software."
          </p>
          
          {/* Subheadline */}
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Profissional de QA com experiência em testes manuais e automatizados para aplicações desktop e web, 
            aliado a visão completa do ciclo de vida do software.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Phone size={16} />
              <span>(65) 99646-7662</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mail size={16} />
              <span>douglas.si.sa@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Github size={16} />
              <span>github.com/Douglasjash</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
             onClick={() => scrollToSection('solucoes')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
             Veja minhas soluções
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="border-2 border-purple-400 hover:bg-purple-400 hover:text-gray-900 text-purple-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Entre em contato
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </div>
      </header>

      {/* Modal for full-size photo */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-[33vw] max-h-[33vh] w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src="/FOTO MINHA.png"
              alt="Douglas Santos - Foto completa"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;