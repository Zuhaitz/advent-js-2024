/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  return grid.map((v, i) =>
    v.map((_, j) =>
      dirs.reduce((acc, curr) => {
        if (curr[0] + i > grid.length || curr[0] + i < 0) return acc;
        if (curr[1] + j > grid[0].length || curr[1] + j < 0) return acc;

        return acc + (grid[curr[0] + i]?.at(curr[1] + j) ? 1 : 0);
      }, 0)
    )
  );
}

// Examples
console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(
  detectBombs([
    [true, false],
    [false, false],
  ])
);
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ])
);

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
