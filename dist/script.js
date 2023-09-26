const submitButton = document.querySelector("#submit-button");
const emailInput = document.querySelector("#email");
const invalidElement = document.querySelector("#invalid");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (regex.test(emailInput.value)) {
    window.location.href = "http://127.0.0.1:5500/sucess.html";
  } else {
    emailInput.classList.add("newsletter__email--error");
    invalidElement.style.display = "block";
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.style.backgroundColor = "#ffe8e6";
  }
});
