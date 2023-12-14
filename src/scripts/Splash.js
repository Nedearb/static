document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "Made By Monkeys Near You",
    "Adolf 2024",
    "Grand Wizard",
    "Black Friday Sale Get Jamal Now!"
  ];
  const array = ["string1", "string2", "string3"];
  const randomString = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("splash").innerHTML = randomString;

});
