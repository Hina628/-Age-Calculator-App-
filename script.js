
let currentYear = prompt("Enter the current year:");
let birthYear = prompt("Enter your birth year:");


currentYear = parseInt(currentYear);
birthYear = parseInt(birthYear);


let age = currentYear - birthYear;

document.getElementById("current-year").innerText = currentYear;
document.getElementById("birth-year").innerText = birthYear;
document.getElementById("calculated-age").innerText = age;
