
const fs = require('fs');
const path = require('path');

// Read and execute the logic.js script
const scriptPath = path.resolve(__dirname, './logic.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');
eval(scriptContent);

// Basic test for email validation
describe('Email Validation', () => {
    test('should return true for a valid email', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
    });

    test('should return false for an invalid email', () => {
        expect(isValidEmail('invalid-email')).toBe(false);
    });

    test('should return false for an email without a domain', () => {
        expect(isValidEmail('test@')).toBe(false);
    });

    test('should return false for an email without a user', () => {
        expect(isValidEmail('@example.com')).toBe(false);
    });
});

// Tests for form validation
describe('Form Validation', () => {
    let loginForm;

    beforeEach(() => {
        // Set up the form with required inputs
        document.body.innerHTML = `
            <form id="login-form">
                <div class="form-group">
                    <input type="email" id="login-email" required>
                </div>
                <div class="form-group">
                    <input type="password" id="login-password" required>
                </div>
                <button type="submit">Submit</button>
            </form>
        `;
        loginForm = document.getElementById('login-form');
    });

    test('should return true for a valid form', () => {
        document.getElementById('login-email').value = 'test@example.com';
        document.getElementById('login-password').value = 'password123';
        expect(validateForm(loginForm)).toBe(true);
    });

    test('should return false for an empty form', () => {
        expect(validateForm(loginForm)).toBe(false);
    });

    test('should add "error" class to invalid fields', () => {
        validateForm(loginForm);
        const emailGroup = document.getElementById('login-email').closest('.form-group');
        const passwordGroup = document.getElementById('login-password').closest('.form-group');
        expect(emailGroup.classList.contains('error')).toBe(true);
        expect(passwordGroup.classList.contains('error')).toBe(true);
    });

    test('should return false for an invalid email', () => {
        document.getElementById('login-email').value = 'invalid-email';
        document.getElementById('login-password').value = 'password123';
        expect(validateForm(loginForm)).toBe(false);
    });

    test('should return false for a short password', () => {
        document.getElementById('login-email').value = 'test@example.com';
        document.getElementById('login-password').value = '123';
        expect(validateForm(loginForm)).toBe(false);
    });
});
