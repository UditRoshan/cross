const socialIcon = document.querySelector('.social');
const links = document.querySelector('.links');
const aboutIcon = document.querySelector('.about');
const team = document.querySelector('.team');

socialIcon.addEventListener('click', ()=> {
    if (links.style.top === "-100%") {
        links.style.top = "0%";
      } else {
        links.style.top = "-100%";
      }
})

aboutIcon.addEventListener('click', ()=> {
    if (team.style.right === "-100%") {
        team.style.right = "0%";
      } else {
        team.style.right = "-100%";
      }
})


