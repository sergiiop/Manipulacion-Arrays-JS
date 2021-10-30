const list = [];

for (let i = 0; i < 20; i++) {
  list.push(Math.ceil(Math.random() * 10));
}

console.log(list);

const rta = list.reduce(
  (obj, item) => {
    if (item < 6) {
      obj['1-5'] += +1;
    } else if (item < 9) {
      obj['6-8'] = obj['6-8'] + 1;
    } else {
      obj['9-10'] = obj['9-10'] + 1;
    }
    return obj;
  },
  {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
  }
);

console.log(rta);
