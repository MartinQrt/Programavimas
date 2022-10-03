// Su while ciklu pasirašykite, kad Jūsų vardą išvestų į console 3 kartus.
// let i = 0;
// do {
//   alert(i);
//   i++;
// } while (i < 5);

//Sukurkite kintamąjį (let combo = ""). Kiekvieną kartą paleidus ciklą į combo prisirašo Jūsų vardas (t.y. while ciklo viduje darytų combo += "Petras" ). Sukurkite programą, kur bus kintamasis (let times = 5), kuris nurodys kiek kartų į combo kintamąjį turėtų būti pridėtas Jūsų vardas. Jei times skaičius 0 arba mažiau - vis tiek bent vieną kartą įvyks ciklas ir Jūsų vardą įrašys į combo.
// let combo = '';
// const name = 'Martin';
// let times = 3;
// do {
//   combo += name;
//   times--;
// } while (times > 0);
// console.log(combo);

// /Sukurk random skaičių tarp 1 ir 5 (įskaitant abu).
// const random1 = Math.floor(Math.random() * 5) + 1;
// console.log(random1);

// const Cos = Math.cos(0);
// console.log(cos);

//Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne. Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random).
// const randomNumber = Math.floor(Math.random() * 5) + 1;
// if (randomNumber === 1) {
//   alert("You won");
// } else {
//   alert("Try again next time");
// }

const userName = prompt("Type user name");
const userAge = +prompt("Type your age");
const userRegion = navigator.language.toLocaleLowerCase();
const hasAppropriateAge = userAge >= 16;
const isLithuanianUser = userRegion === "Lt";
console.log({ userName, userAge });
if (hasAppropriateAge && isLithuanianUser) {
  const firstThreeLetters = userName.slice(0, 3);
  const randomNumber = parseInt(1_000 + Math.random() * 8_999);
  const giftCode = `${firstThreeLetters}${randomNumber}`;
  alert(`Jums priklauso nuolaidu kodas: ${giftCode}`);
}

//todo: user object
