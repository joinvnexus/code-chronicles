function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required]');
    
    inputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        formGroup.classList.remove('error');
        
        if (!input.value.trim()) {
            formGroup.classList.add('error');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            formGroup.classList.add('error');
            isValid = false;
        } else if (input.type === 'password' && input.value.length < 8) {
            formGroup.classList.add('error');
            isValid = false;
        }
    });
    
    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}