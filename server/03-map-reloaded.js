const order = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

const rta = order.map((element) => element.total);
console.log(rta);

//mala forma, ya que muta el array original
// const rta2 = order.map((element) => {
//   item.tax = 0.19;
//   return item;
// });

//la forma correcta es creando un objeto nuevo, haciendo primero una copia del objeto en cuestion y luego agregarle el nuevo valor
const rt3 = order.map((element) => {
  //retornamos un nuevo objeto
  return {
    //para hacer una copia del objeto anterior para no mutarlo
    //lo hacemos con el spread operator
    ...element,
    tax: 0.19,
  };
});

console.log(order);
console.log(rt3);
