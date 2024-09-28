const signupForm = document.getElementById('signup');
const phoneNum = document.getElementById('number');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

function validate() {
    const phoneValue = phoneNum.value;
    const passValue = pass.value;
    const confirmPassValue = pass2.value;

    const isPhoneValid = phoneValue.length === 11 && /^\d+$/.test(phoneValue);
    const arePasswordsMatching = passValue === confirmPassValue;

    if (isPhoneValid && arePasswordsMatching) {
        alert("You have successfully registered an account");
        window.location.href = "index.html";
    } else {
        if (!isPhoneValid) {
            alert("Phone number must be exactly 11 digits");
        }
        if (!arePasswordsMatching) {
            alert("Passwords do not match");
        }
    }
};