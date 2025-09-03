import { Bot, Globe, Shield, Zap, CheckCircle, BarChart3 } from 'lucide-react';
import React from 'react';

export interface Solution {
  id: string;
  icon: React.ReactNode;
  iconName: string;
  title: string;
  description: string;
  technologies: string[];
  benefits: string[];
}

export const solutionsData: Solution[] = [
  {
    id: "automation-testing",
    icon: React.createElement(Bot, { size: 24 }),
    iconName: "Bot",
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
    id: "api-testing",
    icon: React.createElement(Globe, { size: 24 }),
    iconName: "Globe",
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
    id: "manual-testing",
    icon: React.createElement(Shield, { size: 24 }),
    iconName: "Shield",
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
    id: "cicd-integration",
    icon: React.createElement(Zap, { size: 24 }),
    iconName: "Zap",
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
    id: "quality-audit",
    icon: React.createElement(CheckCircle, { size: 24 }),
    iconName: "CheckCircle",
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
    id: "qa-reports",
    icon: React.createElement(BarChart3, { size: 24 }),
    iconName: "BarChart3",
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