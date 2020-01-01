import { CompStages } from '../Visualizer/enums.js';

export const HeapSort = arr => {
  const animations = [];
  const arrcpy = arr.slice();
  heapsort(arrcpy, animations);
  console.log(arrcpy);
  return animations;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const heapify = (arr, size, parent, animations) => {
  let largest = parent;
  let left = 2 * parent + 1;
  let right = 2 * parent + 2;

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== parent) {
    animations.push([parent, largest, CompStages.FIRST_COMPARE]);
    animations.push([parent, arr[largest], CompStages.SWAP]);
    animations.push([largest, arr[parent], CompStages.SWAP]);
    animations.push([parent, largest, CompStages.SECOND_COMPARE]);
    swap(arr, parent, largest);
    heapify(arr, size, largest, animations);
  }
};

const heapsort = (arr, animations) => {
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    heapify(arr, arr.length, i, animations);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    animations.push([0, i, CompStages.FIRST_COMPARE]);
    animations.push([0, arr[i], CompStages.SWAP]);
    animations.push([i, arr[0], CompStages.SWAP]);
    animations.push([0, i, CompStages.SECOND_COMPARE]);
    swap(arr, 0, i);
    heapify(arr, i, 0, animations);
  }
};
