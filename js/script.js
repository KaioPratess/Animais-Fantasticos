import ScrollSuave from './scrollSuave.js';
import Accordion from './accordion.js';
import TabNav from './initTabNav.js';
import Modal from './modal.js';
import ToolTip from './toolTip.js';
import initDropDownMenu from './dropdownMenu.js';
import initMenuMobile from './menuMobile.js';
import initDate from './date.js';
import fetchAnimais from './animaisFetch.js';
import fetchBitcoin from './fetchBitcoin.js';
import ScrollAnima from './scrollAnima.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="botao"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initDropDownMenu();
initMenuMobile();
initDate();
fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
