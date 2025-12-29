const btn = document.querySelector('form');
btn.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    res.innerHTML = `give valid height ${height}`;
  }

  if (weight === '' || weight < 0 || isNaN(weight)) {
    res.innerHTML = `give valid weight ${weight}`;
  }else{
    const bmi=(weight/(height*height/10000)).toFixed(2);
    res.innerHTML =`<span>${bmi}</span>`;
  }
});
