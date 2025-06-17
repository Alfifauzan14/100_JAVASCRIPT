const btnEl = document.getElementById("btn");
const bmiInputEL = document.getElementById("bmi-hasil");
const kondisiEl = document.getElementById("kondisi");

function kalkulatorBMI() {
  const tinggiBadan = document.getElementById("tinggi").value/100;
  const beratBadan = document.getElementById("berat").value;

  const bmiValue = beratBadan/(tinggiBadan*tinggiBadan)

  bmiInputEL.value = bmiValue
  
  if (bmiValue < 18.5) {
    kondisiEl.innerText = "Berat Kurang"
  }else if (bmiValue >= 18.5 && bmiValue <= 24.9){
    kondisiEl.innerText = "Normal"
  }else if (bmiValue >= 25 && bmiValue <= 29.9){
    kondisiEl.innerText = "Kelebihan Berat Badan"
  }else if (bmiValue >= 30){
    kondisiEl.innerText = "Obesitas"
  }
}

btnEl.addEventListener("click",kalkulatorBMI)
