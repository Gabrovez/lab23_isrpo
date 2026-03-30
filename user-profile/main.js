const form = document.getElementById('profileForm');
const clearBtn = document.getElementById('clearBtn');
const resultDiv = document.getElementById('result');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const city = document.getElementById('city').value.trim();
    const hobby = document.getElementById('hobby').value.trim();

    if (!name || !age || !city || !hobby) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
});