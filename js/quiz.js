var questions = [{
  question: "Holkar Trophy is associated with which sport?",
  options: {
    a: "Bridge",
    b: "Hockey",
    c: "Football",
    d: "Badminton",
  },
  correctOption: "a",
}, {
  question: "Who is the first Indian woman to win an Asian Games gold in 400m run?",
  options: {
    a: "M.L. Valsamma",
    b: "P.T. Usha",
    c: "Kamaljit Sandhu",
    d: "K.Malleshwari",
  },
  correctOption: "b",
}, {
  question: "Term Chinaman is related to which sports?",
  options: {
    a: "Football",
    b: "Hockey",
    c: "Golf",
    d: "Cricket",
  },
  correctOption: "d",
}, {
  question: "With which game does Davis Cup is associated?",
  options: {
    a: "Hockey",
    b: "Table Tennis",
    c: "Lawn Tennis",
    d: "Polo",
  },
  correctOption: "c",
}, {
  question: "The first Indian to cross seven important seas by swimming ____?",
  options: {
    a: "Amrendra Singh",
    b: "Bula Chaudhury",
    c: "Junko Taibei",
    d: "Yuri Gagarin",
  },
  correctOption: "b",
}, {
  question: "Wellington Trophy is related to which game?",
  options: {
    a: "Rowing",
    b: "Hockey",
    c: "Tennis",
    d: "Polo",
  },
  correctOption: "a",
}, {
  question: "With which game does Santosh Trophy is associated?",
  options: {
    a: "Tennis",
    b: "Cricket",
    c: "National Football",
    d: "Golf",
  },
  correctOption: "c",
}, {
  question: "What is the name of person which controls a football match?",
  options: {
    a: "A referee",
    b: "An Umpire",
    c: "A spectator",
    d: "A goalkeeper",
  },
  correctOption: "a",
}, {
  question: "The 2017 Indian Premier League (IPL 2017) first match on 5 April, 2017 was held in?",
  options: {
    a: "Banglore",
    b: "Delhi",
    c: "Hyderabad",
    d: "Kolkata",
  },
  correctOption: "c",
}, {
  question: "The name Kunjarani Devi is associated with?",
  options: {
    a: "Weight Lifting",
    b: "Target Shooting",
    c: "Athletics",
    d: "Swimming",
  },
  correctOption: "a",
}, {
  question: "The National Game of Japan is?",
  options: {
    a: "Tennis",
    b: "Karate",
    c: "Ice Hockey",
    d: "Sumo wrestling",
  },
  correctOption: "d",
}, {
  question: "Which one of the following Cricketers has been declared by the ICC as 'Cricketer of the Twentieth Century'?",
  options: {
    a: "Sachin Tendulkar",
    b: "Kapil Dev",
    c: "Rahul Dravid",
    d: "Anil Kumble",
  },
  correctOption: "b",
}, {
  question: "Against which team did Virender Sehwag make his one day international debut?",
  options: {
    a: "New Zealand",
    b: "Sri lanka",
    c: "Pakistan",
    d: "South Africa",
  },
  correctOption: "c",
}, {
  question: "The term ' Gambit ' is associated with?",
  options: {
    a: "Chess",
    b: "Tennis",
    c: "Basket ball",
    d: "Baseball",
  },
  correctOption: "a",
}, {
  question: "Dizzy is the nickname of what Australian player?",
  options: {
    a: "Adam Gilchrist",
    b: "Jason Gillespie",
    c: "Glenn McGrath",
    d: "Brett Lee",
  },
  correctOption: "b",
}, {
  question: "Oval stadium in England is associated with?",
  options: {
    a: "Polo",
    b: "Cricket",
    c: "Hockey",
    d: "Football",
  },
  correctOption: "b",
}, {
  question: "The 9th South Asian Federation Games were held in which of the following cities?",
  options: {
    a: "Islamabad",
    b: "Hyderabad",
    c: "Colombo",
    d: "None of these",
  },
  correctOption: "a",
}, {
  question: "'Queen's berry rules' is the name given to the rules in?",
  options: {
    a: "Cricket",
    b: "Tennis",
    c: "Hockey",
    d: "Boxing",
  },
  correctOption: "d",
}, {
  question: "How long are professional Golf Tour Players allotted per shot?",
  options: {
    a: "22 seconds",
    b: "36 seconds",
    c: "41 seconds",
    d: "45 seconds",
  },
  correctOption: "d",
}, {
  question: "Ezra cup is associated with which sports?",
  options: {
    a: "Hockey",
    b: "Polo",
    c: "Rowing",
    d: "Football",
  },
  correctOption: "b",
}];
const resultContainer = document.getElementsByClassName('result-container')[0];
const desiredAmountOfQuestion = parseInt(prompt("How much questions do you want to take?", 5));
let copyOfQuestions = [...questions];
let amountOfCorrectAnswers = 0;
let percentageOfCorrectAnswers = 0;
let resultText = null;

for (let i = 0; i < desiredAmountOfQuestion; i++) {
  const questionIndex = Math.round(Math.random() * copyOfQuestions.length) % copyOfQuestions.length;
  const questionDetails = copyOfQuestions[questionIndex];
  const options = Object.keys(questionDetails.options).map(option => {
    return `${option}. ${questionDetails.options[option]}`;
  });
  const hint = "Please, type the correct option[a/b/c/d] (ex: a)";
  const question = `${questionDetails.question}\n${options.join("\n")}\n${hint}`;
  const givenAnswer = prompt(question, "");
  const isCorrect = givenAnswer.toLowerCase() === questionDetails.correctOption;
  const questionContainer = `<div class="question-container">
    <div class="question">
      ${questionDetails.question}
    </div>
    <div class="answer">
      You guessed ${givenAnswer}) ${questionDetails.options[givenAnswer]}
      <br>
      ${isCorrect ? "CORRECT" : `INCORRECT: The correct answer is ${questionDetails.correctOption}) ${questionDetails.options[questionDetails.correctOption]}`}
    </div>
  </div>`;

  if (isCorrect) {
    amountOfCorrectAnswers++;
  }
  resultContainer.innerHTML = resultContainer.innerHTML + questionContainer;
  copyOfQuestions.splice(questionIndex, 1);
}

percentageOfCorrectAnswers = ((amountOfCorrectAnswers / desiredAmountOfQuestion) * 100).toFixed(1);
resultText = `<div>
  You answered ${amountOfCorrectAnswers} out of ${desiredAmountOfQuestion} questions correctly (${percentageOfCorrectAnswers}%).
</div>`;

resultContainer.innerHTML = resultContainer.innerHTML + resultText;
