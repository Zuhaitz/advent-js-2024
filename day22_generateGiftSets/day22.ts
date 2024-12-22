function generateGiftSets(gifts: string[]): string[][] {
  const combinations = [];
  const generateCombinations = (
    start: number,
    size: number,
    current: string[]
  ) => {
    if (current.length === size) return combinations.push([...current]);

    for (let i = start; i < gifts.length; i++) {
      current.push(gifts[i]);
      generateCombinations(i + 1, size, current);
      current.pop();
    }
  };

  for (let size = 1; size <= gifts.length; size++) {
    generateCombinations(0, size, []);
  }

  return combinations;
}

// Examples
console.log(generateGiftSets(["car", "doll", "puzzle"]));
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(["ball"]));
// [
//   ['ball']
// ]

console.log(generateGiftSets(["game", "pc"]));
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
