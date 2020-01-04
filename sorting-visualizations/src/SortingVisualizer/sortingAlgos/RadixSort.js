import { CompStages } from '../enums.js';

export const RadixSort = (arr, type) => {
  const animations = [];
  const aux = arr.slice();

  radixSort(aux, animations);
  return animations;
};

const getMax = (aux, animations) => {
  animations.push([0, 0, CompStages.FIRST_COMPARE]);
  animations.push([0, 0, CompStages.SECOND_COMPARE]);
  let max = aux[0];
  let maxInd = 0;

  for (let i = 1; i < aux.length; i++) {
    animations.push([i, maxInd, CompStages.FIRST_COMPARE]);
    animations.push([i, maxInd, CompStages.SECOND_COMPARE]);
    if (aux[i] > max) {
      max = aux[i];
      maxInd = i;
    }
  }

  return max;
};

const radixSort = (aux, animations) => {
  // Get the maximum number in the array
  let max = getMax(aux, animations);

  // Get each digit in the max number
  for (let pow = 1; Math.floor(max / pow) > 0; pow *= 10) {
    let buckets = [];
    for (let i = 0; i < 10; i++) {
      buckets.push([]);
    }

    // Put elements into digit-based buckets
    for (let i = 0; i < aux.length; i++) {
      animations.push([i, i, CompStages.FIRST_COMPARE]);
      animations.push([i, i, CompStages.SECOND_COMPARE]);
      let bucketInd = Math.floor((aux[i] / pow) % 10);
      buckets[bucketInd].push(aux[i]);
    }

    // Put the elements back into the original array
    for (let i = 0, j = 0; i < 10; i++) {
      while (buckets[i].length > 0) {
        animations.push([j, j, CompStages.FIRST_COMPARE]);
        animations.push([j, buckets[i][0], CompStages.SWAP]);
        animations.push([j, j, CompStages.SECOND_COMPARE]);
        aux[j++] = buckets[i].shift();
      }
    }
  }

  return animations;
};
