const form = document.querySelector("form");
console.log(form);

const firstName= document.querySelector('input[name="(firstname)"]');
const lastName= document.querySelector('input[name="(lastname)"]');
const email= document.querySelector('input[name="(email)"]');
const password= document.querySelector('input[name="(password)"]');
const submit= document.querySelector('input[type="(submit)"]');

// target Error divs
const firstNameError = document.querySelector('firstNameError');
const lastNameError = document.querySelector('lastNameError');
const emailError = document.querySelector('emailError');
const passwordError = document.querySelector('passwordError');

//target error images
const firstNameImage = document.querySelector('firstNameImage');
const lastNameImage = document.querySelector('lastNameImage');
const emailImage = document.querySelector('emailImage');
const passwordImage = document.querySelector('passwordImage');

// function to validate images
const formValidator = ()=>{
    if(firstName.value == ""){
           firstNameError.innerText = "First name cannot be empty";
           firstNameImage.style.display = "block";
            }else if(firstName.value < 2){
            firstNameError.innerText = "First name must be at least 2 characters long";
            firstNameImage.style.display = "block";
            }else{
            firstNameError.innerText = "";
            }
    if(lastName.value == ""){
            lastNameError.innerText = "Last name cannot be empty";
            lastNameImage.style.display = "block";
            }else if(lastName.value < 2){
                lastNameError.innerText = "Last name must be at least 2 characters long";
                lastNameImage.style.display = "block";
            }else{
                lastNameError.textContent = "";
            }
    if(email.value == ""){
            emailError.innerText = "Email cannot be empty";
            emailImage.style.display = "block";
            }else if(email.value.includes("@")){
                emailError.innerText = "Email must be at least 2 characters long";
                emailImage.style.display = "block";
            }else{
                 emailError.innerText = "";
            }
    if(password.value == ""){
            passwordError.innerText = "Password cannot be empty";
            passwordImage.style.display = "block";
            }else if(password.value < 6){
                passwordError.innerText = "Password must be at least 2 characters long";
                passwordImage.style.display = "block";
            }else{
                passwordError.innerText = "";
           }   
                }
        submit.addEventListener("click",(e)=>{
            e.preventDefault();
            formValidator();
        });

