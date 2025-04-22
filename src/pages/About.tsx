import React from 'react';
import { Building, Users, Target, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Nossa História',
      description: 'Fundado em 1985, o Colégio Estadual Constantino Catarino de Souza tem sido um pilar da educação em Baixa Grande. Ao longo de mais de três décadas, temos formado gerações de alunos comprometidos com a excelência acadêmica e o desenvolvimento social.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Missão',
      description: 'Proporcionar uma educação de qualidade que desenvolva o potencial intelectual, social e cultural dos nossos alunos, preparando-os para serem cidadãos conscientes e protagonistas na sociedade.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Visão',
      description: 'Ser reconhecida como uma instituição de referência em educação pública, destacando-se pela inovação pedagógica, formação integral dos alunos e compromisso com a transformação social.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Valores',
      description: 'Excelência acadêmica, ética, respeito à diversidade, inovação, sustentabilidade e compromisso social são os pilares que norteiam nossas ações e decisões.'
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Prêmio Estadual de Educação',
      description: 'Reconhecimento por práticas inovadoras no ensino.'
    },
    {
      year: '2022',
      title: 'Destaque em Olimpíadas',
      description: 'Medalhas nas Olimpíadas de Matemática e Ciências.'
    },
    {
      year: '2021',
      title: 'Projeto Sustentável',
      description: 'Premiação por iniciativas ambientais na comunidade.'
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Nossa Escola
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Uma história de dedicação à educação e ao desenvolvimento integral dos nossos alunos
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  {React.cloneElement(value.icon, {
                    className: "text-primary-600 dark:text-primary-400"
                  })}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nossas Conquistas
          </h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-4"
              >
                <div className="flex-shrink-0 w-24">
                  <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                    {achievement.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '1000+', label: 'Alunos' },
            { number: '50+', label: 'Professores' },
            { number: '38', label: 'Anos de História' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}