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
