
const quizDB = [
    {
        ques : "Who is the father of HTML?",
        ans1 : "Rasmus Lerdorf",
        ans2 : "Tim Berners-Lee",
        ans3 : "Brendan Eich",
        ans4 : "Sergey Brin",
        ans  : "option2",
    },
    {
        ques : "Which of the following tag is used to embed css in html page?",
        ans1 : "<css>",
        ans2 : "<!DOCTYPE html>",
        ans3 : "<script>",
        ans4 : "<style>",
        ans  : "option4",
    },
    {
        ques : "What is the correct syntax of doctype in HTML5?",
        ans1 : "</doctype html>",
        ans2 : "<doctype html>",
        ans3 : "<doctype html!>",
        ans4 : "<!doctype html>",
        ans  : "option4"
    },
    {
        ques : "Which of the following CSS selectors are used to specify a group of elements?",
        ans1 : "tag",
        ans2 : "id",
        ans3 : "class",
        ans4 : "both class and tag",
        ans  : "option3",
    },
    {
        ques : "Which of the following is used to read an HTML page and render it?",
        ans1 : "Web server",
        ans2 : "Web network",
        ans3 : "Web browser",
        ans4 : "Web matrix",
        ans  : "option3"
    },
    {
        ques : "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        ans1 : "HTML",
        ans2 : "PHP",
        ans3 : "CSS",
        ans4 : "Ajax",
        ans  : "option3",
    },
    {
        ques : "Which of the following CSS framework is used to create a responsive design?",
        ans1 : "django",
        ans2 : "rails",
        ans3 : "larawell",
        ans4 : "bootstrap",
        ans  : "option4",
    },
    {
        ques : "In which part of the HTML metadata is contained?",
        ans1 : "head tag",
        ans2 : "title tag",
        ans3 : "html tag",
        ans4 : "body tag",
        ans  : "option1"
    },
    {
        ques : "Which of the following CSS property is used to make the text bold?",
        ans1 : "text-decoration: bold",
        ans2 : "font-weight: bold",
        ans3 : "font-style: bold",
        ans4 : "text-align: bold",
        ans  : "option2",
    },
   
    {
        ques : "Which of the following is not a HTML5 tag?",
        ans1 : "<track>",
        ans2 : "<video>",
        ans3 : "<slider>",
        ans4 : "<source>",
        ans  : "option3"
    },
]

const question = document.querySelector(".ques");
const input = document.querySelectorAll("input");
const answer1 = document.querySelector(".ans1");
const answer2 = document.querySelector(".ans2");
const answer3 = document.querySelector(".ans3");
const answer4 = document.querySelector(".ans4");
const button = document.querySelector(".btn");
const result = document.querySelector(".result")     

const getMarks = ()=>{
    let result;
    input.forEach((element)=>{
        if(element.checked){
            result = element.id;
        }
    })
    return result;
}


const removeRadio = ()=>{
    input.forEach((element)=>{
        element.checked = false;
    })
}

let quesCount = 0;
let numCount = 0;
const loadQuestion = ()=>{
    question.innerHTML=quizDB[quesCount].ques;
    answer1.innerText = quizDB[quesCount].ans1;
    answer2.innerText = quizDB[quesCount].ans2;
    answer3.innerText = quizDB[quesCount].ans3;
    answer4.innerText = quizDB[quesCount].ans4;
}

loadQuestion();

button.addEventListener("click",()=>{
   const inputRes= getMarks();
   if(inputRes === quizDB[quesCount].ans){
        numCount++;
   }
   removeRadio();
   quesCount++;
   console.log("🚀 ~ file: index.js ~ line 92 ~ button.addEventListener ~  quesCount",  quesCount)
   if(quesCount<quizDB.length){
    loadQuestion();
   }else{
        result.style.display = "block";
        result.innerHTML = `
                        <p>You Scored ${numCount}/${quizDB.length}</p>
                        <button class="btn btn-success d-flex mx-auto" onclick="location.reload()">play again</button>`
   }

})
