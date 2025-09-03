import React from 'react';
import { Heart, GitlabIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <a
              href="https://gitlab.com/users/douglas.si.sa/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <GitlabIcon size={16} />
              Veja meus projetos no GitLab
            </a>
          </div>
          <p className="flex items-center justify-center gap-2 text-sm">
            Desenvolvido com <Heart size={16} className="text-red-500" /> por Douglas Santos © 2025
          </p>
          <p className="text-xs mt-2 opacity-60">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;