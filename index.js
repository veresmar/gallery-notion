document.addEventListener("DOMContentLoaded", function() {
  const galleryContainer = document.querySelector(".gallery-container");
  const gallery = galleryContainer.querySelector(".gallery");
  const prevBtn = galleryContainer.querySelector(".prev");
  const nextBtn = galleryContainer.querySelector(".next");
  const dotsContainer = galleryContainer.querySelector(".dots-container");
  
  const images = window.images || []; // Получаем массив изображений из глобальной области видимости

  let index = 0;

  function showImage(n) {
      index = (n + images.length) % images.length;
      gallery.style.backgroundImage = `url('${images[index]}')`;
      updateDots();
  }

  function updateDots() {
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
          dot.classList.remove("active");
          if (i === index) {
              dot.classList.add("active");
          }
      });
  }

  function nextImage() {
      showImage(index + 1);
  }

  function prevImage() {
      showImage(index - 1);
  }

  function setDotClickEvent(dot, i) {
      dot.addEventListener("click", () => {
          showImage(i);
      });
  }

  // Создание кружков
  images.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => showImage(i));
      dotsContainer.appendChild(dot);
  });

  // Переключение по клику на стрелки
  prevBtn.addEventListener("click", prevImage);
  nextBtn.addEventListener("click", nextImage);

  // Начальная активация первого кружка
  updateDots();
  // Отображение первого изображения при загрузке страницы
  showImage(0);
});
