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

export const htmlQuiz = [
  {
    title: "HTML Quiz",
    questions: [
      {
        text: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "Hyperlink and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Transfer Markup Language",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which HTML element is used to define important text?",
        options: ["<strong>", "<b>", "<i>", "<em>"],
        correctAnswer: 0,
      },
      {
        text: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<line>"],
        correctAnswer: 0,
      },
      {
        text: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["alt", "src", "title", "href"],
        correctAnswer: 0,
      },
      {
        text: "What is the purpose of the `<head>` element in an HTML document?",
        options: [
          "To display content to the user",
          "To contain metadata and links to external resources",
          "To contain the main content of the document",
          "To specify navigation links",
        ],
        correctAnswer: 1,
      },
      {
        text: "Which HTML element is used to define a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correctAnswer: 0,
      },
      {
        text: "Which of the following is the correct way to comment in HTML?",
        options: [
          "// This is a comment",
          "<!-- This is a comment -->",
          "/* This is a comment */",
          "'This is a comment'",
        ],
        correctAnswer: 1,
      },
      {
        text: "What is the correct HTML for creating a checkbox?",
        options: [
          "<input type='checkbox'>",
          "<check>",
          "<input type='box'>",
          "<input type='check'>",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which HTML element is used to define the title of a document?",
        options: ["<title>", "<header>", "<head>", "<meta>"],
        correctAnswer: 0,
      },
      {
        text: "What is the default display property of the <div> element?",
        options: ["block", "inline", "inline-block", "flex"],
        correctAnswer: 0,
      },
      {
        text: "Which attribute is used to specify that an input field must be filled out before submitting the form?",
        options: ["required", "placeholder", "validate", "mandatory"],
        correctAnswer: 0,
      },
      {
        text: "What does the `action` attribute in an HTML form do?",
        options: [
          "Specifies where to send the form data",
          "Specifies the HTTP method to use when submitting the form",
          "Specifies the format of the form data",
          "Specifies a placeholder for the form data",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the correct HTML for creating a drop-down list?",
        options: ["<select>", "<list>", "<dropdown>", "<option>"],
        correctAnswer: 0,
      },
      {
        text: "Which attribute specifies the URL of the image in an <img> tag?",
        options: ["src", "href", "alt", "link"],
        correctAnswer: 0,
      },
      {
        text: "Which tag is used to define a table in HTML?",
        options: ["<table>", "<tr>", "<td>", "<th>"],
        correctAnswer: 0,
      },
      {
        text: "What is the purpose of the `<noscript>` tag in HTML?",
        options: [
          "To provide fallback content for browsers with JavaScript disabled",
          "To disable JavaScript in the document",
          "To add inline JavaScript code",
          "To define non-standard scripting elements",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which attribute in HTML is used to open a hyperlink in a new tab?",
        options: [
          "target='_blank'",
          "rel='new'",
          "href='_new'",
          "link='blank'",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the correct HTML element for playing audio files?",
        options: ["<audio>", "<sound>", "<play>", "<media>"],
        correctAnswer: 0,
      },
      {
        text: "What is the purpose of the `<meta charset='UTF-8'>` tag?",
        options: [
          "To specify the character encoding for the document",
          "To define the language of the document",
          "To provide metadata about the document",
          "To specify the document's viewport settings",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<footer>", "<bottom>", "<section>", "<div>"],
        correctAnswer: 0,
      },
    ],
  },
];

export const cssQuiz = [
  {
    title: "CSS Quiz",
    questions: [
      {
        text: "Which CSS property is used to change the text color of an element?",
        options: ["color", "font-color", "text-color", "foreground"],
        correctAnswer: 0,
      },
      {
        text: "What does the `z-index` property control in CSS?",
        options: [
          "The stacking order of elements",
          "The visibility of an element",
          "The position of an element",
          "The size of an element",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which CSS property is used to make the text bold?",
        options: ["font-weight", "font-style", "text-style", "text-weight"],
        correctAnswer: 0,
      },
      {
        text: "What is the default value of the `position` property in CSS?",
        options: ["static", "relative", "absolute", "fixed"],
        correctAnswer: 0,
      },
      {
        text: "Which property is used to control the space between lines of text?",
        options: ["line-height", "letter-spacing", "text-spacing", "spacing"],
        correctAnswer: 0,
      },
      {
        text: "Which CSS property is used to create space between an element’s border and content?",
        options: ["padding", "margin", "border-spacing", "gap"],
        correctAnswer: 0,
      },
      {
        text: "Which CSS property is used to make an element invisible but still occupy space?",
        options: ["visibility", "display", "opacity", "z-index"],
        correctAnswer: 0,
      },
      {
        text: "Which of the following is NOT a valid value for the `display` property?",
        options: ["block", "inline", "grid", "hidden"],
        correctAnswer: 3,
      },
      {
        text: "What does the `overflow: hidden;` property do?",
        options: [
          "Hides content that overflows the element’s box",
          "Resizes the element to fit its content",
          "Allows content to scroll inside the element",
          "Hides the element itself",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which property is used to define a custom font in CSS?",
        options: ["@font-face", "font-family", "font-style", "font-weight"],
        correctAnswer: 0,
      },
      {
        text: "Which property is used to align items inside a flex container?",
        options: ["align-items", "justify-content", "flex-align", "text-align"],
        correctAnswer: 0,
      },
      {
        text: "What does the `clip-path` property do?",
        options: [
          "Clips an element to a specific shape",
          "Hides the element",
          "Resizes the element",
          "Positions an element inside its parent",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the difference between `relative` and `absolute` positioning in CSS?",
        options: [
          "Relative positions an element relative to itself, absolute positions it relative to its nearest positioned ancestor.",
          "Relative positions an element relative to its parent, absolute positions it relative to the viewport.",
          "Relative hides the element, absolute shows it.",
          "Relative uses `z-index`, absolute ignores it.",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the use of the `transition` property in CSS?",
        options: [
          "To add animation between state changes",
          "To hide elements",
          "To position elements",
          "To change font styles dynamically",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which CSS property controls the transparency of an element?",
        options: ["opacity", "visibility", "transparent", "alpha"],
        correctAnswer: 0,
      },
      {
        text: "What is the difference between `inline` and `inline-block` elements?",
        options: [
          "Inline-block elements allow setting width and height, inline elements do not.",
          "Inline-block elements occupy the entire line, inline elements do not.",
          "Inline-block elements are hidden, inline elements are visible.",
          "There is no difference between them.",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which property is used to apply a shadow to a box element?",
        options: ["box-shadow", "text-shadow", "shadow", "border-shadow"],
        correctAnswer: 0,
      },
      {
        text: "Which CSS property is used to change the order of flex items in a flex container?",
        options: ["order", "flex-order", "z-index", "position"],
        correctAnswer: 0,
      },
      {
        text: "What is the default behavior of `position: sticky;`?",
        options: [
          "It toggles between `relative` and `fixed` based on scroll position.",
          "It behaves like `absolute`.",
          "It remains fixed on the screen.",
          "It removes the element from the DOM flow.",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which CSS property is used to define the maximum width an element can occupy?",
        options: ["max-width", "min-width", "width", "size"],
        correctAnswer: 0,
      },
    ],
  },
];

export const jsQuiz = [
  {
    title: "JavaScript Quiz",
    questions: [
      {
        text: "What is the output of `console.log(0.1 + 0.2 === 0.3)`?",
        options: ["true", "false", "undefined", "NaN"],
        correctAnswer: 1,
      },
      {
        text: "What is the purpose of the `bind()` method in JavaScript?",
        options: [
          "Creates a new function with a specified `this` context",
          "Invokes a function immediately",
          "Calls a function with specific arguments",
          "Stops the execution of a function",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which keyword is used to define a constant in JavaScript?",
        options: ["const", "let", "var", "define"],
        correctAnswer: 0,
      },
      {
        text: "What is the difference between `==` and `===`?",
        options: [
          "`==` compares values only; `===` compares both values and types.",
          "`==` compares types only; `===` compares values only.",
          "`==` compares values loosely; `===` does not exist in JavaScript.",
          "`==` is used for comparison; `===` is for assignment.",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which array method is used to transform an array into a single value?",
        options: ["reduce()", "map()", "filter()", "concat()"],
        correctAnswer: 0,
      },
      {
        text: "What does the `typeof` operator return for `null`?",
        options: ["object", "null", "undefined", "string"],
        correctAnswer: 0,
      },
      {
        text: "How can you check if an object is an array?",
        options: [
          "Array.isArray(obj)",
          "typeof obj === 'array'",
          "obj instanceof Array",
          "Both 1 and 3",
        ],
        correctAnswer: 3,
      },
      {
        text: "What is the result of `console.log([...'hello'])`?",
        options: [
          `["hello"]`,
          `["h", "e", "l", "l", "o"]`,
          `["h", "e", "llo"]`,
          `["h", "ello"]`,
        ],
        correctAnswer: 1,
      },
      {
        text: "What is a closure in JavaScript?",
        options: [
          "A function bundled with its lexical scope",
          "A function that is invoked immediately",
          "A variable that is shared across multiple functions",
          "A method used to close streams",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the output of `console.log([] + {})`?",
        options: ["[object Object]", "{}", "[]{}", "TypeError"],
        correctAnswer: 0,
      },
      {
        text: "Which method is used to create a shallow copy of an object?",
        options: ["Object.assign()", "Object.clone()", "copy()", "clone()"],
        correctAnswer: 0,
      },
      {
        text: "What does `setTimeout` return?",
        options: ["A timer ID", "undefined", "null", "A promise"],
        correctAnswer: 0,
      },
      {
        text: "What is the difference between `let` and `var`?",
        options: [
          "`let` has block scope; `var` has function scope.",
          "`var` has block scope; `let` has global scope.",
          "`var` cannot be reassigned; `let` can.",
          "`let` is deprecated; `var` is preferred.",
        ],
        correctAnswer: 0,
      },
      {
        text: "How can you copy an array without referencing the original array?",
        options: [
          "[...array]",
          "array.copy()",
          "array.map()",
          "array.reference()",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the output of `console.log(1 + '2')`?",
        options: ["12", "3", "NaN", "undefined"],
        correctAnswer: 0,
      },
      {
        text: "What is the purpose of `Promise.all()`?",
        options: [
          "Waits for all promises to resolve or one to reject",
          "Resolves the fastest promise",
          "Executes promises in order",
          "Waits for all promises to resolve and reject",
        ],
        correctAnswer: 0,
      },
      {
        text: "What does `Object.freeze()` do?",
        options: [
          "Prevents adding, modifying, or deleting properties of an object",
          "Freezes all references to the object",
          "Locks the object to a specific state",
          "Makes the object immutable including nested objects",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which statement about `async` functions is true?",
        options: [
          "They always return a promise.",
          "They execute synchronously.",
          "They must return a value.",
          "They cannot use `await`.",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the result of `console.log(1 == '1')`?",
        options: ["true", "false", "TypeError", "undefined"],
        correctAnswer: 0,
      },
      {
        text: "How do you create a new object that inherits from a prototype?",
        options: [
          "Object.create(prototype)",
          "new Object(prototype)",
          "Object.inherit(prototype)",
          "Object.clone(prototype)",
        ],
        correctAnswer: 0,
      },
    ],
  },
];

export const reactQuiz = [
  {
    title: "React.js Quiz",
    questions: [
      {
        text: "What is a key prop in React, and why is it important?",
        options: [
          "A unique identifier for list elements to maintain performance",
          "A reference to a DOM element",
          "A property to pass data between components",
          "A method to handle state updates",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the purpose of React's useEffect hook?",
        options: [
          "To manage side effects in functional components",
          "To update the component's state",
          "To handle conditional rendering",
          "To create a class-based component",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which of the following is true about React's Virtual DOM?",
        options: [
          "It updates only the necessary parts of the real DOM.",
          "It is slower than directly updating the real DOM.",
          "It replaces the real DOM.",
          "It can only work with stateful components.",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the difference between state and props in React?",
        options: [
          "State is managed within the component; props are passed from parent to child.",
          "State is immutable; props are mutable.",
          "State is used for data binding; props are used for styling.",
          "State is accessible globally; props are local to the component.",
        ],
        correctAnswer: 0,
      },
      {
        text: "How can you prevent a re-render in React?",
        options: [
          "Use React.memo or shouldComponentUpdate.",
          "Use inline functions in JSX.",
          "Avoid using state in functional components.",
          "Pass all props directly to child components.",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is React Context used for?",
        options: [
          "To share global data across components without passing props",
          "To manage local component state",
          "To optimize component performance",
          "To handle lifecycle methods",
        ],
        correctAnswer: 0,
      },
      {
        text: "What does the `setState` method do in React class components?",
        options: [
          "Merges the new state with the existing state and triggers a re-render",
          "Replaces the state completely without merging",
          "Updates the state asynchronously without re-rendering",
          "Directly modifies the component's state",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is React's useReducer hook used for?",
        options: [
          "Managing complex state logic in functional components",
          "Fetching data from an API",
          "Optimizing component performance",
          "Creating context providers",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the correct way to pass a method as a prop in React?",
        options: [
          "<Component handleClick={this.handleClick} />",
          "<Component handleClick=this.handleClick />",
          "<Component handleClick(this.handleClick) />",
          "<Component handleClick={{this.handleClick}} />",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the purpose of React's Fragment component?",
        options: [
          "To group multiple children without adding extra nodes to the DOM",
          "To optimize component performance",
          "To replace lifecycle methods in functional components",
          "To provide default props to components",
        ],
        correctAnswer: 0,
      },
      {
        text: "How does React handle form inputs with controlled components?",
        options: [
          "The input value is controlled by state and updated via an onChange handler.",
          "The input value is controlled directly by the DOM.",
          "The input value cannot be updated after the initial render.",
          "Controlled components cannot be used for forms in React.",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is React's StrictMode used for?",
        options: [
          "Highlighting potential problems in an application during development",
          "Optimizing performance in production",
          "Providing fallback UI for error boundaries",
          "Managing global application state",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is React Portals used for?",
        options: [
          "Rendering children into a DOM node that exists outside the parent component",
          "Managing animations in React components",
          "Creating components that are reusable across applications",
          "Optimizing performance by rendering components lazily",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the default behavior of React's useState hook?",
        options: [
          "It returns the current state and a function to update it.",
          "It returns the current state and a callback for updates.",
          "It directly modifies the DOM state.",
          "It always triggers a full component re-render.",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is React.lazy used for?",
        options: [
          "Loading components lazily for performance optimization",
          "Rendering fallback UI during errors",
          "Creating context providers",
          "Handling lifecycle methods in functional components",
        ],
        correctAnswer: 0,
      },
      {
        text: "Which React lifecycle method is used for fetching data in class components?",
        options: [
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUnmount",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the purpose of a higher-order component (HOC) in React?",
        options: [
          "To add additional functionality to an existing component",
          "To manage local state in functional components",
          "To fetch data from an API",
          "To optimize performance in class components",
        ],
        correctAnswer: 0,
      },
      {
        text: "What is the difference between React's useMemo and useCallback?",
        options: [
          "useMemo memoizes values; useCallback memoizes functions.",
          "useMemo is for class components; useCallback is for functional components.",
          "useMemo handles side effects; useCallback handles state updates.",
          "useMemo and useCallback are the same.",
        ],
        correctAnswer: 0,
      },
      {
        text: "What does the React Profiler do?",
        options: [
          "Measures the performance of React components",
          "Optimizes React component rendering",
          "Provides a way to test components",
          "Handles global application state",
        ],
        correctAnswer: 0,
      },
      {
        text: "How can you optimize performance in a React application?",
        options: [
          "Using React.memo, useMemo, and useCallback",
          "Rendering all components at once",
          "Avoiding controlled components",
          "Only using class components",
        ],
        correctAnswer: 0,
      },
    ],
  },
];
