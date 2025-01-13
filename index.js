const buttons = document.querySelectorAll('.btn.btn-warning.my-2');
const counter = document.querySelector('.cartSize');
const decrement = document.querySelector('.minus');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    });
});
decrement.addEventListener('click', () => {
    counter.innerHTML = Math.max(0,parseInt(counter.innerHTML) - 1);
});

