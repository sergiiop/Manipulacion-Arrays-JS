const team = [
  {
    name: 'Sergio',
    age: 12,
  },
  {
    name: 'Akira',
    age: 8,
  },
  {
    name: 'Andrea',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 15,
  },
];

const isYoungerThatFifteen = team.every((player) => player.age <= 15);

console.log(isYoungerThatFifteen);
