let submit_button = document.getElementById("submit");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

function successAlert(message) {
    Swal.fire(message)
}
function errorAlert(message) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',``
        text: message,
    })
}

submit_button.addEventListener("click", function (e) {
    e.preventDefault();
    if(emailInput.value == ""){
        errorAlert("email empty")
        emailInput.focus();
    }
    else if(passwordInput.value == ""){
        errorAlert("password empty")
        passwordInput.focus();
    }
    else{
        successAlert("Great your form submitted!")
    }
}) 