"use strict";


const birthDateString = prompt("What is your birth date? (YYYY-MM-DD)");
const birthDate = new Date(birthDateString);
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

let age = currentYear - birthDate.getFullYear();

// juster alder efter om datoen er passeret i år
if (currentDate < new Date(currentYear, birthDate.getMonth(), birthDate.getDate())) {
    age--;
}

console.log(`You are turning ${age + 1} years old this year.`);