// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

Solution:
function bmi(weight, height) {
    const i = weight / height ** 2
    
    return i <= 18.5 ? 'Underweight' : i <= 25.0 ? 'Normal' : i <= 30.0 ? 'Overweight' : 'Obese'
  }