const slider = document.getElementById("slider");
const slides = slider.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let activeIndex = 0;

prevBtn.addEventListener("click", () => {
  if (activeIndex === 0) {
    activeIndex = slides.length - 1;
  } else {
    activeIndex -= 1;
  }

  animateSlide();
});

nextBtn.addEventListener("click", () => {
  if (activeIndex === slides.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex += 1;
  }

  animateSlide();
});

function animateSlide() {
  slides.forEach((slide, index) => {
    slide.style.opacity = index === activeIndex ? 1 : 0;
  });
}
