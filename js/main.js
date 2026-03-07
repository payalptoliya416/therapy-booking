// -----------header navbar
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");
const overlay = document.getElementById("menuOverlay");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// -----------------------

const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const body = header.nextElementSibling;

    document.querySelectorAll(".accordion-item").forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".accordion-body").style.maxHeight = null;
      }
    });

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = null;
    }
  });
});

// ---------carousel slider----------herosection ---start
function changeImage(el) {
  document.getElementById("mainImage").src = el.src;

  document.querySelectorAll(".thumb").forEach((img) => {
    img.classList.remove("active");
  });

  el.classList.add("active");
}

/* mouse drag scroll */
const slider = document.getElementById("thumbs");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
// ---------carousel slider----------herosection ---end

// --testimonia start
$(".testimonial-slider").owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,

 responsive: {
  0: {
    items: 1
  },
  768: {
    items: 2
  },
  1024: {
    items: 3
  }
}
});
// --testimonia end
