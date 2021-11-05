import ScrollSuave from './scrollSuave.js';
import initAccordion from './accordion.js';
import initTabNav from './initTabNav.js';
import initModal from './modal.js';
import initToolTip from './toolTip.js';
import initDropDownMenu from './dropdownMenu.js';
import initMenuMobile from './menuMobile.js';
import initDate from './date.js';
import initFetchAnimais from './animaisFetch.js';
import initFetchBitcoin from './fetchBitcoin.js';
import initAnimaScroll from './scrollAnimado.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAccordion();
initTabNav();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initDate();
initFetchAnimais();
initFetchBitcoin();
initAnimaScroll();
