import { CompStages } from '../SortingVisualizer/enums.js';

export const CocktailSort = (arr, type) => {
  const animations = [];
  const arrcpy = arr.slice();

  cocktailsort(arrcpy, animations);
  return animations;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const cocktailsort = (arr, animations) => {
  let swapped = true;
  let start = 0;
  let end = arr.length - 1;

  while (swapped) {
    swapped = false;

    // Left to right first
    for (let i = start; i < end; i++) {
      animations.push([i, i + 1, CompStages.FIRST_COMPARE]);
      if (arr[i] > arr[i + 1]) {
        animations.push([i + 1, arr[i], CompStages.SWAP]);
        animations.push([i, arr[i + 1], CompStages.SWAP]);
        swap(arr, i, i + 1);
        swapped = true;
      }
      animations.push([i, i + 1, CompStages.SECOND_COMPARE]);
    }

    // Resize our array (the last element is now sorted)
    end--;

    // Now right to left
    for (let i = end - 1; i >= start; i--) {
      animations.push([i, i + 1, CompStages.FIRST_COMPARE]);
      if (arr[i] > arr[i + 1]) {
        animations.push([i + 1, arr[i], CompStages.SWAP]);
        animations.push([i, arr[i + 1], CompStages.SWAP]);
        swap(arr, i, i + 1);
        swapped = true;
      }
      animations.push([i, i + 1, CompStages.SECOND_COMPARE]);
    }

    // Now increase the starting point (the starting element is now sorted)
    start++;
  }

  return animations;
};
