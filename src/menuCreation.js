import { menuClass } from './menuClass';
import makeButton from './buttonClass';
import wrapperClass from './wrapperClass';

const makeMenuDivs = function makeDivs(...args) {
  return args.map((element) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = element;
    div.appendChild(p);
    return div;
  });
};

const menuDivs = makeMenuDivs('Menu1', 'Menu2', 'Menu3', 'Menu4');

const menu = menuClass({
  one: menuDivs[0],
  two: menuDivs[1],
  three: menuDivs[2],
  four: menuDivs[3],
});

const newItem = document.createElement('div');
const newp = document.createElement('p');
newp.textContent = 'Menu5';
newItem.appendChild(newp);

menu.addItem('five', newItem);

menu.setClass('menu-item');

const button = makeButton(document.createElement('button'));

button.setTextContent('Menu');
button.setClass('menu-button');

const mainWrapper = wrapperClass(document.createElement('div'));
mainWrapper.setClass('wrapper');
const menuWrapper = wrapperClass(document.createElement('div'));
menuWrapper.setClass('menu-wrapper');
menu.attach(menuWrapper.div);
mainWrapper.append(button.buttonElement);
mainWrapper.append(menuWrapper.div);

button.addListener(
  menu.toggleClass,
  ['visible', 'hidden'],
);

button.addListener(
  menuWrapper.toggleClass,
  ['visible', 'hidden'],
);

export default mainWrapper;
