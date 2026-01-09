function bmiCalculator(weight, height) {
  let bmi = weight / (height * height);
  bmi = Math.round(bmi);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi <= 24.9) {
    return "Normal weight";
  } else {
    return "Overweight";
  }
}

bmiCalculator(168, 70);
