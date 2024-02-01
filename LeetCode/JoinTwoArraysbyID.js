/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const idMap = new Map();

  // Birleştirme işlemi
  [arr1, arr2].forEach((arr) => {
    arr.forEach((obj) => {
      const existingObj = idMap.get(obj.id);
      if (existingObj) {
        // Objeyi birleştir
        Object.assign(existingObj, obj);
      } else {
        // Yeni bir nesne ekleyin
        idMap.set(obj.id, { ...obj });
      }
    });
  });

  // Sonuçları sırala
  const joinedArray = Array.from(idMap.values()).sort((a, b) => a.id - b.id);

  return joinedArray;
};

// Örnek kullanım
const example1Arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
];
const example1Arr2 = [{ id: 3, x: 5 }];
console.log(join(example1Arr1, example1Arr2));

const example2Arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
const example2Arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
console.log(join(example2Arr1, example2Arr2));

const example3Arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const example3Arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
console.log(join(example3Arr1, example3Arr2));
