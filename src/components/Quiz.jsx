import React, { useState } from "react";

export default function Quiz({ quiz, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(quiz.questions.length).fill(-1)
  );

  const handleAnswerSelect = (answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const score = selectedAnswers.reduce((acc, answer, index) => {
        return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
      }, 0);
      onComplete(score);
    }
  };

  const question = quiz.questions[currentQuestion];

  return (
    <div className='space-y-6 max-w-2xl mx-auto p-6 bg-black shadow-xl rounded-lg'>
      <h2 className='text-2xl font-bold text-white text-center mb-6'>
        {quiz.title}
      </h2>
      <div className='text-lg text-white font-medium mb-4'>
        Question {currentQuestion + 1} of {quiz.questions.length}
      </div>
      <p className='text-lg mb-4 text-gray-200'>{question.text}</p>
      <div className='space-y-2'>
        {question.options.map((option, index) => (
          <div key={index} className='flex items-center space-x-2'>
            <input
              type='radio'
              id={`option-${index}`}
              name='quiz-option'
              value={index}
              checked={selectedAnswers[currentQuestion] === index}
              onChange={() => handleAnswerSelect(index)}
              className='form-radio h-5 w-5 text-blue-600 cursor-pointer'
            />
            <label
              htmlFor={`option-${index}`}
              className='text-gray-300 cursor-pointer'
            >
              {option}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={selectedAnswers[currentQuestion] === -1}
        className='w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {currentQuestion === quiz.questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}
