
const button = document.querySelector('.mode-toggle');
const icon = document.querySelector('.fa-moon');
const sideProfile = document.querySelector('.sideProfile');
const hasDarkShadow = sideProfile.querySelector('.dark-shadow');
console.log(sideProfile);

var currentTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
  icon.classList.replace('fa-moon', 'fa-sun');
  if(!hasDarkShadow){
    sideProfile.classList.add('dark-shadow');
  }
}

button.addEventListener('click', function () {
   currentTheme = document.documentElement.getAttribute('data-theme');

  if (currentTheme === 'light') {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
    
    sideProfile.classList.remove('dark-shadow');
    
   //document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.replace('fa-sun', 'fa-moon'));
  } else {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    icon.classList.replace('fa-sun', 'fa-moon');
    sideProfile.classList.add('dark-shadow');

    //document.querySelectorAll('.fa-moon').forEach(icon => icon.classList.replace('fa-moon', 'fa-sun'));
  }
});