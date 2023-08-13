const emailInput = document.querySelector(".email-input")
const errorMsg = document.getElementById("email-error")
let formError = true;
const contactForm = document.getElementById("contact-form")


emailInput.addEventListener("input", (e) => {
    if(checkIfEmailIsValid(e.target.value)){
        errorMsg.classList.remove("visible")
        formError = false;
    }

    if(!checkIfEmailIsValid(e.target.value)){
        errorMsg.classList.add("visible")
        formError = true;
    }
});

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!formError){
        console.log(emailInput.value);
    }
})



const checkIfEmailIsValid = (email) => {
    const emailRegex  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    return emailRegex.test(email)
}