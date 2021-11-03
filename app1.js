let userName = prompt("What is your name?");

let userAge = prompt("What is your age?");

function getUserName() {
  if (userName == "Ken") {
    document.write("<h2>Welcome Monsieur " + userName + "<h2>");
  } else {
    document.write("<h2>Welcome " + userName + "</h2>");
  }
}
getUserName();
