import React from 'react';
import { Bot, Globe, Shield, Zap, CheckCircle, BarChart3 } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Bot size={24} />,
      title: "Automação de Testes UI",
      description: "Desenvolvimento de scripts automatizados para testes de interface de usuário",
      technologies: ["TestComplete", "Katalon Studio", "Selenium", "Robot Framework"],
      benefits: [
        "Redução de 70% no tempo de execução de testes",
        "Cobertura de testes 24/7",
        "Detecção precoce de bugs"
      ]
    },
    {
      icon: <Globe size={24} />,
      title: "Validação de APIs e Testes de Performance",
      description: "Testes completos de APIs REST e análise de performance de aplicações",
      technologies: ["Postman", "JMeter", "Python"],
      benefits: [
        "Garantia de funcionamento das integrações",
        "Identificação de gargalos de performance",
        "Relatórios detalhados de carga"
      ]
    },
    {
      icon: <Shield size={24} />,
      title: "Estratégia de Testes Manuais",
      description: "Planejamento e execução de testes manuais estruturados e documentados",
      technologies: ["Análise de Regras de Negócio", "Documentação de Bugs", "Figma", "Gherkin", "BDD"],
      benefits: [
        "Cobertura completa de cenários críticos",
        "Documentação detalhada de defeitos",
        "Validação de usabilidade",
        "Cenários em linguagem natural (Gherkin)"
      ]
    },
    {
      icon: <Zap size={24} />,
      title: "Integração CI/CD",
      description: "Implementação de testes automatizados em pipelines de integração contínua",
      technologies: ["GitLab CI", "Jenkins"],
      benefits: [
        "Feedback imediato sobre qualidade",
        "Bloqueio automático de deploys com falhas",
        "Histórico completo de execuções"
      ]
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Auditoria de Qualidade",
      description: "Análise completa dos processos de QA existentes e propostas de melhoria",
      technologies: ["Análise de Processos", "Documentação", "Métricas de Qualidade"],
      benefits: [
        "Identificação de gaps no processo atual",
        "Plano de ação para melhorias",
        "Definição de métricas de qualidade"
      ]
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Relatórios e Métricas de QA",
      description: "Criação de dashboards e relatórios para acompanhamento da qualidade",
      technologies: ["Análise de Dados", "Documentação", "Métricas"],
      benefits: [
        "Visibilidade completa da qualidade",
        "Tomada de decisão baseada em dados",
        "Acompanhamento de tendências"
      ]
    }
  ];

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
            {solutions.map((solution, index) => (
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