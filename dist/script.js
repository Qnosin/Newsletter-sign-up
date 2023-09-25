const submitButton = document.querySelector("#submit-button");
const emailInput = document.querySelector("#email");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (regex.test(emailInput.value)) {
    window.location.href = "http://127.0.0.1:5500/sucess.html";
  }
});
