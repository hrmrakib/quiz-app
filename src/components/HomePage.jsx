import { useNavigate } from "react-router-dom";
import { htmlQuiz, cssQuiz, jsQuiz, reactQuiz } from "../constants";
import { QuizDataContext } from "../context/QuizContent";
import { useContext } from "react";

export const quiz = [
  {
    id: 1,
    title: "HTML Quiz",
    questions: 20,
  },
  {
    id: 2,
    title: "CSS Quiz",
    questions: 20,
  },
  {
    id: 3,
    title: "JavaScript Quiz",
    questions: 20,
  },
  {
    id: 4,
    title: "React.js Quiz",
    questions: 20,
  },
];

const HomePage = () => {
  const { setQuizData } = useContext(QuizDataContext);
  const navigate = useNavigate();

  const handleQuiz = (id) => {
    if (id === 1) {
      setQuizData(htmlQuiz);
      navigate("/quiz");
    }
    if (id === 2) {
      setQuizData(cssQuiz);
      navigate("/quiz");
    }
    if (id === 3) {
      setQuizData(jsQuiz);
      navigate("/quiz");
    }
    if (id === 4) {
      setQuizData(reactQuiz);
      navigate("/quiz");
    }
  };

  return (
    <section className='min-h-screen bg-black flex items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 border border-gray-800 p-8 rounded-lg shadow-md w-full max-w-md'>
        {quiz.map((qu) => (
          <div
            key={qu.id}
            onClick={() => handleQuiz(qu.id)}
            className='bg-gray-900 p-4 rounded-sm shadow-md cursor-pointer'
          >
            <h2 className='text-2xl text-white text-center font-bold mb-2'>
              {qu.title}
            </h2>
            <p className='text-gray-400 text-center'>
              {qu.questions} Questions
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
