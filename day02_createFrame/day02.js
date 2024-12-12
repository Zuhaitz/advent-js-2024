/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  const maxLength = Math.max(...names.map((val) => val.length));
  const res = names.reduce((acc, value) => {
    return acc + `\n* ${value + " ".repeat(maxLength - value.length)} *`;
  }, "");

  const mark = "*".repeat(maxLength + 4);
  const frame = `${mark}${res}\n${mark}`;

  return frame;
}

//Examples
console.log(createFrame(["midu", "madeval", "educalvolpz"]));

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(["midu"]));

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(["a", "bb", "ccc"]));

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(["a", "bb", "ccc", "dddd"]));

// Resultado esperado:
// ********
// * a    *
// * bb   *
// * ccc  *
// * dddd *
// ********
