function distributeWeight(weight: number): string {
  if (weight === 0) return;
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  if (boxRepresentations[weight]) return boxRepresentations[weight].join("\n");

  for (const num of [10, 5, 2, 1]) {
    const v = Math.floor(weight / num);
    if (v === 0) continue;

    // Get actual box pile
    let boxes = [];
    for (let _ = 0; _ < v; _++) {
      boxes = boxRepresentations[num].slice(1).concat(boxes);
    }
    boxes = [boxRepresentations[num][0]].concat(boxes);

    // Get top boxes
    let topBoxes = distributeWeight(weight - v * num)?.split("\n");
    if (!topBoxes) return boxes.join("\n");

    // Calculate union of piles
    topBoxes[topBoxes.length - 1] =
      topBoxes[topBoxes.length - 1] +
      boxes[0].slice(topBoxes.at(-1).length).trim();

    boxes = topBoxes.concat(boxes.slice(1));
    return boxes.join("\n");
  }

  return "error";
}

// Examples
console.log(distributeWeight(1));
// Devuelve:
//  _
// |_|

console.log(distributeWeight(2));
// Devuelve:
//  ___
// |___|

console.log(distributeWeight(3));
// Devuelve:
//  _
// |_|_
// |___|

console.log(distributeWeight(4));
// Devuelve:
//  ___
// |___|
// |___|

console.log(distributeWeight(5));
// Devuelve:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6));
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

console.log(distributeWeight(18));
// Devuelve:
//  _
// |_|_
// |___|_
// |     |
// |_____|___
// |         |
// |_________|

console.log(distributeWeight(121));
// Devuelve:
//  _
// |_|_______
// |         |
// |_________|
// |         |
// |_________|
// |         |
// |_________|
// |         |
// |_________|
// |         |
// |_________|
// |         |
// |_________|
// |         |
// |_________|
// |         |
// |_________|
// |         |
// |_________|
// |         |
// |_________|
// |         |
// |_________|
// |         |
// |_________|
