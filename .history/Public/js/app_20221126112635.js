const contactForm = document.querySelector(".contactForm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("emailInput");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  console.log(formData);
});
