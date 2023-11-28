// const data = [1, 2, 'three', null, ['internal1', 'internal2', 'internal3'], 0, '100', ['another string'], 10, '10'];
const data = [1, 2, 'three', null, ['internal1', 'internal2', 'internal3'], 'null', 0, '100', [], ['another string']];

const newVal = data.reduce((acc, val) => {
  if (Array.isArray(val)) acc.push(...val);
  else acc.push(val);
  return acc;
}, []);
console.log(newVal);
