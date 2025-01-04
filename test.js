document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.blackpawn4');
    
    button.addEventListener('click', function() {
        button.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.whitepawn4');
    
    button.addEventListener('click', function() {
        button.classList.toggle('active');
    });
});