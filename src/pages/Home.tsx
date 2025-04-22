import React, { useEffect, useState } from "react";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary-600" />,
      title: "Educação de Qualidade",
      description:
        "Comprometidos com a excelência acadêmica e desenvolvimento integral dos alunos.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary-600" />,
      title: "Projetos Inovadores",
      description:
        "Programas especiais que estimulam a criatividade e o pensamento crítico.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Comunidade Engajada",
      description:
        "Forte integração entre escola, família e comunidade para melhor aprendizado.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Reconhecimento",
      description:
        "Referência em educação pública na região, com resultados comprovados.",
    },
  ];

  const managementTeam = [
    {
      image:
        "https://raw.githubusercontent.com/lucascerqueira1/ceccs/main/public/elaine.jpg",
      name: "Elaine Hermida",
      role: "Diretora",
      education: [
        "Mestra em Ciência da Educação e Ensino Superior",
        "Especialista em Psicopedagogia Clínica",
        "Licenciada em Letras Vernáculas",
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/lucascerqueira1/ceccs/main/public/lucas.jpg",
      name: "Lucas Cerqueira",
      role: "Vice-Diretor",
      education: [
        "Mestrando em Direito Médico",
        "Especialista em Ciências Humanas e Sociais",
        "Licenciado em Filosofia e Ciências Biológicas",
      ],
    },
    {
      image:
        "https://raw.githubusercontent.com/lucascerqueira1/ceccs/main/public/marcelo.jpg",
      name: "Marcelo Moura",
      role: "Vice-Diretor",
      education: [
        "Especialista em Metodologias Ativas de Aprendizagem",
        "Licenciado em Geografia",
        "Bacharelando em Administração",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Colégio Estadual Constantino Catarino de Souza
          </h1>
          <p
            className={`text-xl md:text-2xl text-white mb-8 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Educação que conecta, transforma e prepara para o futuro!
          </p>
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <a
              href="#conheca-mais"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Conheça Mais
            </a>
            <a
              href="#projetos"
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Nossos Projetos
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="conheca-mais" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Por que escolher nossa escola?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprometidos com a excelência em educação e desenvolvimento
              integral dos alunos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Equipe da Gestão Escolar
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Conheça nossa equipe de gestão escolar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative pb-[125%]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <div className="space-y-2">
                    {member.education.map((item, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-300"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Faça parte da nossa comunidade escolar
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Venha conhecer nossa estrutura e metodologia de ensino. Estamos
            sempre abertos para receber novos alunos e suas famílias.
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </section>
    </div>
  );
}
