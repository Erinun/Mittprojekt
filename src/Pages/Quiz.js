import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

function Quiz() {
  // Frågor och svar
  const questions = [
    {
      question: "Vad står AI för?",
      options: ["Artificiell Intelligens", "Automatisk Information", "Avancerad Innovation"],
      answer: "Artificiell Intelligens",
    },
    {
      question: "Vilken AI-teknik används ofta i rekrytering?",
      options: ["ChatGPT", "Blockchain", "3D-printing"],
      answer: "ChatGPT",
    },
    {
      question: "Vad är en fördel med AI i rekrytering?",
      options: ["Minskad bias", "Högre kostnader", "Längre rekryteringsprocess"],
      answer: "Minskad bias",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <header className="page-header">
        <Link to="/kunskapsdelning" className="back-button">Tillbaka</Link>
      </header>

      <h1>Interaktiv Quiz</h1>

      {showResult ? (
        <div className="quiz-result">
          <h2>Resultat</h2>
          <p>Du fick {score} av {questions.length} rätt!</p>
          <button onClick={() => window.location.reload()} className="restart-button">Starta om</button>
        </div>
      ) : (
        <div className="quiz-question">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} className="quiz-button">
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
