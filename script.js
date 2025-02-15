document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    const nameInput = document.getElementById('name-label');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        const age = document.getElementById('number-label').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            if (name === '' || name.length < 3) {
                nameInput.style.border = '3px solid red';
                nameInput.placeholder = 'Please fill in this field';
            }
            return;
        }else if (name.length < 3) {
            alert('Name must be at least 3 characters');
            return;}
        else if (message.length < 5) {
            alert('Message must be at least 5 characters');
            return;
        }else if (email.length < 5 || !email.includes('@')) {
            alert('Email must be at least 5 characters and contain an @');
            return;
        }else if (email.length > 50) {
            alert('Email must be less than 50 characters');
            return;
        }else if (age < 10 || age > 99) {
            alert('Age must be between 10 and 99');
            return;
        }

        console.log('Form submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        form.reset();
    });
});