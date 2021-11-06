// let userName = prompt("What is your name?");

// let userAge = prompt("What is your age?");

// function getUserName() {
//   if (userName == "Ken") {
//     document.write("<h2>Welcome Monsieur " + userName + "<h2>");
//   } else {
//     document.write("<h2>Welcome " + userName + "</h2>");
//   }
// }
// // getUserName();

// function offerUserTacos() {
//   let userAnswer = prompt("Do you want a free Taco TODAY!");

//   if (userAnswer.toLowerCase() == "yes") {
//     document.write("REQUEST");
//   }
// }

// let userNumberAnswer = prompt("Please Enter a between 1-10");

// function getUserNumberOneToTen() {
//   if (userNumberAnswer > 10 || userNumberAnswer < 0) {
//     let userNumberAnswer = prompt("Try Again. Enter a between 1-10");
//   }
// }

// getUserNumberOneToTen();

function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 20) + 1;
  return randomNumber;
}

function guessingGames() {
  correctAnswer = randomNumber();
  console.log(correctAnswer);
  let guesses = 8;
  for (let i = 0; i < guesses; i++) {
    let guessLeft = guesses - i;
    let userGuess = parseInt(
      prompt(
        "Please Enter a Number Between 1 and 20. You have " +
          guessLeft +
          " guess left"
      )
    );
    while (userGuess < 1 || userGuess > 20) {
      userGuess = parseInt(prompt("Try Again,  Enter a Number 1-20"));
    }
    if (userGuess == correctAnswer) {
      alert("Congrats! You Guess It Right.");
      break;
    } else if (userGuess > correctAnswer) {
      alert('Your "Guess" is too High');
    } else if (userGuess < correctAnswer) {
      alert('Your "Guess" is too low');
    } else {
      alert("Sorry, Try Again!");
    }
  }
}
guessingGames();

function picturesOnPage() {
  let numberOfPictures = prompt(
    'How many "Tacos" do you want to display on the main page'
  );
  for (let i = 0; i < numberOfPictures; i++) {
    document.write('<img src="Images/Cabeza.jpg">');
  }
}
picturesOnPage();
