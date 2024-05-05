let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission to observe validation

  let emailInput = form.querySelector("input[type='email']");
  let textEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z]+\.[a-zA-Z]{2,})$/gi;

  if (textEmail.test(emailInput.value)) {
    window.location.href = "./sec.html";
  } else {
    emailInput.style.cssText =
      "border: 1px solid var(--Tomato); background-color: #ff625733; color: var(--Tomato);";
  }
});
