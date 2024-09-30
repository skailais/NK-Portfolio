$(".arrow-1").click(function () {
  $(".description-1").slideToggle(1100);
});

$(".arrow-2").click(function () {
  $(".description-2").slideToggle(1100);
});

$(".arrow-3").click(function () {
  $(".description-3").slideToggle(1100);
});

$(".arrow-4").click(function () {
  $(".description-4").slideToggle(1100);
});

$(".arrow-5").click(function () {
  $(".description-5").slideToggle(1100);
});

// Находим все якорные элементы
const anchors = document.querySelectorAll(".target");

let currentIndex = 0; // Начинаем с первого якоря

window.addEventListener(
  "wheel",
  function (event) {
    // Прокрутка вниз
    if (event.deltaY > 0) {
      if (currentIndex < anchors.length - 1) {
        currentIndex++; // Увеличиваем индекс, переходим к следующему якорю
      }
    }

    // Прокрутка вверх
    if (event.deltaY < 0) {
      if (currentIndex > 0) {
        currentIndex--; // Уменьшаем индекс, переходим к предыдущему якорю
      }
    }

    // Получаем координаты текущего якоря
    const anchorPosition =
      anchors[currentIndex].getBoundingClientRect().top + window.scrollY;

    // Прокручиваем на 50 пикселей ниже якоря
    window.scrollTo({
      top: anchorPosition + 50, // Смещение на 50 пикселей ниже
      behavior: "smooth", // Плавная прокрутка
    });

    // Останавливаем стандартную прокрутку
    event.preventDefault();
  },
  { passive: false }
);

// Lines Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("line-animation");
      return;
    }
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares = document.querySelectorAll(".linetag");

// Loop over the elements and add each one to the observer
squares.forEach((element) => observer.observe(element));

// Fading text
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      return;
    }
  });
});

const texts = document.querySelectorAll(".tag");

texts.forEach((element) => observer2.observe(element));

//Figure animation
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move-anim");
      return;
    }
  });
});

const figures = document.querySelectorAll(".moveFigure");

figures.forEach((element) => observer3.observe(element));
