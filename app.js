// masala-1
const A = 5;

if (A > 0) {
    console.log("Jumla rost: A soni musbat.");
} else {
    console.log("Jumla yolg'on: A soni musbat emas.");
}

// Masala-2

// let s = 7;

// if (s % 2 !== 0) {
//     console.log("Jumla rost: A soni toq son.");
// } else {
//     console.log("Jumla yolg'on: A soni toq son emas (juft son).");
// }

// Masala-3

// let k = 5; 
// let B = 3; 

// if (k > 2 && B <= 3) {
//     console.log("Jumla rost: A > 2 va B <= 3.");
// } else {
//     console.log("Jumla yolg'on: A > 2 va B <= 3 emas.");
// }

// Masala-4

// let r = 3; 
// let v = 5; 
// let C = 7; 

// if (A <= v && v <= C) {
//     console.log("Jumla rost: A <= B <= C.");
// } else {
//     console.log("Jumla yolg'on: A <= B <= C emas.");
// }

// Masala-5

// let t = 4; 
// let f = 8; 

// if ((t % 2 === 0 && f % 2 === 0) || (t % 2 !== 0 && f % 2 !== 0)) {
//     console.log("Jumla rost: A va B sonlarining har ikkalasi ham yoki toq yoki juft son.");
// } else {
//     console.log("Jumla yolg'on: A va B sonlarining har ikkalasi ham yoki toq yoki juft son emas.");
// }

// Masala-6

// let x = -3; 
// let n = 0;  
// let m = 5;  

// if (x > 0 || n > 0 || m > 0) {
//     console.log("Jumla rost: A, B, C sonlarning hech bo'lmaganda bittasi musbat.");
// } else {
//     console.log("Jumla yolg'on: A, B, C sonlarning hech biri musbat emas.");
// }

// masala-7

// let number = 123; // Masalan, 123

// if (number >= 100 && number <= 999) {
//     let digits = String(number);
//     let firstDigit = digits[0];
//     let secondDigit = digits[1];
//     let thirdDigit = digits[2];

//     if (firstDigit !== secondDigit && firstDigit !== thirdDigit && secondDigit !== thirdDigit) {
//         console.log("Rost");
//     } else {
//         console.log("Yolg'on");
//     }
// } else {
//     console.log("Iltimos, uch xonali son kiriting.");
// }

// masala-8

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");

// A = parseInt(A);
// B = parseInt(B);
// C = parseInt(C);

// if (A === B || B === C || A === C) {
//   console.log(
//     "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng: Rost."
//   );
// } else {
//   console.log(
//     "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng: Yolg'on."
//   );
// }


// masala-9

// let x1 = 4, y1 = 4; // Masalan, (4, 4)
// let x2 = 6, y2 = 6; // Masalan, (6, 6)

// // Koordinatalarning 1-8 oraliqda yotganligini tekshirish
// if (x1 >= 1 && x1 <= 8 && y1 >= 1 && y1 <= 8 && x2 >= 1 && x2 <= 8 && y2 >= 1 && y2 <= 8) {
//     // Farzinning yurishi qoidalarini tekshirish
//     if (x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
//         console.log("Rost");
//     } else {
//         console.log("Yolg'on");
//     }
// } else {
//     console.log("Koordinatalar 1-8 oraliqda bo'lishi kerak.");
// }


// masala-10


// let number = 24;

// if (number >= 10 && number <= 99 && number % 2 === 0) {
//     console.log("Rost");
// } else {
//     console.log("Yolg'on");
// }