/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  indices.map((v, i) => {
    let row = "~".repeat(length);
    const pos = v < 0 ? length + v : v;

    if (pos !== 0) {
      row = row.substring(0, pos) + "r" + row.substring(pos + 1);
    }

    res += " ".repeat(indices.length - 1 - i) + row + ` /${i + 1}\n`;
  });

  return res.substring(0, res.length - 1);
}

console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~~r~ /3
*/
