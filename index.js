document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".gallery");
  const images = document.querySelectorAll(".gallery img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots-container");

  let index = 0;
  let intervalId;

  function showImage(n) {
      index = (n + images.length) % images.length;
      gallery.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
  }

  function updateDots() {
      const dots = document.querySelectorAll(".dot");
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

  // function startAutoSlide() {
  //     intervalId = setInterval(nextImage, 2500);
  //     gallery.classList.add("auto");
  // }

  // function stopAutoSlide() {
  //     clearInterval(intervalId);
  //     gallery.classList.remove("auto");
  // }

  // Создание кружков
  images.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => showImage(i));
      dotsContainer.appendChild(dot);
  });

  // Переключение фото по клику на стрелки
  prevBtn.addEventListener("click", () => {
      prevImage();
      stopAutoSlide();
  });
  nextBtn.addEventListener("click", () => {
      nextImage();
      stopAutoSlide();
  });

  // Начальная активация первого кружка
  updateDots();

  // Запуск автоматического листания
  startAutoSlide();
});
