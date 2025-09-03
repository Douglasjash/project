import React from 'react';
import { Bot, Globe, Code, Wrench, Palette, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Bot size={24} />,
      title: "Automação de Testes UI",
      skills: ["TestComplete", "Katalon Studio", "Ranorex", "Selenium", "Robot Framework"]
    },
    {
      icon: <Globe size={24} />,
      title: "APIs",
      skills: ["Postman", "JMeter", "Testes de Performance"]
    },
    {
      icon: <Code size={24} />,
      title: "Linguagens",
      skills: ["Python (Básico)", "JavaScript (Básico)"]
    },
    {
      icon: <Wrench size={24} />,
      title: "DevOps",
      skills: ["GitLab CI", "Jenkins"]
    },
    {
      icon: <Palette size={24} />,
      title: "Outros",
      skills: [
        "Figma",
        "Gherkin",
        "BDD (Behavior Driven Development)",
        "Análise de regras de negócio",
        "Relatórios e documentação de bugs"
      ]
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Idiomas",
      skills: ["Português — Nativo", "Inglês — Avançado"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Skills & Competências
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-t-purple-100 border-b-purple-400 border-l-purple-200 border-r-purple-200 hover:border-t-purple-200 hover:border-b-purple-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gray-50 px-3 py-2 rounded-lg text-gray-700 text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;