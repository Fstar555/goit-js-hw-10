import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const dateTimePicker = document.querySelector('#datetime-picker');
const startCountDownButton = document.querySelector('button');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
document.addEventListener('DOMContentLoaded', () => {
  startCountDownButton.disabled = true;
});
let userSelectedDate = '';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startCountDownButton.disabled = true;
    } else {
      startCountDownButton.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};
const datePicker = flatpickr(dateTimePicker, options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function countdown() {
  const now = new Date().getTime();
  const distance = userSelectedDate.getTime() - now;
  if (distance < 0) {
    // Час вже минув
    clearInterval(timer);
    dataDays.textContent = '00';
    dataHours.textContent = '00';
    dataMinutes.textContent = '00';
    dataSeconds.textContent = '00';
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(distance);
  // Відображення залишкового часу
  dataDays.textContent = addLeadingZero(days);
  dataHours.textContent = addLeadingZero(hours);
  dataMinutes.textContent = addLeadingZero(minutes);
  dataSeconds.textContent = addLeadingZero(seconds);
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
let timer;
startCountDownButton.addEventListener('click', () => {
  countdown();
  timer = setInterval(countdown, 1000);
});
