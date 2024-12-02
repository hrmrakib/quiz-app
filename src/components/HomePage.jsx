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
    id: 1,
    title: "React.js Quiz",
    questions: 20,
  },
];

const HomePage = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {quiz.map((qu) => (
        <div
          key={qu.id}
          className='bg-gray-900 p-4 rounded-sm shadow-md cursor-pointer'
        >
          <h2 className='text-2xl text-white text-center font-bold mb-2'>
            {qu.title}
          </h2>
          <p className='text-gray-400 text-center'>{qu.questions} Questions</p>
        </div>
      ))}
    </section>
  );
};

export default HomePage;
