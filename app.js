const fs = require("fs");

const genders = ["male", "female"];

const maleNames = [
  "Lawson",
  "Axel",
  "Misael",
  "Seth",
  "Holden",
  "Tomas",
  "Jamari",
  "Tate",
  "Heath",
  "Lane",
];

const femaleNames = [
  "Makenzie",
  "Mariana",
  "Jayda",
  "Naima",
  "Sophie",
  "Kendal",
  "Evie",
  "Crystal",
  "Melissa",
  "Jazlynn",
];

const lastNames = [
  "Snow",
  "Wells",
  "Quinn",
  "Gardner",
  "Spencer",
  "Macias",
  "Mata",
  "Cunningham",
  "Prince",
  "Kline",
];

const people = [];

const randomChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

[...Array(20).keys()].forEach(() => {
  const person = {};

  person.gender = randomChoice(genders);

  person.name = randomChoice(
    person.gender === "male" ? maleNames : femaleNames
  );

  person.lastName = randomChoice(lastNames);

  person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

  person.email =
    `${person.name}.${person.lastName}-${person.age}@gmail.com`.toLowerCase();

  person.phone = Math.floor(
    (Math.random() + Math.floor(Math.random() * 9) + 1) * Math.pow(10, 8)
  );

  person.uniqueId = Math.random().toString(36).substring(2, 9);

  people.push(person);
});

fs.writeFile("people.json", JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
