let principleAmount ;
let loanYears ;
let rate ;

window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  principleAmount = document.getElementById("loan-amount").value;
  loanYears = document.getElementById("loan-years").value;
  rate = document.getElementById("loan-rate").value;
  return {
    
    amount: +(principleAmount),//Number(pricipleAmount)
    years: +(loanYears),
    rate: +(rate),
  }
};


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValue = { amount: 10000, years: 5, yearlyRate: 4 };
  principleAmount = defaultValue.amount;
  loanYears = defaultValue.years;
  rate = defaultValue.yearlyRate;
  document.getElementById("loan-amount").value = principleAmount;
  document.getElementById("loan-years").value=loanYears;
  document.getElementById("loan-rate").value = rate;
  console.log( principleAmount, loanYears, rate);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  debugger;
 const monthlyRate = (values.rate /100) /12;
  const n = values.years * 12;
  let payAmount = values.amount * monthlyRate;
  let aRate = (1 - Math.pow((1 + monthlyRate), -n));
  monthlyPayment = (payAmount / aRate).toFixed(2);
  
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly() {
  document.getElementById("monthly-payment").innerText = "$" + calculateMonthlyPayment(getCurrentUIValues());

}
