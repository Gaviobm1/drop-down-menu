const attachMethod = (obj) => ({
  attach: (parent = document.body) => {
    Object.keys(obj).forEach((key) => {
      parent.appendChild(obj[key]);
    });
  },
});

const setClassMethod = (obj) => ({
  setClass: (classToSet) => {
    Object.keys(obj).forEach((key) => {
      obj[key].classList.add(classToSet);
    });
  },
});

const removeClassMethod = (obj) => ({
  removeClass: (classToRemove) => {
    Object.keys(obj).forEach((key) => {
      obj[key].classList.remove(classToRemove);
    });
  },
});

const toggleClassMethod = (obj) => ({
  toggleClass: (class1, class2) => {
    Object.keys(obj).forEach((key) => {
      const classes = obj[key].classList;
      if (classes.contains(class2)) {
        classes.remove(class2);
        classes.add(class1);
      } else if (classes.contains(class1)) {
        classes.remove(class1);
        classes.add(class2);
      } else {
        classes.add(class1);
      }
    });
  },
});

const setTextContentMethod = (obj) => ({
  setTextContent: (key, value) => {
    const p = obj[key].firstChild;
    p.textContent = value;
  },
});

const addItemToMenu = (obj) => ({
  addItem: (key, value) => {
    const objVar = obj;
    objVar[key] = value;
  },
});

const fourItemMenuClass = function makeMenu({
  one,
  two,
  three,
  four,
}) {
  const menu = {
    one,
    two,
    three,
    four,
  };
  return {
    ...menu,
    ...attachMethod(menu),
    ...setClassMethod(menu),
    ...removeClassMethod(menu),
    ...setTextContentMethod(menu),
    ...toggleClassMethod(menu),
    ...addItemToMenu(menu),
  };
};

export {
  fourItemMenuClass,
  attachMethod,
  setClassMethod,
  removeClassMethod,
  toggleClassMethod,
};
