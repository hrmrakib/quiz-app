import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { quizData } from "./constants";
import HomePage from "./components/HomePage";

export default function App() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizComplete = (quizScore) => {
    setScore((prevScore) => prevScore + quizScore);
    if (currentQuiz < quizData.length - 1) {
      setCurrentQuiz((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuiz(0);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <HomePage />
      {/* <div className='bg-[#151515] p-8 rounded-lg shadow-md w-full max-w-md'>
        {!showResult ? (
          <Quiz quiz={quizData[currentQuiz]} onComplete={handleQuizComplete} />
        ) : (
          <Result
            score={score}
            totalQuestions={quizData.reduce(
              (acc, quiz) => acc + quiz.questions.length,
              0
            )}
            onRestart={handleRestart}
          />
        )}
      </div> */}
    </div>
  );
}
