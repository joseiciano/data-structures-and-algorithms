import { CompStages } from '../SortingVisualizer/enums.js';

export const InsertionSort = arr => {
  const animations = [];
  const arrcpy = arr.slice();

  insertionSort(arrcpy, animations);
  return animations;
};

const insertionSort = (arr, animations) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    animations.push([i, i, CompStages.FIRST_COMPARE]);
    animations.push([i, i, CompStages.SECOND_COMPARE]);

    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      animations.push([j, j + 1, CompStages.FIRST_COMPARE]);
      animations.push([j, arr[j + 1], CompStages.SWAP]);
      animations.push([j + 1, arr[j], CompStages.SWAP]);
      animations.push([j, j + 1, CompStages.SECOND_COMPARE]);
      arr[j + 1] = arr[j];
    }

    animations.push([j + 1, j + 1, CompStages.FIRST_COMPARE]);
    animations.push([j + 1, key, CompStages.SWAP]);
    animations.push([j + 1, j + 1, CompStages.SECOND_COMPARE]);
    arr[j + 1] = key;
  }
};
