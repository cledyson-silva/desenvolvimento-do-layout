//Search function
document.getElementById("btn-search").addEventListener("click", function () {
  const input = document.getElementById("search-input").value.trim();
  const result = document.getElementById("search-result");

  if (input) {
    result.textContent = `Você buscou por: '${input}'`;
  } else {
    result.textContent = '';
  }
})

//Carousel
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 5,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
}
);

//Text change
function textChange() {
  const texto = document.getElementById('lorem-final');
  if (window.innerWidth <= 768) {
    texto.innerText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.";
  } 
}

textChange();

window.addEventListener('resize', textChange);

