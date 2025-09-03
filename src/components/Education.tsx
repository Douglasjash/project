import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      icon: <GraduationCap size={24} />,
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Estácio de Sá (UNESA)",
      period: "Cursando",
      status: "current"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="formacao">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Formação Acadêmica
          </h2>
          
          <div className="space-y-6">
            {education.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4 border-2 border-t-purple-100 border-b-purple-400 border-l-purple-200 border-r-purple-200 hover:border-t-purple-200 hover:border-b-purple-500"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                  {item.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-lg text-gray-700 mb-1">
                    {item.institution}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">
                      {item.period}
                    </span>
                    {item.status === 'current' && (
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        Em andamento
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;