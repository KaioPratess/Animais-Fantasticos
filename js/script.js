import ScrollSuave from './scrollSuave.js';
import Accordion from './accordion.js';
import TabNav from './initTabNav.js';
import Modal from './modal.js';
import ToolTip from './toolTip.js';
import initDropDownMenu from './dropdownMenu.js';
import initMenuMobile from './menuMobile.js';
import initDate from './date.js';
import initFetchAnimais from './animaisFetch.js';
import initFetchBitcoin from './fetchBitcoin.js';
import initAnimaScroll from './scrollAnimado.js';

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

initDropDownMenu();
initMenuMobile();
initDate();
initFetchAnimais();
initFetchBitcoin();
initAnimaScroll();
