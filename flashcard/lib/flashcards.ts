import { Flashcard } from "@/types/flashcard";

export const flashcards: Flashcard[] = [
   {
    id: 1,
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped and can be redeclared. let is block-scoped and can be reassigned but not redeclared. const is block-scoped and cannot be reassigned or redeclared.",
  },
  {
    id: 2,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that remembers its outer variables even after the outer function has finished executing.",
  },
  {
    id: 3,
    question: "What is the difference between == and ===?",
    answer:
      "== compares values with type conversion, while === compares both value and type without conversion.",
  },
  {
    id: 4,
    question: "What is the DOM?",
    answer:
      "The DOM (Document Object Model) is a tree-like representation of an HTML document that JavaScript can manipulate.",
  },
  {
    id: 5,
    question: "What is an event in JavaScript?",
    answer:
      "An event is an action that occurs in the browser, such as a click, key press, or page load.",
  },
  {
    id: 6,
    question: "What is an arrow function?",
    answer:
      "An arrow function is a shorter syntax for writing functions in JavaScript, and it does not have its own 'this' context.",
  },
  {
    id: 7,
    question: "What is asynchronous programming?",
    answer:
      "Asynchronous programming allows tasks to run without blocking the main thread, often using promises or async/await.",
  },
  {
    id: 8,
    question: "What is a Promise in JavaScript?",
    answer:
      "A Promise is an object that represents a value that may be available now, later, or never.",
  },
];