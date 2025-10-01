function calculate() {
  const rate = parseFloat(document.getElementById("rate").value) || 0;
  const tariff = parseFloat(document.getElementById("tariff").value) || 0;
  const packageCheck = document.getElementById("package-check").checked;
  const packageCost = packageCheck ? parseFloat(document.getElementById("package").value) || 0 : 0;

  const priceYuan = parseFloat(document.getElementById("price").value) || 0;
  const quantity = parseFloat(document.getElementById("quantity").value) || 1;

  const selectedWeight = parseFloat(document.getElementById("weight").value) || 0;
  const customWeight = parseFloat(document.getElementById("custom-weight").value) || 0;
  const weight = customWeight > 0 ? customWeight : selectedWeight;

  const commissionCheck = document.getElementById("commission-check").checked;

  // Цена в рублях
  let total = priceYuan * rate * quantity;

  // Комиссия 15%
  if (commissionCheck) {
    total *= 1.15;
  }

  // Стоимость доставки
  total += (weight / 1000) * tariff * quantity;

  // Упаковка
  total += packageCost;

  document.getElementById("result").innerText = "Итого: " + total.toFixed(2) + " ₽";
}

// События
document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("input", calculate);
  el.addEventListener("change", calculate);
});

calculate();
