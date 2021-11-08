import AnimaNumeros from './numeros.js';

export default function fetchAnimais(url, target) {
  // cria a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}`;
    return div;
  }

  // Preenche cada animal no dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', 'ativo', '.numeros');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo .json
  // e cria cada animal com o createAnimal
  async function criarAnimais() {
    try {
      // fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação em json, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
