// function alertName(name) {
//   alert(name);
// }
// alertName("Martin");

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 5) + 1;
//   }
//   console.log(generateRandomNumber());

// function getNameAndSurnameLength(name, surname) {
//   return name.length + surname.length;
// }
// console.log(getNameAndSurnameLength("Martin", "Kurtin"));

// function getLettersByIndex(index) {
//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   return alphabet[index];
// }
// console.log(getLettersByIndex(15));

// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

// function calculate(n1, n2, operator) {
//   switch (operator) {
//     case "sum":
//       return n1 + n2;
//     case "sub":
//       return n1 - n2;
//     case "div":
//       return n1 / n2;
//     case "multi":
//       return n1 * n2;
//   }
// }
// console.log(calculate(1, 2, "sum"));

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 10 + 1);
// }
// function squareNumber(number) {
//   return Math.pow(number, 2);
// }
// console.log(squareNumber(generateRandomNumber()));

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }
// document.querySelector("button").addEventListener("click", () => {
//   const randomNumber = generateRandomNumber();
//   document.querySelector("h1").innerText = randomNumber;
// });

// ------------------------
// HTML 
// <button id='one'>1</button>
// <button id='two'>2</button>
// <button id='three'>3</button>

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 3) +1;
//   }
//   const randomNumber = generateRandomNumber();
//   console.log(randomNumber);
  
//   document.getElementById('one').addEventListener('click', () => randomNumber === 1 ? alert("YAY") : alert("Nay"));
//   document.getElementById('two').addEventListener('click', () => randomNumber === 2 ? alert("YAY") : alert("Nay"));
//   document.getElementById('three').addEventListener('click', () => randomNumber === 3 ? alert("YAY") : alert("Nay"));