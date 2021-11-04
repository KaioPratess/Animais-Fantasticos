import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function handleClick(event) {
    event.preventDefault();
    menuList.classList.toggle('active');
    this.classList.toggle('active');
    outsideClick(menuList, ['click', 'touchstart'], () => {
      menuList.classList.remove('active');
      this.classList.remove('active');
    });
  }

  eventos.forEach((evento) => menuButton.addEventListener(evento, handleClick));
}
