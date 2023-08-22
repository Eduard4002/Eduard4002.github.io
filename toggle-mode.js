
const button = document.querySelector('.mode-toggle');
const icon = document.querySelector('.fa-moon');
var currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
  icon.classList.replace('fa-moon', 'fa-sun');
}

button.addEventListener('click', function () {
   currentTheme = document.documentElement.getAttribute('data-theme');

  if (currentTheme === 'light') {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
   //document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.replace('fa-sun', 'fa-moon'));
  } else {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    icon.classList.replace('fa-sun', 'fa-moon');
    //document.querySelectorAll('.fa-moon').forEach(icon => icon.classList.replace('fa-moon', 'fa-sun'));
  }
});