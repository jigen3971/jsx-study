const hospitalQuestions = [
  {
    question: "どこが いたいですか。",
    answers: [
      "おなかが いたいです。",
      "あたまが いたいです。",
      "のどが いたいです。",
      "はが いたいです。"
    ]
  },
  {
    question: "いつからですか。",
    answers: [
      "きのうからです。",
      "おとといからです。",
      "3日前からです。",
      "1週間前からです。"
    ]
  },
  {
    question: "たべられますか。",
    answers: [
      "はい、たべられます。",
      "すこし たべられます。",
      "いいえ、たべられません。"
    ]
  }
];

const medicineQuestions = [
  {
    question: "どんな くすりが ほしいですか。",
    answers: [
      "のどの くすりが ほしいです。",
      "あたまの くすりが ほしいです。",
      "おなかの くすりが ほしいです。"
    ]
  },
  {
    question: "いつ のみますか。",
    answers: [
      "あさ のみます。",
      "よる のみます。",
      "ごはんの あとで のみます。"
    ]
  }
];

let questions = hospitalQuestions;
let currentQuestion;

function newQuestion(){
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];

  document.getElementById("question").innerHTML = currentQuestion.question;
  document.getElementById("roleText").innerHTML = "あなたは かんじゃです。";
  document.getElementById("answer").value = "";

  document.getElementById("result").innerHTML =
    "こたえの れい：<br>" +
    currentQuestion.answers.map(a => "・" + a).join("<br>");

  speakQuestion();
}

function checkAnswer(){
  const input = document.getElementById("answer").value.trim();
  const result = document.getElementById("result");

  if(input === ""){
    result.innerHTML = "こたえを 書いてください。";
    return;
  }

  result.innerHTML =
    "いいです！<br><br>こたえの れい：<br>" +
    currentQuestion.answers.map(a => "・" + a).join("<br>");

  speakText(input);
}

function speakQuestion(){
  speakText(currentQuestion.question);
}

function speakText(text){
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  speechSynthesis.speak(utterance);
}

function setCategory(category){
  if(category === "hospital"){
    questions = hospitalQuestions;
  }

  if(category === "medicine"){
    questions = medicineQuestions;
  }

  newQuestion();
}

newQuestion();