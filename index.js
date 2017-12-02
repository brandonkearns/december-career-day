
document.body.onclick = changeBackground;

function changeBackground() {
  document.body.style.backgroundColor = 'pink';

  var welcomeElement = document.getElementById('primary-welcome');
  welcomeElement.style.color = 'purple';
}
