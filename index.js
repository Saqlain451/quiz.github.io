const quizDB = [
  [
    {
      ques: "Who is the father of HTML?",
      ans1: "Rasmus Lerdorf",
      ans2: "Tim Berners-Lee",
      ans3: "Brendan Eich",
      ans4: "Sergey Brin",
      ans: "option2",
    },
    {
      ques: "Which of the following tag is used to embed css in html page?",
      ans1: "<css>",
      ans2: "<!DOCTYPE html>",
      ans3: "<script>",
      ans4: "<style>",
      ans: "option4",
    },
    {
      ques: "What is the correct syntax of doctype in HTML5?",
      ans1: "</doctype html>",
      ans2: "<doctype html>",
      ans3: "<doctype html!>",
      ans4: "<!doctype html>",
      ans: "option4",
    },
    {
      ques: "Which of the following CSS selectors are used to specify a group of elements?",
      ans1: "tag",
      ans2: "id",
      ans3: "class",
      ans4: "both class and tag",
      ans: "option3",
    },
    {
      ques: "Which of the following is used to read an HTML page and render it?",
      ans1: "Web server",
      ans2: "Web network",
      ans3: "Web browser",
      ans4: "Web matrix",
      ans: "option3",
    },
  ],
  [
    {
      ques: "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
      ans1: "HTML",
      ans2: "PHP",
      ans3: "CSS",
      ans4: "Ajax",
      ans: "option3",
    },
    {
      ques: "Which of the following CSS framework is used to create a responsive design?",
      ans1: "django",
      ans2: "rails",
      ans3: "larawell",
      ans4: "bootstrap",
      ans: "option4",
    },
    {
      ques: "In which part of the HTML metadata is contained?",
      ans1: "head tag",
      ans2: "title tag",
      ans3: "html tag",
      ans4: "body tag",
      ans: "option1",
    },
    {
      ques: "Which of the following CSS property is used to make the text bold?",
      ans1: "text-decoration: bold",
      ans2: "font-weight: bold",
      ans3: "font-style: bold",
      ans4: "text-align: bold",
      ans: "option2",
    },

    {
      ques: "Which of the following is not a HTML5 tag?",
      ans1: "<track>",
      ans2: "<video>",
      ans3: "<slider>",
      ans4: "<source>",
      ans: "option3",
    },
  ],
  [
    {
      ques:"Which of the following elements in HTML5 defines video or movie content?",
      ans1:"<video>",
      ans2:"<movie>",
      ans3:"<audio>",
      ans4:"<media>",
      ans:"option1",
    },
    {
      ques:"Which element is used to get highlighted text in HTML5?",
      ans1:"<u>",
      ans2:"<mark>",
      ans3:"<highlight>",
      ans4:"<b>",
      ans:"option2",
    },
    {
      ques:"How do we write comments in HTML?",
      ans1:"</…….>",
      ans2:"<!……>",
      ans3:"</……/>",
      ans4:"<…….!>",
      ans:"option2",
    },
    {
      ques:"Which of the following CSS style property is used to specify an italic text?",
      ans1:"style",
      ans2:"font",
      ans3:"font-style",
      ans4:"@font-face",
      ans:"option3",
    },
    {
      ques:"Which of the following is the correct syntax to link an external style sheet in the HTML file?",
      ans1:"<link rel=”stylesheet” href=”style.css” />",
      ans2:"<link rel=”stylesheet” src=”style.css” />",
      ans3:"<style rel=”stylesheet” src=”style.css” />",
      ans4:"<style rel=”stylesheet” link=”style.css” />",
      ans:"option1",
    },
  ],
  [
    {
      ques:"Which HTML tag is used for making character appearance bold?",
      ans1:"<u>content</u>",
      ans2:"<b>content</b>",
      ans3:"<br>content</br>",
      ans4:"<i>content</i>",
      ans:"option2",
    },
    {
      ques:"Which HTML tag is used to insert an image?",
      ans1:"<img url=”htmllogo.jpg” />",
      ans2:"<img alt=”htmllogo.jpg” />",
      ans3:"<img src=”htmllogo.jpg” />",
      ans4:"<img link=”htmllogo.jpg” />",
      ans:"option3",
    },
    {
      ques:"HTML is a subset of ___________",
      ans1:"SGMT",
      ans2:"SGML",
      ans3:"SGME",
      ans4:"XHTML",
      ans:"option2",
    },
    {
      ques:" Which of the following is the first CSS specification to become an official W3C Recommendation?",
      ans1:"CSS level 2",
      ans2:"(X)HTML CSS",
      ans3:"CSS level 1",
      ans4:"CSS level 2.1",
      ans:"option3",
    },
    {
      ques:"Which of the following function defines a linear gradient as a CSS image?",
      ans1:"gradient()",
      ans2:"linear-gradient()",
      ans3:"grayscale()",
      ans4:"image()",
      ans:"option2",
    },
  ]
];

const question = document.querySelector(".ques");
const input = document.querySelectorAll("input");
const answer1 = document.querySelector(".ans1");
const answer2 = document.querySelector(".ans2");
const answer3 = document.querySelector(".ans3");
const answer4 = document.querySelector(".ans4");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const ansList = document.querySelector("li");
const getMarks = () => {
  let result;
  input.forEach((element) => {
    if (element.checked) {
      result = element.id;
    }
  });
  return result;
};

const removeRadio = () => {
  input.forEach((element) => {
    element.checked = false;
  });
};

let quesCount = 0;
let numCount = 0;
const ranQues = Math.floor(Math.random() * quizDB.length);
const loadQuestion = (questions) => {
  question.innerHTML = questions.ques;
  answer1.innerText = questions.ans1;
  answer2.innerText = questions.ans2;
  answer3.innerText = questions.ans3;
  answer4.innerText = questions.ans4;
};

loadQuestion(quizDB[ranQues][quesCount]);

button.addEventListener("click", () => {
  const inputRes = getMarks();
  if (inputRes === quizDB[ranQues][quesCount].ans) {
    numCount++;
  }
  removeRadio();
  quesCount++;
  console.log(
    "🚀 ~ file: index.js ~ line 92 ~ button.addEventListener ~  quesCount",
    quesCount
  );
  if (quesCount < quizDB[ranQues].length) {
    loadQuestion(quizDB[ranQues][quesCount]);
  } else {
    result.style.display = "block";
    result.innerHTML = `
                        <p>You Scored ${numCount}/${quizDB[ranQues].length}</p>
                        <button class="btn btn-success d-flex mx-auto" onclick="location.reload()">play again</button>`;
  }
});
