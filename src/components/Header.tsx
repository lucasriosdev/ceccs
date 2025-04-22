import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Instagram, Mail, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900 dark:text-white">CECCS</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-900 dark:hover:text-blue-400">
              Início
            </Link>
            <Link to="/sobre" className="text-gray-700 dark:text-gray-200 hover:text-blue-900 dark:hover:text-blue-400">
              Sobre
            </Link>
            <Link to="/projetos" className="text-gray-700 dark:text-gray-200 hover:text-blue-900 dark:hover:text-blue-400">
              Projetos
            </Link>
            <Link to="/calendario" className="text-gray-700 dark:text-gray-200 hover:text-blue-900 dark:hover:text-blue-400">
              Calendário
            </Link>
            <Link to="/game" className="text-gray-700 dark:text-gray-200 hover:text-blue-900 dark:hover:text-blue-400">
              Mini Game
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:contato@escola.com"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}