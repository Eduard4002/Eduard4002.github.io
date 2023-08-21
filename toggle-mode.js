
const button = document.querySelector('.mode-toggle')
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
  console.log(currentTheme);
  document.documentElement.setAttribute('data-theme', currentTheme);

  document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.toggle('fa-moon'))
}
button.classList.values = "";

button.addEventListener('click', function () {
  const currentTheme = localStorage.getItem('theme');

  if(currentTheme){
      

      if (currentTheme === 'light') {         
          localStorage.setItem('theme', 'dark');
      }else{
        localStorage.setItem('theme', 'light');

      }
      document.documentElement.setAttribute('data-theme', currentTheme);
      document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.toggle('fa-moon'))
    
      console.log("Button pressed");
      console.log("Current theme is: ");
      console.log(currentTheme);
  }
  //document.body.classList.toggle('light-mode')
  //document.documentElement.setAttribute('data-theme', 'light');
  
})



/*
const toggleSwitch = document.querySelector('.mode-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        //toggleSwitch.checked = true;
        document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.add('fa-moon'))

    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);*/
/*
buttons.forEach(button => {
  button.addEventListener('click', function () {
    //document.body.classList.toggle('light-mode')
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.toggle('fa-moon'))

    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('lightMode', 'enabled')
    } else {
      localStorage.setItem('lightMode', 'disabled')
    }
  })
})

if (localStorage.getItem('lightMode') === 'enabled') {
  document.body.classList.add('light-mode')
  document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.add('fa-moon'))
}*/