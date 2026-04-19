function calculateTax() {
  const income = document.getElementById("income").value;
  let tax = 0;

  if (income <= 500000) tax = 0;
  else if (income <= 1000000) tax = income * 0.1;
  else tax = income * 0.2;

  document.getElementById("result").innerText = "Tax: ₹" + tax;
}
