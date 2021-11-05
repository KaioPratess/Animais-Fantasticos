import outsideClick from './outsideClick.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('active');
    });
  }
  dropdownMenus.forEach((menu) => {
    ['click', 'touchstart'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}