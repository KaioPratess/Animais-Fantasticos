import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';
    if (events === undefined) this.eventos = ['click', 'touchstart'];
    else this.eventos = events;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.menuList.classList.toggle(this.activeClass);
    event.currentTarget.classList.toggle(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      event.currentTarget.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((evento) => this.menuButton.addEventListener(evento, this.handleClick));
  }

  init() {
    this.addMenuMobileEvents();
    return this;
  }
}
