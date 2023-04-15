// const formModal = new bootstrap.Modal("#formModal");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const fullName = document.getElementById("fullName");
const locationInput = document.getElementById("location");
const estudiosCompl = document.getElementById("estudiosCompl");
const extraInfo = document.getElementById("extraInfo");
const disclaimer = document.getElementById("disclaimer");
const check = document.getElementById("check");
check.addEventListener("click", function () {
  btnForm[4].toggleAttribute("disabled");
});


const forms = document.querySelectorAll("form");
const btnForm = document.getElementsByClassName("btn-form");
for (let i = 0; i < btnForm.length; i++) {
  btnForm[i].addEventListener("click", handleMultiStep);
}

function handleMultiStep(e) {
  e.preventDefault();
  switch (e.target.id) {
    case "btn-next-form1":
      forms[0].classList.toggle("d-none");
      forms[1].classList.toggle("d-none");
      break;
    case "btn-next-form2":
      forms[1].classList.toggle("d-none");
      forms[2].classList.toggle("d-none");
      break;
    case "btn-prev-form2":
      forms[0].classList.toggle("d-none");
      forms[1].classList.toggle("d-none");
      break;
    case "btn-prev-form3":
      forms[1].classList.toggle("d-none");
      forms[2].classList.toggle("d-none");
      break;
    case "btn-submit":
      console.log("Finalizado");
      handleSubmit();
    default:
      return;
  }
};

function handleSubmit() {
  console.log(email?.value, phone?.value, fullName?.value, locationInput?.value, estudiosCompl?.value, 
  extraInfo?.value, disclaimer?.value, check?.value);
  forms[0].reset();
  forms[1].reset();
  forms[2].reset();
  forms[2].classList.toggle("d-none");
  forms[0].classList.toggle("d-none");
   // formModal.show();
}
