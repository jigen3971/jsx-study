const questions = [
  { word: "かきます", type: "ない形", answer: "かかない" },
  { word: "かきます", type: "辞書形", answer: "かく" },
  { word: "かきます", type: "て形", answer: "かいて" },
  { word: "かきます", type: "た形", answer: "かいた" },
  { word: "かきます", type: "可能形", answer: "かける" },
  { word: "かきます", type: "使役形", answer: "かかせる" },

  { word: "いきます", type: "辞書形", answer: "いく" },
  { word: "いきます", type: "条件形", answer: "いけば" },
  { word: "いきます", type: "可能形", answer: "いかれる" },
  { word: "いきます", type: "使役形", answer: "いかせる" },

  { word: "しにます", type: "て形", answer: "しんで" },
  { word: "しにます", type: "意向形", answer: "しのう" },
  { word: "しにます", type: "辞書形", answer: "しぬ" },
  { word: "しにます", type: "使役形", answer: "しなせる" },

  { word: "つくります", type: "辞書形", answer: "つくる" },
  { word: "つくります", type: "た形", answer: "つくった" },
  { word: "つくります", type: "条件形", answer: "つくれば" },
  { word: "つくります", type: "使役受身形", answer: "つくらせられる" },

  { word: "つかいます", type: "辞書形", answer: "つかう" },
  { word: "つかいます", type: "た形", answer: "つかった" },
  { word: "つかいます", type: "可能形", answer: "つかえる" },

  { word: "もちます", type: "ない形", answer: "もたない" },
  { word: "もちます", type: "て形", answer: "もって" },
  { word: "もちます", type: "可能形", answer: "もたれる" },
  { word: "もちます", type: "使役形", answer: "もたせる" },

  { word: "たべます", type: "辞書形", answer: "たべる" },
  { word: "たべます", type: "ない形", answer: "たべない" },
  { word: "たべます", type: "可能形", answer: "たべられる" },
  { word: "たべます", type: "使役形", answer: "たべさせる" },
  { word: "たべます", type: "使役受身形", answer: "たべさせられる" },

  { word: "きます", type: "て形", answer: "きて" },
  { word: "きます", type: "条件形", answer: "くれば" },

  { word: "します", type: "ない形", answer: "しない" },
  { word: "します", type: "た形", answer: "した" },
  { word: "します", type: "意向形", answer: "しよう" },

  { word: "きます", type: "可能形", answer: "こられる" },
  { word: "きます", type: "使役形", answer: "こさせる" },
  { word: "きます", type: "使役受身形", answer: "こさせられる" }
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
    result.innerHTML = "⭕ 正解！";
  } else {
    result.innerHTML = "❌ 正解: " + currentQuestion.answer;
  }

  setTimeout(newQuestion, 1500);
}

newQuestion();