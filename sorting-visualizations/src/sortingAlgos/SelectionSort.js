import { CompStages } from '../Visualizer/enums.js';

export const SelectionSort = (arr, type) => {
  const animations = [];
  const arrcpy = arr.slice();

  selectionSort(arrcpy, animations);
  return animations;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const selectionSort = (arr, animations) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    animations.push([min, min, CompStages.FIRST_COMPARE]);
    animations.push([min, min, CompStages.SECOND_COMPARE]);

    for (let j = i + 1; j < arr.length; j++) {
      animations.push([j, min, CompStages.FIRST_COMPARE]);
      animations.push([j, min, CompStages.SECOND_COMPARE]);
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    animations.push([i, min, CompStages.FIRST_COMPARE]);
    animations.push([min, arr[i], CompStages.SWAP]);
    animations.push([i, arr[min], CompStages.SWAP]);
    animations.push([i, min, CompStages.SECOND_COMPARE]);

    swap(arr, i, min);
  }
};
