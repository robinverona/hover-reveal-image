
let links = [...document.querySelectorAll('.menu-item')];
let linkImages = document.querySelectorAll('.hover-reveal__img');

links.forEach((link, idx) => {
  link.addEventListener('mousemove', (e) => {
    link.children[1].style.opacity = 1;
    link.children[0].style.zIndex = 3; 
    link.children[1].style.transform = `translate(${e.clientX - 400}px, -${e.clientY / 3}px) rotate(${e.clientX / 50}deg)`;
    linkImages[idx].style.transform = `scale(1, 1)`;
    link.style.zIndex = 2; 

  })

  link.addEventListener('mouseleave', (e) => {
    link.children[1].style.opacity = 0;
    linkImages[idx].style.transform = `scale(0.8, 0.8)`;
    link.style.zIndex = 0; 



  });
});