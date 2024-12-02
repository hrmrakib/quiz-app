import React, { createContext, useState, useContext } from "react";

// Create the context
export const QuizDataContext = createContext();

// Create a provider component
const QuizDataProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(null);

  return (
    <QuizDataContext.Provider value={{ quizData, setQuizData }}>
      {children}
    </QuizDataContext.Provider>
  );
};

export default QuizDataProvider;
