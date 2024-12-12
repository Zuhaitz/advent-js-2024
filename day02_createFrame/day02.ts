function createFrame(names: string[]): string {
  const maxLength = Math.max(...names.map((val) => val.length));
  const res = names.reduce((acc: string, value: string) => {
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
