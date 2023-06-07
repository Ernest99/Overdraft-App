// Function to check overdraft eligibility
function checkEligibility(event) {
    event.preventDefault();
  
    // Get user input
    var accountBalance = parseFloat(document.getElementById('account').value);
    var income = parseFloat(document.getElementById('income').value);
    // const checkIcon = `<i class="ri-checkbox-circle-line"></i>`;
    // const errorIcon = ``
    // Check eligibility criteria
    if (accountBalance >= 0 && income >= 1000) {
      var eligibleAmount = Math.min(accountBalance * 0.5, income * 3);
      showMessage('\u2705' + 'Congratulations! You are eligible for an overdraft.', eligibleAmount);
    } else {
      showMessage('\u274c' + 'Sorry, you are not eligible for an overdraft at this time.', 0);
    }
  }
  
  // Function to display eligibility result message and eligible amount
  function showMessage(message, amount) {
    var resultDiv = document.getElementById('result');
    var messageElement = document.getElementById('message');
    var amountElement = document.getElementById('eligible-amount');
    messageElement.textContent = message;
    amountElement.value = amount.toFixed(2);
    resultDiv.classList.remove('hidden');
  }
  
  // Attach event listener to the form submit event
  var form = document.getElementById('eligibilityForm');
  form.addEventListener('submit', checkEligibility);
  