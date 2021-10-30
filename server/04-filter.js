const words = ['spary', 'limit', 'elite', 'exuberant'];

//Con un for normal
// const newArray = [];
// for (let index = 0; index < words.length; index++) {
//   const element = words[index];
//   if (element.length >= 6) {
//     newArray.push(element);
//   }
// }
// console.log(newArray);
//Con el metodo filter

const arrayFiltered = words.filter((item) => item.length >= 6);
console.log(arrayFiltered);

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

const isDelivered = order.filter((item) => item.delivered);
// Si la condicion es verdadera el item pasara al nuevo array
console.log(isDelivered);

const isDeliveredAndMajorAt100 = order.filter(
  (item) => item.delivered && item.total >= 100
);
console.log(isDeliveredAndMajorAt100);

//Query seria el string que vamos a buscar en los nombres de los objetos
const search = (query) => {
  return order.filter((item) => item.customerName.includes(query));
};

console.log(order);
console.log(search('ti'));

//reto
// Dado un array de objetos con name, lastName, age, ¿Como harias el metodo para que el buscador encuentre
// coincidencias con cualquiera de esos atributos?

const persona = [
  {
    name: 'Sergio',
    lastName: 'Perez',
    age: 22,
  },
  {
    name: 'Akira',
    lastName: 'Moralez',
    age: 21,
  },
  {
    name: 'Ramiro',
    lastName: 'Guzman',
    age: 22,
  },
  {
    name: 'Juan F',
    lastName: 'Utria',
    age: 24,
  },
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 26,
  },
  {
    name: 'marco',
    lastName: 'Grijalva',
    age: 22,
  },
];

const newSearch = (query) => {
  return persona.filter(({ name, lastName, age }) => {
    return `${name}${lastName}`.includes(query) || age === query;
  });
};

console.log(newSearch(22));
