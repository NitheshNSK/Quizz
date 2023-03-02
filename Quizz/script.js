var savetimer=0;
//for timer running
var countDown = setInterval(function() {
    var timer = document.getElementById("timer");
    var seconds = parseInt(timer.textContent);
    seconds--;
    timer.textContent = seconds;
    if (seconds == 0) {
      clearInterval(countDown);
      alert("time is up");
    }
  }, 1000);




//question data base
const questions = [
  {
      question: "How many days makes a week ?",
      optionA: "10 days",
      optionB: "14 days",
      optionC: "5 days",
      optionD: "7 days",
      correctOption: "optionD"
  },{
      question: "How many weeks makes a month ?",
      optionA: "4 weeks",
      optionB: "14  weeks",
      optionC: "5  weeks",
      optionD: "7  weeks",
      correctOption: "optionA"
  }

]
//variable declaration
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

//inputing dom question and answer
function NextQuestion(index) {
  
      const currentQuestion = questions[index]
      document.getElementById("question-number").innerHTML = questionNumber
      document.getElementById("display-question").innerHTML = currentQuestion.question;
      document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
      document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
      document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
      document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
      
}

//for next question
function handleNextQuestion() {
  checkForAnswer()
  unCheckRadioButtons()
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(() => {
      if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
      }resetOptionBackground();
      
  }, 1000);
}

//to check the selected option is correct or not
function checkForAnswer() {
  const currentQuestion = questions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })


  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++ //adding to player's score
          indexNumber++ //adding 1 to index so has to display next question..
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          wrongAttempt++ //adds 1 to wrong attempts 
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}


// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}




