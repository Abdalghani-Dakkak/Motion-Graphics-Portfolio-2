let works = Array.from(document.querySelectorAll("main .works"));
let videosContainer = Array.from(document.querySelectorAll(".div-of-video"));
let closeBtns = Array.from(document.querySelectorAll(".div-of-video button"));
let iframes = Array.from(document.querySelectorAll(".div-of-video iframe"));
let srcOfIframes = [];

iframes.forEach( e => {
  srcOfIframes.push(e.src);
})

works.forEach( (element, index) => {
  element.addEventListener("click", () => {
    iframes[index].src = `${srcOfIframes[index]}&autoplay=1`;
    videosContainer[index].classList.remove("d-none");
    videosContainer[index].classList.add("d-block");
    iframes[index].classList.remove("d-none");
    console.log(iframes[index]);
  });
});

closeBtns.forEach( (element, index) => {
  element.addEventListener("click", () => {
    element.previousElementSibling.src = srcOfIframes[index];
    element.parentNode.classList.remove("d-block");
    element.parentNode.classList.add("d-none");
    element.previousElementSibling.classList.add("d-none");
    console.log(iframes[index]);
  });
});

// navbar
let navbar = document.querySelector(".navbar");
let lastScrollPosition = 0;

window.addEventListener("scroll", async () => {
  const currentScrollPosition = window.scrollY;

  if(currentScrollPosition > lastScrollPosition) {

    navbar.style.top = `${-navbar.clientHeight}px`;
    setTimeout(() => {
      navbar.classList.remove("position-sticky");
    }, 300);
    
  } else {
    
    setTimeout(() => {
      navbar.classList.add("position-sticky");
      navbar.style.top = "0";
    }, 300);

  }
  
  lastScrollPosition = currentScrollPosition;
});