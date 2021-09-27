
const readlineSync = require('readline-sync')
const questionAnswerList = [
  {
    question : "What is Iron Man's real name ?" ,
    options : ["Tony Stark","Peter Parker","Steve Rogers"],
    correctAnswer : "1"
  } ,
  {
    question : "What is name of Spiderman's uncle ?" ,
    options : ["Uncle Jack", "Unlce Bruce", "Unlce Ben"],
    correctAnswer : "3"
  },
  {
    question : "Who was the first actor to play Spiderman in a live action film ?" ,
    options : ["Andrew Garfield" , "Tobey Maguire" , "Tom Holland"],
    correctAnswer : "2"
  },
  {
    question : "What is the name of the upcoming Spider-Man movie?" ,
    options : ["No Way Home" , "Far From Home" , "Always Home"],
    correctAnswer : "1"

  },
  {
    question : "Who was the first Avenger" ,
    options : ["Black Panther" , "Captain America" , "Spider-Man"],
    correctAnswer : "2"

  }
]

const lengthOfArray = questionAnswerList.length

let score = 0
let userName = ""

function quizTime(){

  userName = readlineSync.question("Whats your name?")

  for(let i = 0 ; i < lengthOfArray ; i++){
    
    console.log(questionAnswerList[i].question)
    for(let j = 0; j < questionAnswerList[i].options.length ; j++ ){
      console.log(j+1 + "." + questionAnswerList[i].options[j])
    }
    let userAnswer = readlineSync.question("Please select the right number")
    if(validate(userAnswer,i)){
      console.log("Your answer is correct")
      score = score + 1
    }
    else{
      console.log("Your asnwer is wrong")
    }
    console.log("Current score is " + score)
    console.log("---------------")

  }

  console.log("The quiz has ended")
  console.log("Yay " + userName + " your final score is " + score)
}

function validate(answer,arrayPosition){

  if(answer === questionAnswerList[arrayPosition].correctAnswer){
    return true
  }
  else{
    return false
  }
}

quizTime()








