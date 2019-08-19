// REST Params, conversion entre une liste de valeurs -> tableau
function sum1(...nbs) {
  return nbs.reduce((acc, nb) => acc + nb, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// SPREAD conversion entre un tableau -> liste de valeurs

function sum2(a, b, c, d) {
  return a + b + c + d;
}

const nbs = [1, 2, 3, 4];
console.log(sum2(...nbs)); // 10

// SPREAD sur des tableaux
const newNbs = [...nbs, 5];

// Destructuration
// const trois = nbs[2];
// const quatre = nbs[3];
// const cinq = (nbs[4] !== undefined) ? nbs[4] : 5;
//    [1, 2,     3,      4]
const [ ,  , trois, quatre, cinq = 5] = nbs;
const [ ,  , ...troisQuatreCinq] = nbs;

// ES2018 / ES9
// REST / SPREAD Objects
// Conversion liste de clé/valeur <-> objet

const coords = {x: 10, y: 20};
// coords.z = 30;
// let keyZ = 'z';
// coords[keyZ] = 30;
const coords3d = {...coords, z: 30}; // SPREAD
//    {z: 30, x: 10, y: 20}
const {z: vZ, ...coords2d } = coords2d; // REST
const {z = 30} = coords3d;

const props = {
  items: [1, 2, 3],
  selected: 3,
  onSelect: (selected) => {},
};

const { items = [], selected, onSelect = () => {}} = props;
