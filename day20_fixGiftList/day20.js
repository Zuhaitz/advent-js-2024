/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const extra = {};
  received.forEach((elem) =>
    extra[elem] ? (extra[elem] += 1) : (extra[elem] = 1)
  );

  const missing = {};
  expected.forEach((elem) => {
    if (extra[elem]) {
      extra[elem] -= 1;
      if (!extra[elem]) delete extra[elem];
    } else {
      missing[elem] ? (missing[elem] += 1) : (missing[elem] = 1);
    }
  });

  return {
    missing,
    extra,
  };
}

console.log(
  fixGiftList(
    ["puzzle", "car", "doll", "car"],
    ["car", "puzzle", "doll", "ball"]
  )
);
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(
  fixGiftList(
    ["book", "train", "kite", "train"],
    ["train", "book", "kite", "ball", "kite"]
  )
);
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(
  fixGiftList(
    ["bear", "bear", "car"],
    ["bear", "car", "puzzle", "bear", "car", "car"]
  )
);
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]));
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
