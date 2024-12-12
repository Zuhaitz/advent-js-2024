/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  const res = [];
  const pairs = {};

  shoes.map((shoe) => {
    const { type, size } = shoe;
    if (!pairs[size] || pairs[size].length === 0) {
      return (pairs[size] = [type]);
    }

    if (pairs[size][0] === type) return pairs[size].push(type);

    res.push(size);
    pairs[size].pop();
  });

  return res;
}

//Examples
const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));
// [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];

console.log(organizeShoes(shoes2));
// [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

console.log(organizeShoes(shoes3));
// []
