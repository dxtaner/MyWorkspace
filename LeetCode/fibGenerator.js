/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let [prev, current] = [0, 1];

  while (true) {
    yield prev;
    [prev, current] = [current, prev + current];
  }
};

// Example usage:
const gen = fibGenerator();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ... and so on
