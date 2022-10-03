// Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.

// const clientAge = 16;
// const legalAge = 20;
// if (clientAge >= legalAge) {
//   console.log(`Pasiekęs ${legalAge}`);
// } else {
//   console.log(`Nepasiekęs ${legalAge}`);
// }

// Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length)

// const name = "Martin";
// if (name.length > 6) {
//   console.log("ilgas vardas");
// }

// Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult".

// const age = 10;
// if (age > 100 || age < 0) {
//   console.log("Invalid age");
// } else if (age < 18) {
//   console.log("Child");
// } else {
//   console.log("Adult");
// }

// Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// BMW group priklauso: BMW, Mini, Rolls-Royce.

const car = "Mini";
if (
  car === "vw" ||
  car === "Audi" ||
  car === "Bentley" ||
  car === "Bugatti" ||
  car === "Lamborghini" ||
  car === "Porsche"
) {
  console.log("VW Group");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royse") {
  console.log("BMW Group");
} else {
  console.log("Nei vienam");
}
