import { CompStages } from '../Visualizer/enums.js';

export const MergeSort = arr => {
  const animations = [];
  const aux = arr.slice();
  const arrcpy = arr.slice();
  mergesort(arrcpy, 0, arr.length - 1, aux, animations);
  return animations;
};

const mergesort = (arr, lo, hi, aux, animations) => {
  if (lo >= hi) return;

  const mid = Math.floor(lo + (hi - lo) / 2);
  mergesort(aux, lo, mid, arr, animations);
  mergesort(aux, mid + 1, hi, arr, animations);

  let k = lo;
  let i = lo;
  let j = mid + 1;
  while (i <= mid || j <= hi) {
    // Only the lower end of the array exists
    if (j > hi) {
      animations.push([i, i, CompStages.FIRST_COMPARE]); // Change color of indices (i, i). This is what we are comparing
      animations.push([i, i, CompStages.SECOND_COMPARE]); // Change the color back by pushing them again
      animations.push([k, aux[i], CompStages.SWAP]); // Overwrite position k (in original array) with position i of (auxillary array)
      arr[k++] = aux[i++];
    }

    // Only the upper end of the array exists
    else if (i > mid) {
      animations.push([j, j, CompStages.FIRST_COMPARE]); // Change color of indices (j, j). This is what we are comparing
      animations.push([j, j, CompStages.SECOND_COMPARE]); // Change the color back by pushing them again
      animations.push([k, aux[j], CompStages.SWAP]); // Overwrite position k (in original array) with position i of (auxillary array)
      arr[k++] = aux[j++];
    }

    // We are comparing values on both ends of the array
    else {
      animations.push([i, j, CompStages.FIRST_COMPARE]); // Change color of indices (i, j). This is what we are comparing
      animations.push([i, j, CompStages.SECOND_COMPARE]); // Change the color back by pushing them again

      if (aux[i] <= aux[j]) {
        animations.push([k, aux[i], CompStages.SWAP]); // Overwrite position k (in original array) with position i of (auxillary array)
        arr[k++] = aux[i++];
      } else {
        animations.push([k, aux[j], CompStages.SWAP]); // Overwrite position k (in original array) with position j of (auxillary array)
        arr[k++] = aux[j++];
      }
    }
  }
};
