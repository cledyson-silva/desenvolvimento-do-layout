document.getElementById("btn_lupa").addEventListener("click", function () {
  const input = document.getElementById("search_input").value.trim();
  const resultado = document.getElementById("resultado-busca");

  if (input) {
    resultado.textContent = `Você buscou por: '${input}'`;
  } else {
    resultado.textContent = '';
  }
})

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3.2,
    },
    1024: {
      slidesPerView: 5,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});