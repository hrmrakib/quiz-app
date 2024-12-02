export default function Result({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className='text-center space-y-6'>
      <h2 className='text-2xl font-bold text-white mb-4'>Quiz Results</h2>
      <p className='text-xl text-white'>
        You scored {score} out of {totalQuestions}
      </p>
      <p className='text-3xl font-bold text-gray-200'>{percentage}%</p>
      <button
        onClick={onRestart}
        className='w-full text-gray-300 bg-blue-500 py-2'
      >
        Restart Quiz
      </button>
    </div>
  );
}
