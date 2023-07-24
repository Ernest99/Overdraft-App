
  document.getElementById("loanYes").addEventListener("change", function() {
    document.getElementById("loanAmount").disabled = false;
    document.getElementById("loanAmount").required = true;
  });
  
  document.getElementById("loanNo").addEventListener("change", function() {
    document.getElementById("loanAmount").disabled = true;
    document.getElementById("loanAmount").required = false;
  });


  function reset(){
    document.getElementById("salaryOneInput").value = "";
document.getElementById("salaryTwoInput").value = "";
document.getElementById("salaryThreeInput").value = "";
document.querySelector('input[name="outstandingLoan"]:checked').checked = false;
document.getElementById("loanAmount").value = "";
  }

  document.getElementById("eligibilityForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let month1 = parseFloat(document.getElementById("salaryOneInput").value);
    let month2 = parseFloat(document.getElementById("salaryTwoInput").value);
    let month3 = parseFloat(document.getElementById("salaryThreeInput").value);
    let loanDeduction = document.querySelector('input[name="outstandingLoan"]:checked').value;
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    loanDeductedSalary = 0;
    let money = [month1, month2, month3];
    let salary = Math.min(...money);
    document.getElementById("loanYes").addEventListener("change", function() {
    document.getElementById("loanAmount").required = true;
    document.getElementById("loanAmount").disabled = false;
    
 

      
    });
    

    console.log(salary);
    if (loanDeduction == "yes") {
     
      loanDeductedSalary = salary - loanAmount;
      // console.log("Amount payed: "+loanDeductedSalary);

      let eligibility = loanDeductedSalary * 0.25;
      showMessage('Eligible Overdraft Amount: ' + eligibility.toFixed(2));
      Swal.fire({
        icon: 'success',
        title: 'Eligibility Calculated',
        text: 'Eligible Overdraft Amount: ' + eligibility.toFixed(2),
        confirmButtonText: 'Ok',
        customClass: {
        title: 'swal-title',
        confirmButton: 'swal-button',
        text: 'swal-text',
      
      }
    });

    // showAlert(eligibility.toFixed(2));
    reset()
    // month1.value = "";
    document.getElementById("eligibilityForm").reset();
      
    } else {
      let eligibility = salary * 0.25;
      showMessage('Eligible Overdraft Amount: ' + eligibility.toFixed(2));
      Swal.fire({
        icon: 'success',
        title: 'Eligibility Calculated',
        text: 'Eligible Overdraft Amount: ' + eligibility.toFixed(2),
        confirmButtonText: 'Ok',
        customClass: {
        title: 'swal-title',
        confirmButton: 'swal-button',
        text: 'swal-text',
      
      }
      });
    }
   reset();
  });
  document.getElementById('loanYes').addEventListener('click', () => {
    let hide = document.getElementById('hideInput');
    hide.classList.toggle('showInput');
    // alert('hello');
  });
  document.getElementById('loanNo').addEventListener('click', () => {
    let hide = document.getElementById('hideInput');
    hide.classList.remove('showInput');
    // alert('hello');
  });
  function showMessage(message) {
    let resultDiv = document.getElementById('result');
    let messageElement = document.getElementById('message');
    // let amountElement = document.getElementById('eligible-amount');
    messageElement.textContent = message;
    resultDiv.classList.remove('hidden');
  }
  


 