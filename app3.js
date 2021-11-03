let userNumberAnswer = prompt("Please Enter a between 1-10");

function getUserNumberOneToTen() {
  if (userNumberAnswer > 10 || userNumberAnswer < 0) {
    let userNumberAnswer = prompt("Try Again. Enter a between 1-10");
  }
}

getUserNumberOneToTen();
