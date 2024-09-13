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

const number = 60;

if (number < 60) {
  console.log("F");
} else if (number <= 70) {
  console.log("D");
} else if (number <= 80) {
  console.log("C");
} else if (number <= 90) {
  console.log("B");
} else if (number <= 100) {
  console.log("A");
} else {
  console.log("Please provide valid number");
}
