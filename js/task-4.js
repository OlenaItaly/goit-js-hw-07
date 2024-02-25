const formEL = document.querySelector('.login-form');
formEL.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    // console.log(email, email.value);
    // console.log(password, password.value);
    if (email.value.trim() === "" || password.value.trim() === "") {
       return alert( 'All form fields must be filled in');
    } 
    const result = { email: email.value.trim(), password: password.value.trim() }
    console.log(result);
    evt.currentTarget.reset();
}

