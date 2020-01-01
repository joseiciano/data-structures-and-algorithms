import { CompStages } from '../Visualizer/enums.js';

export const QuickSort = arr => {
  const animations = [];
  const arrcpy = arr.slice();
  quicksort(arrcpy, 0, arr.length - 1, animations);
  return animations;
};

const quicksort = (arr, lo, hi, animations) => {
  if (lo >= hi) return;

  let split = partition(arr, lo, hi, animations);
  quicksort(arr, lo, split - 1, animations);
  quicksort(arr, split + 1, hi, animations);
};

const partition = (arr, lo, hi, animations) => {
  let pivot = arr[hi];
  let i = lo - 1;

  for (let j = lo; j < hi; j++) {
    animations.push([j, hi, CompStages.FIRST_COMPARE]);
    animations.push([j, hi, CompStages.SECOND_COMPARE]);
    if (arr[j] < pivot) {
      animations.push([i + 1, j, CompStages.FIRST_COMPARE]);
      animations.push([j, arr[i + 1], CompStages.SWAP]);
      animations.push([i + 1, arr[j], CompStages.SWAP]);
      animations.push([i + 1, j, CompStages.SECOND_COMPARE]);
      i++;
      swap(arr, i, j);
    }
  }

  animations.push([i + 1, hi, CompStages.FIRST_COMPARE]);
  animations.push([hi, arr[i + 1], CompStages.SWAP]);
  animations.push([i + 1, arr[hi], CompStages.SWAP]);
  animations.push([i + 1, hi, CompStages.SECOND_COMPARE]);
  swap(arr, i + 1, hi);
  return i + 1;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
