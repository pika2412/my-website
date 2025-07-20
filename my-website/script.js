function calculateBMI() {
  const h = document.getElementById("height").value;
  const w = document.getElementById("weight").value;
  const bmi = w / ((h / 100) ** 2);
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";
  document.getElementById("result").textContent = `Your BMI is ${bmi.toFixed(1)} (${category})`;
}
