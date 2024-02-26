let amountElement = document.getElementById("bill-amount");
let percentElement = document.getElementById("percent-input");
let peopleCountElement = document.getElementById("people");
let billAmount;
let tipPercent;
let peopleCount;

amountElement.addEventListener("input", function() {
  billAmount = parseInt(amountElement.value);
  console.log("Bill Amount:", billAmount);
});


const setPercent = (percent) => {
    tipPercent = percent;
}

percentElement.addEventListener("input", function() {
    tipPercent = parseInt(percentElement.value);
    console.log("Percentage:", tipPercent); 
});

peopleCountElement.addEventListener("input", function() {
    peopleCount = peopleCountElement.value;
    console.log("peopleCountElement:", peopleCount); 
});

const calculateSplit = () => {
    let finalAmount = (billAmount + ((billAmount * tipPercent) / 100));
    let perPersonAmount = (finalAmount / peopleCount).toFixed(2);

    document.getElementById('total-amount').innerHTML = `$${finalAmount}`;
    document.getElementById('per-person-amount').innerHTML = `$${perPersonAmount}`;
}

