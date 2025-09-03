import React from 'react';
import { Search, Settings, TrendingUp } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Search size={24} />,
      title: "Automação de Testes",
      description: "Implementação de frameworks robustos para testes automatizados"
    },
    {
      icon: <Settings size={24} />,
      title: "Testes Funcionais e Validação",
      description: "Verificação minuciosa de regras de negócio e funcionalidades"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Melhoria Contínua",
      description: "Otimização constante dos processos de qualidade"
    }
  ];

  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Sobre Mim
          </h2>
          
          <div className="text-lg text-gray-700 leading-relaxed mb-12 space-y-6">
            <p>
              Profissional de <strong className="text-purple-600">Quality Assurance (QA)</strong> com experiência 
              em testes manuais e automatizados para aplicações desktop e web (Experiência maior em testes de 
              aplicações Delphi).
            </p>
            <p>
              Atuação em gestão de processos de testes, criação e manutenção de cenários de validação de regras 
              de negócio e reporte de defeitos.
            </p>
            <p>
              Experiência complementar em implantação de sistemas e suporte técnico, proporcionando visão ampla 
              do ciclo de vida do software.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Pilares da minha atuação
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-t-purple-100 border-b-purple-400 border-l-purple-200 border-r-purple-200 hover:border-t-purple-200 hover:border-b-purple-500"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {pillar.title}
                </h4>
                <p className="text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;