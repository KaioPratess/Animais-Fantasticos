export default function initAccordion() {
  const titulo = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (titulo.length) {
    titulo[0].classList.add(activeClass);
    titulo[0].nextElementSibling.classList.add(activeClass);
    titulo.forEach((item) => item.addEventListener('click', activeAccordion));
  }
}
