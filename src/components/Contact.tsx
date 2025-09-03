import React from 'react';
import { Phone, Mail, Github, Linkedin, Download, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone size={20} />,
      label: "Telefone",
      value: "(65) 99646-7662",
      href: "tel:+5565996467662"
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "douglas.si.sa@gmail.com",
      href: "mailto:douglas.si.sa@gmail.com"
    },
    {
      icon: <Github size={20} />,
      label: "Projetos",
      value: "github.com/Douglasjash",
      href: "https://github.com/Douglasjash"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white" id="contato">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-purple-200 mb-12">
            📌 Pronto para elevar a qualidade do seu software?
          </p>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-colors">
                  {method.icon}
                </div>
                <h3 className="font-semibold mb-2 text-purple-200">
                  {method.label}
                </h3>
                <p className="text-white">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/douglassssantos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              Fale comigo no LinkedIn
            </a>
            <a
              href="mailto:douglas.si.sa@gmail.com"
              className="border-2 border-purple-400 hover:bg-purple-400 hover:text-gray-900 text-purple-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Envie um e-mail
            </a>
            <a
              href="/Curriculo Douglas Santos.pdf"
              download="Curriculo Douglas Santos.pdf"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Baixe meu CV
            </a>
          </div>

          {/* Contact Summary */}
          <div className="text-purple-200">
            <p className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <Phone size={16} />
                (65) 99646-7662
              </span>
              <span className="text-purple-400">|</span>
              <span className="flex items-center gap-2">
                <Mail size={16} />
                douglas.si.sa@gmail.com
              </span>
              <span className="text-purple-400">|</span>
              <span className="flex items-center gap-2">
                <Github size={16} />
                github.com/Douglasjash
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;