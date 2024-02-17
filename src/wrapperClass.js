import { setClassMethod, removeClassMethod, toggleClassMethod } from './menuClass';

const appendtoSelf = (obj) => ({
  append: (child, key = 'div') => {
    obj[key].appendChild(child);
  },
});

const wrapperClass = function makeWrapperInstance(div) {
  const wrapper = {
    div,
  };
  return {
    ...wrapper,
    ...setClassMethod(wrapper),
    ...removeClassMethod(wrapper),
    ...toggleClassMethod(wrapper),
    ...appendtoSelf(wrapper),
  };
};

export default wrapperClass;
