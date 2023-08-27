
const quizData = [
  {
      question:
          "Which city is the capital of pakistan?",
      a: "Lahore",
      b: "Multan",
      c: "Islamabad",
      d: "Karachi",
      correct: "c",
  },
  {
      question:
          "In which country is European Parliament?",
      a: "Germany",
      b: "France",
      c: "Italy",
      d: "Spain",
      correct: "b",
  },
  {
      question:
          "Which is the 2ad Highest mountain in the world ?",
      a: "Mount Everest",
      b: "Mount Makalu",
      c: "Mount K2",
      d: "Mount Lohtse",
      correct: "c",
  },
  {
      question: 
      "Which is the beautiful country in Europe?",
      a: "Austria",
      b: "Switzerland",
      c: "Greece",
      d: "Italy",
      correct: "b",
  },
];


const quiz = document.querySelector(".quiz-header");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  if (currentQuiz < quizData.length) {
      questionEl.innerText = quizData[currentQuiz].question;
      a_text.innerText = quizData[currentQuiz].a;
      b_text.innerText = quizData[currentQuiz].b;
      c_text.innerText = quizData[currentQuiz].c;
      d_text.innerText = quizData[currentQuiz].d;
  } else {
      quiz.innerText = `Your Score is ${score}`;
      submitBtn.innerText = "Restart";
  }
}

function deselectAnswers() {
  answerEls.forEach((e) => {
      e.checked = false;
  });
  loadQuiz();
}

function getSelected() {
  answerEls.forEach((e) => {
      if (e.checked) {
          if (e.id == quizData[currentQuiz].correct) {
              score++;
          }
      }
  });

  currentQuiz++;
  deselectAnswers();
}

submitBtn.addEventListener("click", () => {

  if (currentQuiz < quizData.length) {
      getSelected();
  }
  else {
      location.reload();
  }
});