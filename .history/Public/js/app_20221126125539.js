const contactForm = document.querySelector(".contactForm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("emailInput");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit clicked");

  let formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  console.log(formData);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email sent successfully");
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else {
      alert("Something went wrong");
    }
  };
});
