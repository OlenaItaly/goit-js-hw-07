const formEL = document.querySelector('.login-form');
formEL.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    // console.log(email, email.value);
    // console.log(password, password.value);
    if (email.value === "" || password.value === "") {
       return alert( 'All form fields must be filled in');
    }
    const result = { email: email.value, password: password.value }
    console.log(result);
    evt.currentTarget.reset();
}

