




document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

 // Fetch form values
//  const name = document.getElementById("name").value;
//  const email = document.getElementById("email").value;

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

 // Define the document definition for pdfmake
 const docDefinition = {
   content: [
     { text: `Name: ${field1}`, margin: [0, 0, 0, 10], fontFamily: 'Roboto'},
     { text: `Account: ${field2}`, margin: [0, 0, 0, 10], fontFamily: 'Roboto' },
     { text: `National ID: ${field3}`, margin: [0, 0, 0, 10], fontFamily: 'Roboto' },
     { text: `Phone Number: ${field4}`, margin: [0, 0, 0, 10], fontFamily: 'Roboto' },
     { text: `Address: ${field5}`, margin: [0, 0, 0, 10], fontFamily: 'Roboto' },
     { text: `Net Salary: ${field6}`, margin: [0, 0, 0, 10], fontFamily: 'Roboto' },
     { text: `Allowance: ${field7}`, margin: [0, 0, 0, 10] },
     { text: `Loan: ${field8}`, margin: [0, 0, 0, 10], fontFamily: 'Roboto' },
     { text: `Loan Repayment: ${field9}`, margin: [0, 0, 0, 10], fontFamily: 'Roboto' },
     { text: `Running Overdarft: ${field10}`, margin: [0, 0, 0, 10], fontFamily: 'Roboto' },
     { text: `Eligible Amount: ${field11}`, margin: [0, 0, 0, 10], fontFamily: 'Roboto' },
     
   ],
   defaultStyle: {
     fontFamily: 'Roboto'
   }
 };

 // Generate the PDF document
 const pdfDocGenerator = pdfMake.createPdf(docDefinition);

 // Download the PDF or send it via email
 pdfDocGenerator.getBase64((dataUri) => {
   // Call the function to send the email
   sendEmail(field1,field2,field3,field4,field5,field6,field7,field8,field9,field10,field11, dataUri);
 });

 function sendEmail(field1,field2,field3,field4,field5,field6,field7,field8,field9,field10,field11, pdfDataUri) {
  // Initialize EmailJS
  emailjs.init("m1E8PGeEMLY60UawU");

  // Set the parameters for sending the email
  const params = {
       name: field1,
      account: field2,
      nationID: field3,
      phoneNum: field4,
      address: field5,
      netSalary: field6,
      allow: field7,
      loan: field8,
      repay: field9,
      runOver: field10,
      amount: field11,
    attachment: pdfDataUri,
  };

  // Send the email
  emailjs.send("service_84lvsd9", "template_pv8pl9g", params)
    .then(function (response) {
      console.log("Email sent successfully!", response);
      alert("Email sent successfully!");
    }, function (error) {
      console.error("Email sending failed:", error);
      alert("Email sending failed. Please try again later.");
    });
}
// setTimeout(function () {
//   location.reload();
// }, 800);
  // // Configure EmailJS
  // emailjs.init("m1E8PGeEMLY60UawU"); // Replace with your EmailJS user ID

  // // Send email using EmailJS
  // emailjs.send("service_84lvsd9", "template_mc0zarf", templateParams)
  //   .then(function(response) {
  //     console.log("Email sent!", response.status, response.text);
  //     alert("Email sent successfully!");
  //   }, function(error) {
  //     console.error("Email sending failed:", error);
  //     alert("Failed to send email. Please try again.");
  //   });
});
