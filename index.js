document.addEventListener('DOMContentLoaded', function() {
    // Selectează butonul folosind clasa
    const buttons = document.querySelectorAll('.btn.btn-warning.my-2');
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');
    console.log(buttons);
    buttons.forEach(button => button.addEventListener('click', () => {
        popup.classList.add('active');
    }));

    overlay.addEventListener('click', () => {
        popup.classList.remove('active');
    }); 

});