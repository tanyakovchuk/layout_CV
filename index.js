const acc = document.querySelectorAll('.accordion');
const panel = document.querySelectorAll('.panel');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', () => {
        panel[i].classList.toggle('panel--active');
        acc[i].classList.toggle('accordion--active')
    });
}

acc.addEventListener('click', () => {
    panel.classList.toggle('panel--active');
});
