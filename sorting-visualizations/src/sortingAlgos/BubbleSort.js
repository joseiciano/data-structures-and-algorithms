import { CompStages } from '../SortingVisualizer/enums.js';

export const BubbleSort = arr => {
  const animations = [];
  const arrcpy = arr.slice();

  bubblesort(arrcpy, animations);
  return animations;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const bubblesort = (arr, animations) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      animations.push([j, j + 1, CompStages.FIRST_COMPARE]);
      if (arr[j] > arr[j + 1]) {
        animations.push([j + 1, arr[j], CompStages.SWAP]);
        animations.push([j, arr[j + 1], CompStages.SWAP]);
        swap(arr, j, j + 1);
      }
      animations.push([j, j + 1, CompStages.SECOND_COMPARE]);
    }
  }
};
