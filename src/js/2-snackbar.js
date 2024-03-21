// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const submitForm = document.querySelector('.form');

submitForm.addEventListener('submit', event => {
    event.preventDefault();
    

    const delayInput = document.querySelector('input[name = "delay"]');
    const delay = delayInput.value;
    const state = document.querySelector('input[name = "state"]:checked').value;

    const message = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    message.then(delay => {
        console.log(`✅ Fulfilled promise in ${delay}ms`);
        iziToast.success({
            title: 'OK',
            message: 'Illegal operation',
            position: 'topRight',

        });
    });
    submitForm.();
});
