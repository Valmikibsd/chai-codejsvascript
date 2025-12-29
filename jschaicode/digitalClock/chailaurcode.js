const clocktag = document.getElementById('clock');
//const date=new Date();
//console.log(date.toLocaleTimeString());

setInterval(function () {
  const date = new Date();
  clocktag.innerHTML = date.toLocaleTimeString();
}, 1000);
