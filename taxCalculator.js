function calculateTax() {
  let income = document.getElementById("income").value;
  let tax = income * 0.1;

  document.getElementById("result").innerText = "₹" + tax;
}
