// Sukurkite variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Aprašykite Switch, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// BMW group priklauso: BMW, Mini, Rolls-Royce.

// const car = "Audi";
// switch (car) {
//   case "VW":
//   case "Audi":
//   case "Bentley":
//   case "Lamborghini":
//   case "Porsche":
//     console.log("VW Group");
//     break;
//   case "Mini":
//   case "BMW":
//   case "Rolls-Royce":
//     console.log("BMW Group");
//     break;
//   default:
//     console.log("Nei VW group, nei BMW group");
// }

// Sukurkite variable 'userInput' ir pradžioje prilyginkite 'Obuolys'. Su Switch statement apsirašyk, kad 'userInput' reikmšmė yra - vaisius ar daržovė. Pridėkite bent 5 kiekvienos kategorijos

// const userInput = "Obuolys";
// switch (userInput) {
//   case "Bulvė":
//   case "Kopūstas":
//   case "Česnakas":
//   case "Svogūnas":
//   case "Morka":
//     console.log("Daržovė");
//     break;
//   case "Obuolys":
//   case "Kriaušė":
//   case "Avietė":
//   case "Braškė":
//   case "Vynuogė":
//     console.log("Vaisius");
//     break;
//   default:
//     console.log("Nei daržovė, nei vaisius");
// }

// Kokia šiandien diena? Sukurkite variable 'weekDay', kuris būtų lygus skaičiui - savaitės dienai, skaičiuojant nuo 0 (t.y. pirmadienis - 0; antradienis - 1; trečiadienis - 2 ir t.t.). Parašykite Switch statement, kuris paimtų skaičių ir jį pakeistų (ne sukurtų naują kintamąjį, o pakeistų 'weekDay' reikšmę) į savaitės dieną žodžiu. Vėliau, atspausdink kintamąjį.

// let weekDay = new Date().getDay();
// switch (weekDay) {
//   case 0:
//     weekDay = "Sekmadienis";
//     break;
//   case 1:
//     weekDay = "Pirmadienis";
//     break;
//   case 2:
//     weekDay = "Antradienis";
//     break;
//   case 3:
//     weekDay = "Trečiadienis";
//     break;
//   case 4:
//     weekDay = "Ketvirtadienis";
//     break;
//   case 5:
//     weekDay = "Penktadienis";
//     break;
//   case 6:
//     weekDay = "Šeštadienis";
//     break;
// }
// console.log(weekDay);

// Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

// const vardas = "Martin";
// console.log(vardas.length < 5 ? "Short Name" : "Long Name");

// Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.
// const clientAge = 16;
// const legalAge = 18;
// clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");

// Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas.
// const phone = "iPhone";

// const isIphoneUser = phone === "iPhone";

// for (let i = 0; i < 10; i++) {
//   console.log("Martynas");
// }

// const name = "Martin";
// const count = 10;
// for (let i = 0; i < count; i++) {
//   console.log(name);
// }

// const name = "Martin";
// const count = 10;
// for (let i = 0; i < count; i++) {
//   console.log(`${i}. ${name}`);
// }

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}