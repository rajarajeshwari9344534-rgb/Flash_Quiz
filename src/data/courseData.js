const courseData = {
  html: {
    title: "HTML Course",
    lessons: [
      { id: 1, title: "Introduction to HTML", videoId: "SqcY0GlETPk" },
      { id: 2, title: "HTML Elements and Tags", videoId: "qz0aGYrrlhU" },
      { id: 3, title: "Forms and Input", videoId: "fNcJuPIZ2WE" },
    ],
    questions: [
      {
        question_text: "What does HTML stand for?",
        option_a: "Hyper Text Markup Language",
        option_b: "High Tech Modern Language",
        option_c: "Hyper Transfer Modal Logo",
        option_d: "Hyperlink Textual Memory Link",
        correct_option: "A",
      },
      {
        question_text: "Which tag is used to create a hyperlink?",
        option_a: "<link>",
        option_b: "<a>",
        option_c: "<href>",
        option_d: "<url>",
        correct_option: "B",
      },
    ],
  },
  css: {
    title: "CSS Course",
    lessons: [
      { id: 1, title: "CSS Fundamentals", videoId: "1Rs2ND1ryYc" },
      { id: 2, title: "Box Model and Flexbox", videoId: "jV8B24wSN5o" },
      { id: 3, title: "CSS Grid Layout", videoId: "8gXW-8V4v8I" },
    ],
    questions: [
      {
        question_text: "What does CSS stand for?",
        option_a: "Colorful Style Sheets",
        option_b: "Computer Style System",
        option_c: "Cascading Style Sheets",
        option_d: "Creative Standard Style",
        correct_option: "C",
      },
      {
        question_text: "Which property is used to change background color?",
        option_a: "color",
        option_b: "background-color",
        option_c: "bgcolor",
        option_d: "fill",
        correct_option: "B",
      },
    ],
  },
  js: {
    title: "JavaScript Course",
    lessons: [
      { id: 1, title: "JS Variables and Types", videoId: "hKB-YGF18SY" },
      { id: 2, title: "Async/Await & Promises", videoId: "8aGhZQkoFbQ" },
      { id: 3, title: "DOM Manipulation", videoId: "y17RuWkWdn8" },
    ],
    questions: [
      {
        question_text: "Which keyword is used to define a constant in JS?",
        option_a: "const",
        option_b: "let",
        option_c: "var",
        option_d: "static",
        correct_option: "A",
      },
      {
        question_text: "Which method is used to parse a JSON string?",
        option_a: "JSON.stringify()",
        option_b: "JSON.parse()",
        option_c: "parse.JSON()",
        option_d: "JSON.toObject()",
        correct_option: "B",
      },
    ],
  },
};

export default courseData;