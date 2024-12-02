export const quizData = [
  {
    title: "JavaScript & React.js Quiz",
    questions: [
      {
        text: "Which method is used to combine two or more arrays in JavaScript?",
        options: ["concat()", "combine()", "merge()", "append()"],
        correctAnswer: 0,
      },
      {
        text: "What will be the output of `console.log(typeof NaN)`?",
        options: ["number", "NaN", "undefined", "string"],
        correctAnswer: 0,
      },
      {
        text: "Which of the following is a falsy value in JavaScript?",
        options: ["0", "1", "'false'", "[]"],
        correctAnswer: 0,
      },
      {
        text: "What does the `bind()` method do in JavaScript?",
        options: [
          "Creates a new function with a specific `this` context",
          "Calls a function with a specific `this` context",
          "Executes a function immediately",
          "Attaches an event listener",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the result of `2 + '2'` in JavaScript?",
        options: ["22", "4", "NaN", "undefined"],
        correctAnswer: 0,
      },
      {
        text: "Which array method is used to iterate over an array and return a new array?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        correctAnswer: 1,
      },
      {
        text: "What is the purpose of the `Promise.all()` method?",
        options: [
          "Executes multiple promises sequentially",
          "Waits for all promises to resolve or reject",
          "Resolves a single promise",
          "Cancels all promises",
        ],
        correctAnswer: 1,
      },
      {
        text: "Which of these keywords is used to declare a block-scoped variable?",
        options: ["var", "let", "function", "const"],
        correctAnswer: 1,
      },
      {
        text: "What does the `spread` operator do in JavaScript?",
        options: [
          "Copies array elements into a new array",
          "Spreads array or object properties into another array or object",
          "Joins two arrays into one",
          "Adds a new property to an object",
        ],
        correctAnswer: 1,
      },
      {
        text: "How do you check if a variable `x` is an array?",
        options: [
          "typeof x === 'array'",
          "x.isArray()",
          "Array.isArray(x)",
          "x instanceof Array",
        ],
        correctAnswer: 2,
      },
      {
        text: "What does the `useEffect` hook do in React?",
        options: [
          "Manages local component state",
          "Runs side effects in functional components",
          "Updates the virtual DOM",
          "Handles routing in the app",
        ],
        correctAnswer: 1,
      },
      {
        text: "How can you optimize performance in a React app?",
        options: [
          "Using `shouldComponentUpdate` or `React.memo`",
          "Re-rendering all components frequently",
          "Adding inline styles to components",
          "Avoiding the use of props",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the purpose of `React.Fragment`?",
        options: [
          "Render multiple elements without adding an extra DOM node",
          "Handle state updates in components",
          "Create a new React component",
          "Render text nodes in JSX",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which of the following is true about React Context?",
        options: [
          "It is used to manage component lifecycle",
          "It is used for state management and prop drilling",
          "It replaces React Router",
          "It is a third-party library",
        ],
        correctAnswer: 1,
      },
      {
        text: "What is the difference between `state` and `props` in React?",
        options: [
          "`state` is immutable; `props` can be changed",
          "`state` is used to pass data; `props` is used for local data management",
          "`state` is managed by the component; `props` is passed to the component",
          "`state` is passed to child components; `props` is managed by child components",
        ],
        correctAnswer: 2,
      },
    ],
  },
];

// {
//   title: "Intermediate ReactJS Quiz",
//   questions: [
//     {
//       text: "What does the `useEffect` hook do in React?",
//       options: [
//         "Manages local component state",
//         "Runs side effects in functional components",
//         "Updates the virtual DOM",
//         "Handles routing in the app",
//       ],
//       correctAnswer: 1,
//     },
//     {
//       text: "How can you optimize performance in a React app?",
//       options: [
//         "Using `shouldComponentUpdate` or `React.memo`",
//         "Re-rendering all components frequently",
//         "Adding inline styles to components",
//         "Avoiding the use of props",
//       ],
//       correctAnswer: 0,
//     },
//     {
//       text: "What is the purpose of `React.Fragment`?",
//       options: [
//         "Render multiple elements without adding an extra DOM node",
//         "Handle state updates in components",
//         "Create a new React component",
//         "Render text nodes in JSX",
//       ],
//       correctAnswer: 0,
//     },
//     {
//       text: "Which of the following is true about React Context?",
//       options: [
//         "It is used to manage component lifecycle",
//         "It is used for state management and prop drilling",
//         "It replaces React Router",
//         "It is a third-party library",
//       ],
//       correctAnswer: 1,
//     },
//     {
//       text: "What is the difference between `state` and `props` in React?",
//       options: [
//         "`state` is immutable; `props` can be changed",
//         "`state` is used to pass data; `props` is used for local data management",
//         "`state` is managed by the component; `props` is passed to the component",
//         "`state` is passed to child components; `props` is managed by child components",
//       ],
//       correctAnswer: 2,
//     },
//   ],
// },
// export const quizData = [
//   {
//     title: "General Knowledge Quiz",
//     questions: [
//       {
//         text: "What is the capital of France?",
//         options: ["London", "Berlin", "Paris", "Madrid"],
//         correctAnswer: 2,
//       },
//       {
//         text: "Which planet is known as the Red Planet?",
//         options: ["Venus", "Mars", "Jupiter", "Saturn"],
//         correctAnswer: 1,
//       },
//       {
//         text: "Who painted the Mona Lisa?",
//         options: [
//           "Vincent van Gogh",
//           "Pablo Picasso",
//           "Leonardo da Vinci",
//           "Michelangelo",
//         ],
//         correctAnswer: 2,
//       },
//     ],
//   },
//   {
//     title: "Science Quiz",
//     questions: [
//       {
//         text: "What is the chemical symbol for water?",
//         options: ["Wa", "H2O", "O2", "CO2"],
//         correctAnswer: 1,
//       },
//       {
//         text: "What is the largest organ in the human body?",
//         options: ["Heart", "Brain", "Liver", "Skin"],
//         correctAnswer: 3,
//       },
//       {
//         text: "What is the speed of light?",
//         options: [
//           "299,792 kilometers per second",
//           "150,000 kilometers per second",
//           "199,792 kilometers per second",
//           "250,000 kilometers per second",
//         ],
//         correctAnswer: 0,
//       },
//     ],
//   },
// ];
