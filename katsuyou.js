const questions = [
  { word: "かきます", type: "ない", answer: "かかない" },
  { word: "かきます", type: "ふつう", answer: "かく" },
  { word: "かきます", type: "〜て", answer: "かいて" },
  { word: "かきます", type: "〜た", answer: "かいた" },
  { word: "かきます", type: "できる", answer: "かける" },
  { word: "かきます", type: "させる", answer: "かかせる" },

  { word: "いきます", type: "ふつう", answer: "いく" },
  { word: "いきます", type: "〜ば", answer: "いけば" },
  { word: "いきます", type: "できる", answer: "いかれる" },
  { word: "いきます", type: "させる", answer: "いかせる" },

  { word: "しにます", type: "〜て", answer: "しんで" },
  { word: "しにます", type: "〜よう", answer: "しのう" },
  { word: "しにます", type: "ふつう", answer: "しぬ" },
  { word: "しにます", type: "させる", answer: "しなせる" },

  { word: "つくります", type: "ふつう", answer: "つくる" },
  { word: "つくります", type: "〜た", answer: "つくった" },
  { word: "つくります", type: "〜ば", answer: "つくれば" },
  { word: "つくります", type: "させられる", answer: "つくらせられる" },

  { word: "つかいます", type: "ふつう", answer: "つかう" },
  { word: "つかいます", type: "〜た", answer: "つかった" },
  { word: "つかいます", type: "できる", answer: "つかえる" },

  { word: "もちます", type: "ない", answer: "もたない" },
  { word: "もちます", type: "〜て", answer: "もって" },
  { word: "もちます", type: "できる", answer: "もたれる" },
  { word: "もちます", type: "させる", answer: "もたせる" },

  { word: "たべます", type: "ふつう", answer: "たべる" },
  { word: "たべます", type: "ない", answer: "たべない" },
  { word: "たべます", type: "できる", answer: "たべられる" },
  { word: "たべます", type: "させる", answer: "たべさせる" },
  { word: "たべます", type: "させられる", answer: "たべさせられる" },

  { word: "きます", type: "〜て", answer: "きて" },
  { word: "きます", type: "〜ば", answer: "くれば" },

  { word: "します", type: "ない", answer: "しない" },
  { word: "します", type: "〜た", answer: "した" },
  { word: "します", type: "〜よう", answer: "しよう" },

  { word: "きます", type: "できる", answer: "こられる" },
  { word: "きます", type: "させる", answer: "こさせる" },
  { word: "きます", type: "させられる", answer: "こさせられる" }
];

let currentQuestion;

function newQuestion(){
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];

  document.getElementById("question").innerHTML =
    currentQuestion.word + " → " + currentQuestion.type;

  document.getElementById("answer").value = "";
  document.getElementById("result").innerHTML = "";
}

function checkAnswer(){
  const input = document.getElementById("answer").value.trim();
  const result = document.getElementById("result");

  if(input === currentQuestion.answer){
    result.innerHTML = "⭕ せいかい！";
  } else {
    result.innerHTML = "❌ せいかい: " + currentQuestion.answer;
  }

  setTimeout(newQuestion, 1500);
}

newQuestion();