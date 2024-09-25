document.addEventListener('keydown', function(event) {
  const key = event.key.toUpperCase();
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);

  if (keyElement) {
    keyElement.classList.add('pressed');
    document.getElementById('display-text').textContent += event.key;
  }
});

document.addEventListener('keyup', function(event) {
  const key = event.key.toUpperCase();
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);

  if (keyElement) {
    keyElement.classList.remove('pressed');
  }
});
