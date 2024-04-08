const letters = ["a", "d", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];
const spanish = ["único", "árbol", "cosas", "fútbol"];

console.log(letters.sort());
console.log(
  basket.sort(function (a, b) {
    return a - b;
  })
);
console.log(
  spanish.sort(function (a, b) {
    return a.localeCompare(b);
  })
);

// Bubble sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(numbers));

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));
