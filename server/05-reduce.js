const totals = [1, 2, 3, 4];

//sumando todos los elementos de un array
let sum = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum += element;
}

console.log(sum);

//el primer parametro que recibe reduce es la arrowfunction
//y como segundo parametro es el estado inicial del acumulador
//a su vez la arrowfunction recibe dos parametros que seran
// el acumulador y el item
const rta = totals.reduce((acc, item) => acc + item, 0);

console.log(rta);
