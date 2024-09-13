// Task -1
// const burger = 501;

// if (burger > 500) {
//   console.log("Free Coke");
// } else {
//   console.log("You have to Pay 30tk for Coke");
// }

// Task -2 BMI Calculator

// const weight = 66;
// const centimeters = 164;

// const height = centimeters / 100; // height cm to meters
// const bmiFormula = weight / (height * height); // bmi Formula
// const bmi2Fixed = bmiFormula.toFixed(2); // bmi toFixed(2)
// const bmiParseInt = parseFloat(bmi2Fixed); // bmi parseInt
// const bmi = bmiParseInt; // main bmi

// // console.log(bmi);
// // if else condition.

// if (bmi < 18.5) {
//   console.log("you are underweight.");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("You are Normal. Your BMI is", bmi);
// } else if (bmi >= 25 && bmi <= 29.9) {
//   console.log("yor are overweight. Your BMI is", bmi);
// } else {
//   console.log("you are obese. Your BMI is", bmi);
// }

// Task -4 Grade_Calculator

// const number = 60;

// if (number < 60) {
//   console.log("F");
// } else if (number <= 70) {
//   console.log("D");
// } else if (number <= 80) {
//   console.log("C");
// } else if (number <= 90) {
//   console.log("B");
// } else if (number <= 100) {
//   console.log("A");
// } else {
//   console.log("Please provide valid number");
// }

// Task -5 nested if-else

// const myScore = 80;
// const friendScore = 39.9;

// if (myScore >= 80) {
//   console.log("Go to your friend score.");
//   if (myScore >= 80 && friendScore >= 80) {
//     console.log("Go to lunch together.");
//   } else if (friendScore >= 60 && myScore >= 80) {
//     console.log("Good luck next time.");
//   } else if (friendScore >= 40 && myScore >= 80) {
//     console.log("Keep your friend's message unseen.");
//   } else if (friendScore < 40 && myScore >= 80) {
//     console.log("Block your friend.");
//   }
// } else {
//   console.log("Go to home and sleep and act sad.");
// }

// Task -6 Ternary-operator

// const num1 = 70;
// const num2 = 60;
// let result;

// if (num1 > num2) {
//   result = num1 * num1;
// } else {
//   result = num1 + num2;
// }

// console.log(result);

// num1 > num2 ? console.log(num1 * num2) : console.log(num1 + num2);

// Task -7 Ticket fare Calculator

// const age = 44;
// const students = false;

// if (age < 10) {
//   console.log("Free for under age 10.");
// } else if (age >= 60) {
//   const seniorCitizens = (800 * 15) / 100;
//   const fareSeniorCitizens = 800 - seniorCitizens;
//   console.log(fareSeniorCitizens);
// } else if (students === true) {
//   const studentsDiscount = (800 * 50) / 100;
//   const fareStudentsDiscount = 800 - studentsDiscount;
//   console.log(fareStudentsDiscount);
// } else {
//   console.log("Regular ticket fare", 800, "tk");
// }
