import React, { useContext, useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { QuizDataContext } from "./context/QuizContent";
import { Link } from "react-router-dom";

export default function App() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const { quizData } = useContext(QuizDataContext);

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

  return quizData ? (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <div className='relative bg-[#151515] p-8 rounded-lg shadow-md w-full max-w-md'>
        <Link
          to={"/"}
          className='absolute top-0 right-8 py-1 text-white w-full text-right'
        >
          Other Quiz
        </Link>
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
      </div>
    </div>
  ) : (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <Link
        to={"/"}
        className='text-white font-semibold border px-4 py-2 rounded hover:bg-pink-600'
      >
        Go Home
      </Link>
    </div>
  );
}
