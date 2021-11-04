export default function initModal() {
  const loginBotao = document.querySelector('[data-modal="botao"]');
  const modal = document.querySelector('[data-modal="container"]');
  const fechar = document.querySelector('[data-modal="fechar"] ');

  function toggleModal(event) {
    event.preventDefault();
    modal.classList.toggle('ativo');
  }
  function cliqueForaModal(event) {
    if (event.target === this) toggleModal(event);
  }

  if (loginBotao && modal && fechar) {
    loginBotao.addEventListener('click', toggleModal);
    fechar.addEventListener('click', toggleModal);
    modal.addEventListener('click', cliqueForaModal);
  }
}
