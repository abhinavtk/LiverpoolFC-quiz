var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("Please enter your name: ");

console.log("Welcome ",userName);
console.log('Lets play "YOU WILL NEVER WALK ALONE!"');
console.log("The Liverpool FC quiz.")
console.log("-------------------------------")

questionList = [
  {
    question: "Q1. The home ground of Liverpool FC is:\n(a) Old Trafford \t(b) Stamford Bridge\n(c) Anfield \t(d) Emirates Stadium\n", answer:"c"
    },
  {
    question: "Q2. Who is the current manager of Liverpool FC?\n(a) Pep Guardiola (b) Jürgen Klopp\n(c) José Mourinho (d) Thomas Tuchel\n", answer:"b"
    },
  {
    question: "Q3. In which year was Liverpool FC founded?\n(a) 1878\t(b) 1888\n(c) 1892 \t(d) 1901\n", answer:"c"
  },
  {
    question: "Q4. Who is the highest scorer for Liverpool in the 2020/21 season?\n (a) Sadio Mané (b) Roberto Firmino\n (c) Diogo Jota (d) Mohamed Salah\n", answer:"d"
  },
  {
    question: "Q5. How many European Cups did Liverpool win so far?\n (a) 2 \t(b) 4 \n (c) 6 \t(d) 8\n", answer: "c"
  },
  {
    question: "Q6. Liverpool play derby against which team? \n(a) Everton \t(b) Manchester United\n(c) Chelsea \t (d) Manchester City\n", answer:"a"
  },
{
  question:"Q7. Liverpool had one of the greatest comebacks against which team in the 2019 Champions League semifinal?\n(a) Real Madrid\t(b) Barcelona\n(c) Bayern Munich\t(d) Tottenham Hotspur\n", answer:"b"
},
{
  question:"Q8. Liverpool won their first premeir league title in which year?\n(a) 1995\t(b) 2004\n(c) 2011\t(d) 2020\n", answer:"d"
},
{
  question:"Q9. Who led Liverpool to win the 2005 Champions League title?\n(a) Kenny Dalgish\t(b) Robbie Fowler\n(c) Steven Gerrard\t(d) Jordan Henderson\n", answer:"c"
},
{
  question:"Q10. Who is the all time highest goal scorer for Liverpool?\n(a) Ian Rush\t(b) Kenny Dalgish\n(c) Robbie Fowler\t(d) Steven Gerrard\n", answer:"a"
}
];

function quiz(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase()===answer){
    console.log("Correct answer");
    score+=1;
  }
  else {
    console.log("Wrong answer");
  }
  console.log("Current score: ",score)
  console.log("--------------------------------");

}

function quizLoop(){
  console.log("Level 1");
  console.log("-------------------------------");
  for (var i=0; i<5;i++){
    quiz(questionList[i].question, questionList[i].answer);
  }
  if (score>3) {
    console.log("Congrats you qualify for Level 2.")
    console.log("-------------------------------");
    console.log("Level 2");
    console.log("-------------------------------");
    for (var i=5; i<questionList.length;i++){
    quiz(questionList[i].question, questionList[i].answer);
  }
  }
  else{
    console.log("Sorry, You don't qualify for Level 2.")
    console.log("-------------------------------")

  }
}

highScores= [
  {name: "Rajan",score:8},
  {name:"Jishna", score:6}
]
var highScore = Object.values(highScores[0])[1];


function finalScore(){
  console.log("Your final score is: ", score);
  
  if (score>highScore){
    console.log("Congrats you are the highest scorer of this quiz!")
  }
  console.log("-------------------------------");
  console.log("High scores in this quiz.");
  highScores.map(score=>(console.log(score.name,":",score.score)));
  console.log("If you scored higher, ping me and I'll update the score board.");
  console.log("-------------------------------");
  console.log("Thank you for playing You'll Never Walk Alone!");
}

quizLoop();
finalScore();