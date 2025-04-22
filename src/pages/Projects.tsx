import React, { useState } from "react";
import {
  Book,
  Users,
  Brain,
  Target,
  Star,
  Heart,
  Award,
  FlaskRound as Flask,
  BookOpen,
  Music,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  fullDescription: string;
  image: string;
  dates: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "face",
      title: "FACE",
      icon: <Users className="w-6 h-6" />,
      description: "Formação Artística e Cultural na Escola",
      fullDescription:
        "O programa FACE visa desenvolver habilidades artísticas e culturais dos alunos através de oficinas, apresentações e eventos culturais.",
      image:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      dates: "Ano letivo 2025",
    },
    {
      id: "tal",
      title: "TAL",
      icon: <Book className="w-6 h-6" />,
      description: "Tempo de Aprender e Ler",
      fullDescription:
        "O TAL é um programa focado no desenvolvimento da leitura e interpretação textual, promovendo o hábito da leitura entre os estudantes.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      dates: "Ano letivo 2025",
    },
    {
      id: "ave",
      title: "AVE",
      icon: <Target className="w-6 h-6" />,
      description: "Ambiente Virtual Educacional",
      fullDescription:
        "Programa que integra tecnologia e educação, proporcionando um ambiente virtual de aprendizagem complementar às aulas presenciais.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      dates: "Ano letivo 2025",
    },
    {
      id: "epa",
      title: "EPA",
      icon: <Brain className="w-6 h-6" />,
      description: "Educação e Protagonismo Adolescente",
      fullDescription:
        "Projeto que estimula o protagonismo juvenil através de atividades de liderança e desenvolvimento pessoal.",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      dates: "Ano letivo 2025",
    },
    {
      id: "prove",
      title: "PROVE",
      icon: <Star className="w-6 h-6" />,
      description: "Programa de Valorização Estudantil",
      fullDescription:
        "Iniciativa que reconhece e premia o desempenho acadêmico e o desenvolvimento integral dos estudantes.",
      image:
        "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      dates: "Ano letivo 2025",
    },
    {
      id: "encante",
      title: "ENCANTE",
      icon: <Heart className="w-6 h-6" />,
      description: "Encontro Cultural e Artístico",
      fullDescription:
        "Festival que celebra as diversas formas de expressão artística e cultural dos alunos.",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      dates: "Ano letivo 2025",
    },
    {
      id: "jovem-senador",
      title: "JOVEM SENADOR",
      icon: <Award className="w-6 h-6" />,
      description: "Programa de Educação Política",
      fullDescription:
        "Projeto que aproxima os jovens do processo legislativo e da cidadania ativa.",
      image:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      dates: "Ano letivo 2025",
    },
    {
      id: "clube-ciencias",
      title: "CLUBE DE CIÊNCIAS",
      icon: <Flask className="w-6 h-6" />,
      description: "Explorando o Mundo Científico",
      fullDescription:
        "Espaço dedicado à experimentação e ao desenvolvimento do pensamento científico.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      dates: "Ano letivo 2025",
    },
    {
      id: "clube-leitura",
      title: "CLUBE DE LEITURA",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Compartilhando Histórias",
      fullDescription:
        "Encontros regulares para discussão de livros e desenvolvimento do hábito da leitura.",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      dates: "Ano letivo 2025",
    },
    {
      id: "festival-cultura",
      title: "FESTIVAL DE CULTURA CORPORAL",
      icon: <Music className="w-6 h-6" />,
      description: "Expressão Através do Movimento",
      fullDescription:
        "Festival que celebra a cultura corporal através da dança, teatro e expressão corporal.",
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      dates: "Ano letivo 2025",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos Projetos e Programas
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Conheça as iniciativas que fazem nossa escola especial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    {React.cloneElement(project.icon, {
                      className:
                        "w-6 h-6 text-primary-600 dark:text-primary-400",
                    })}
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={() => setSelectedProject(null)}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-4 pt-5 pb-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedProject.fullDescription}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Período: {selectedProject.dates}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
