function createXmasTree(height: number, ornament: string): string {
  let crown = "";
  for (let i = 0; i < height; i++) {
    crown += "_".repeat(height - 1 - i);
    crown += ornament.repeat(i) + ornament + ornament.repeat(i);
    crown += "_".repeat(height - 1 - i);
    crown += "\n";
  }

  const log = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
  const res = `${crown}${log}\n${log}`;
  return res;
}

//Examples
const tree = createXmasTree(5, "*");
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
