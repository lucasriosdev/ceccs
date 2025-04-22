import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Endereço
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              R. Pôrto Seguro, 1030 - Santa Cruz, <br /> Luís Eduardo Magalhães
              - BA, 47850-000
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Horário de Atendimento
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Segunda a Sexta: 07:30 às 11:30 e 13:30 <br /> às 17:30 e 19:00 às
              22:30
              <br />
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
