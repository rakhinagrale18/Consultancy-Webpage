// ======================================
// Show / Hide Password
// ======================================

const passwordInput = document.getElementById("password");

const confirmPasswordInput = document.getElementById("confirmPassword");

const togglePassword = document.querySelector(".toggle-password i");

const toggleConfirmPassword = document.querySelector(".toggle-confirm-password i");

// Password

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.classList.remove("fa-eye");

        togglePassword.classList.add("fa-eye-slash");

    } else {

        passwordInput.type = "password";

        togglePassword.classList.remove("fa-eye-slash");

        togglePassword.classList.add("fa-eye");

    }

});

// Confirm Password

toggleConfirmPassword.addEventListener("click", () => {

    if (confirmPasswordInput.type === "password") {

        confirmPasswordInput.type = "text";

        toggleConfirmPassword.classList.remove("fa-eye");

        toggleConfirmPassword.classList.add("fa-eye-slash");

    } else {

        confirmPasswordInput.type = "password";

        toggleConfirmPassword.classList.remove("fa-eye-slash");

        toggleConfirmPassword.classList.add("fa-eye");

    }

});

// ======================================
// Password Match Validation
// ======================================

document.querySelector("form").addEventListener("submit", function(event){

    if(passwordInput.value !== confirmPasswordInput.value){

        event.preventDefault();

        alert("Password and Confirm Password do not match.");

        confirmPasswordInput.focus();

    }

});
