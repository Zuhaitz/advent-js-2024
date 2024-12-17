/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  const pile = [];
  for (const c of s) {
    pile.at(-1) === c ? pile.pop() : pile.push(c);
  }
  return pile.join("");
}

// Examples
console.log(removeSnow("zxxzoz")); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow("abcdd")); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow("zzz")); // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow("a")); // -> "a"
// No hay montículos repetidos
