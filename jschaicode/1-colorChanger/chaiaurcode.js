const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(button, body);

button.forEach((s) => {
  s.addEventListener('click', function (e) {
    const color = e.target.id;
    body.style.background = color;
  });
});
