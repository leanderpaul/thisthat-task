/**
 *
 * @param {object} object
 * @param {string|number|boolean} value
 */
function contains(object, value) {
  const keys = Object.keys(object);
  for (const key of keys) {
    const val = object[key];
    if (typeof val === 'object' && contains(val, value)) return true;
    else if (val === value) return true;
  }
  return false;
}

const obj = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
        num: 44,
      },
    },
  },
};

console.log(contains(obj, 44), contains(obj, 'abs'));
