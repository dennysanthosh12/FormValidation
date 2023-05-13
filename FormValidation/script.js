const form =document.getElementById('form');
const PhoneNumber= document.getElementById('typePhone');
const Password = document.getElementById('password1');
const Password2 =document.getElementById('password2');


 form.addEventListener('submit',e =>{
  e.preventDefault();
  validateInputs();
 });

 const setError =(element , message ) =>{
   const formControl = element.parentElement;
   const errorDisplay = formControl.querySelector('.error');
   const InputField = formControl.querySelector('.form-control');

   errorDisplay.innerText =message;
   InputField.classList.add('error');
   InputField.classList.remove('success');

 };
 const setSuccess =(element) =>{
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector('.error');
  const InputField = formControl.querySelector('.form-control');

  errorDisplay.innerText ='';
  InputField.classList.add('success');
  InputField.classList.remove('error');
 };


 function validateInputs() {
  const PhoneNumberValue = PhoneNumber.value.trim();
  const PasswordValue = Password.value.trim();
  const Password2Value = Password2.value.trim();

  if (PhoneNumberValue === '+9112345678') {
    setError(PhoneNumber, 'Invalid Phone number');
  } else {
    setSuccess(PhoneNumber);
  }

  if (Password2Value !== PasswordValue) {
    setError(Password2, "Password doesn't match");
  } else {
    setSuccess(Password2);
  }
}
