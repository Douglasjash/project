import React from 'react';
import { CheckCircle } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';

const Solutions = () => {
  return (
    <section className="py-20 bg-white" id="solucoes">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Soluções em QA e Automação que posso entregar para você
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Transforme a qualidade do seu software com soluções personalizadas e resultados mensuráveis
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border-2 border-t-purple-100 border-b-purple-400 border-l-purple-200 border-r-purple-200 hover:border-t-purple-200 hover:border-b-purple-500 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                  {solution.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-700 mb-2">
                    Tecnologias utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-green-700 mb-2">
                    Benefícios:
                  </h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Pronto para elevar a qualidade do seu software?
            </p>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Vamos conversar sobre seu projeto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;