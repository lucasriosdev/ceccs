import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Endereço</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Av. 2 de Julho, 737, Casa Centro<br />
              44620-000 Baixa Grande/BA
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Horário de Atendimento</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Segunda a Quinta: 08:00 às 12:00 e 14:00 às 17:00<br />
              Sexta: 08:00 às 13:00
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            Desenvolvido por Lucas Rios | {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}