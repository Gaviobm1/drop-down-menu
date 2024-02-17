import { attachMethod, setClassMethod } from './menuClass';

const setButtonTextContent = (obj) => ({
  setTextContent: (value, key = 'buttonElement') => {
    const button = obj[key];
    button.textContent = value;
  },
});

const addButtonEventListener = (obj) => ({
  addListener: (callbackFn, args = null, key = 'buttonElement') => {
    obj[key].addEventListener('click', () => {
      callbackFn(...args);
    });
  },
});

const makeButton = function makeButtonClass(buttonElement) {
  const button = {
    buttonElement,
  };
  return {
    ...button,
    ...setButtonTextContent(button),
    ...addButtonEventListener(button),
    ...attachMethod(button),
    ...setClassMethod(button),
  };
};

export default makeButton;
