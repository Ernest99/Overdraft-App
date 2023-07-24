initMultiStepForm();

function initMultiStepForm() {
    const progressNumber = document.querySelectorAll(".step").length;
    const slidePage = document.querySelector(".slide-page");
    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    const pages = document.querySelectorAll(".page");
    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");
    const stepsNumber = pages.length;

    if (progressNumber !== stepsNumber) {
        console.warn(
            "Error, number of steps in progress bar do not match number of pages"
        );
    }

    document.documentElement.style.setProperty("--stepNumber", stepsNumber);

    let current = 1;

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("click", function (event) {
            event.preventDefault();
            // Preview details
            let field1 = document.getElementById('name').value;
            let field2 = document.getElementById('Account').value;
            let field3 = document.getElementById('nationID').value;
            let field4 = document.getElementById('phoneNum').value;
            let field5 = document.getElementById('address').value;
            let field6 = document.getElementById('netSalary').value;
            let field7 = document.getElementById('allow').value;
            let field8 = document.getElementById('loan').value;
            let field9 = document.getElementById('repay').value;
            let field10 = document.getElementById('runOverdraft').value;
            let field11 = document.getElementById('amount').value;
            document.getElementById('previewName').textContent = field1;
            document.getElementById('previewAccount').textContent = field2;
            document.getElementById('previewID').textContent = field3;
            document.getElementById('previewContact').textContent = field4;
            document.getElementById('previewAddress').textContent = field5;
            document.getElementById('previewNet').textContent = field6;
            document.getElementById('previewAllow').textContent = field7;
            document.getElementById('previewLoan').textContent = field8;
            document.getElementById('previewRepay').textContent = field9;
            document.getElementById('previewRun').textContent = field10;
            document.getElementById('previewAmount').textContent = field11;

            inputsValid = validateInputs(this);
            // inputsValid = true;

            if (inputsValid) {
                slidePage.style.marginLeft = `-${
                    (100 / stepsNumber) * current
                }%`;
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
            }
        });
    }

    for (let i = 0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = `-${
                (100 / stepsNumber) * (current - 2)
            }%`;
            bullet[current - 2].classList.remove("active");
            progressCheck[current - 2].classList.remove("active");
            progressText[current - 2].classList.remove("active");
            current -= 1;
        });
    }
    // submitBtn.addEventListener("click", function () {
    //     bullet[current - 1].classList.add("active");
    //     progressCheck[current - 1].classList.add("active");
    //     progressText[current - 1].classList.add("active");
    //     current += 1;
    // });

    function validateInputs(ths) {
        let inputsValid = true;

        const inputs =
            ths.parentElement.parentElement.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
            const valid = inputs[i].checkValidity();
            if (!valid) {
                inputsValid = false;
                inputs[i].classList.add("invalid-input");
            } else {
                inputs[i].classList.remove("invalid-input");
            }
        }
        return inputsValid;
    }
}



//To maxlength the form inputs
let input = document.getElementById("Account");

  input.addEventListener("input", function() {
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10); // Truncate the input to the maximum length
    }
  });
  let inputID = document.getElementById("nationID");

  inputID.addEventListener("input", function() {
    if (this.value.length > 13) {
      this.value = this.value.slice(0, 13); // Truncate the input to the maximum length
    }
  });
  let inputPhone = document.getElementById("phoneNum");

  inputPhone.addEventListener("input", function() {
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10); // Truncate the input to the maximum length
    }
  });