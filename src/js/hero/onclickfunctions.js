import { refs } from '../refs';
import { searchCocktailsByFirstLetter } from './searchcocktailsbyfirstletter';

const { selectBtn, selectMenu, alphabet } = refs;

export function onSelectBtnClick() {
  selectMenu.classList.add('select__list-open');
  selectMenu.addEventListener('click', onSelectDropdownMenuClick);
}

function onSelectDropdownMenuClick(event) {
  selectBtn.firstElementChild.textContent = event.target.textContent;

  selectMenu.classList.remove('select__list-open');
  selectBtn.classList.add('active');
  selectBtn.lastElementChild.classList.add('active');

  searchCocktailsByFirstLetter(event.target.textContent);
}

export function onAlphabetBtnClick(event) {
  searchCocktailsByFirstLetter(event.target.textContent);
}

if (selectBtn !== null) {
  selectBtn.addEventListener('click', onSelectBtnClick);
  alphabet.addEventListener('click', onAlphabetBtnClick);
}
