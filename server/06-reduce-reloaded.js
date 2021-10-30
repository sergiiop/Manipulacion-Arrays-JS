const items = [1, 3, 2, 3, 3, 2, 1, 1, 1, 10];

const rta = items.reduce((acc, item) => {
  console.log(acc, item);
  if (!acc[item]) {
    acc[item] = 1;
  } else {
    acc[item] = acc[item] + 1;
  }
  return acc;
}, {});

console.log(rta);

const rta1 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});
