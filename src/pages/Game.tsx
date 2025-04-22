import React, { useState, useEffect } from 'react';
import { Brain, Trophy, RefreshCw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Qual é o resultado de 8 × 7?",
      options: ["54", "56", "58", "60"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Quem escreveu 'O Pequeno Príncipe'?",
      options: ["Antoine de Saint-Exupéry", "Machado de Assis", "Jorge Amado", "Monteiro Lobato"],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "Qual é a capital do Brasil?",
      options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "Quanto é 15% de 200?",
      options: ["20", "25", "30", "35"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Em que ano o Brasil foi descoberto?",
      options: ["1498", "1499", "1500", "1501"],
      correctAnswer: 2
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && !showScore && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowScore(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted, showScore, timeLeft]);

  const handleStartGame = () => {
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(30);
  };

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const renderTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <Brain className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quiz Educativo
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Teste seus conhecimentos em diferentes áreas! Você tem 30 segundos para responder todas as questões.
            </p>
            <button
              onClick={handleStartGame}
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              Começar o Jogo
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showScore) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <Trophy className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Fim do Jogo!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Você acertou {score} de {questions.length} questões!
          </p>
          <button
            onClick={handleStartGame}
            className="bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors flex items-center justify-center mx-auto"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Jogar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Questão {currentQuestion + 1}/{questions.length}
            </div>
            <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
              Tempo: {renderTimer()}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="w-full text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-600 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors border-2 border-transparent hover:border-primary-600 dark:hover:border-primary-400"
              >
                <span className="text-gray-900 dark:text-white">{option}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
            Pontuação atual: {score}
          </div>
        </div>
      </div>
    </div>
  );
}