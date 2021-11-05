export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.loginBotao = document.querySelector(botaoAbrir);
    this.modal = document.querySelector(containerModal);
    this.fechar = document.querySelector(botaoFechar);

    // bind this ao callback para fazer referência
    // ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha modal
  toggleModal() {
    this.modal.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.modal) this.toggleModal();
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.loginBotao.addEventListener('click', this.eventToggleModal);
    this.fechar.addEventListener('click', this.eventToggleModal);
    this.modal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.loginBotao && this.modal && this.fechar) {
      this.addModalEvents();
    }
    return this;
  }
}
