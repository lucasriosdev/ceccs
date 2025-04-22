import React from 'react';
import { Calendar as CalendarIcon, Download, FileText } from 'lucide-react';

interface CalendarItem {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  pdfUrl: string;
}

export default function Calendar() {
  const calendarItems: CalendarItem[] = [
    {
      id: 'calendario-2024',
      title: 'Calendário Escolar 2024',
      description: 'Calendário oficial com todos os eventos, feriados e datas importantes do ano letivo de 2024.',
      icon: <CalendarIcon className="w-8 h-8" />,
      pdfUrl: 'https://www.canva.com/design/DAGk6hp_NFs/MOHmabCUpwhihp7LqvhyIw/view?utm_content=DAGk6hp_NFs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1c1bcb6df6'
    },
    {
      id: 'cronograma-1sem',
      title: 'Cronograma 2024',
      description: 'Detalhamento das atividades, avaliações e eventos programados para o ano letivo.',
      icon: <FileText className="w-8 h-8" />,
      pdfUrl: 'https://www.canva.com/design/DAGlXDkXHp0/Yy2NT-FsfMiKLM6BEmWShg/view?utm_content=DAGlXDkXHp0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h08cc1d7202'
    }
  ];

  const handleDownload = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Calendário e Cronograma
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Acesse o calendário e cronograma do ano letivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {calendarItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                  {React.cloneElement(item.icon, {
                    className: "text-primary-600 dark:text-primary-400"
                  })}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                {item.description}
              </p>
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => window.open(item.pdfUrl, '_blank')}
                  className="flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Visualizar PDF
                </button>
                <button
                  onClick={() => handleDownload(item.pdfUrl)}
                  className="flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Informações Importantes
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Os calendários são atualizados periodicamente conforme necessário
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Fique atento às datas de avaliações e eventos especiais
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Em caso de alterações, os alunos serão notificados com antecedência
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}