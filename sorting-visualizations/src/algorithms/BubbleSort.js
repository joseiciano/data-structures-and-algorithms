import { CompStages, OptimizedVersion } from '../Visualizer/enums.js'

export const getBubbleSortAnimations = (arr, type) => {
    // Any array with a size of 1 or less is already sorted
    if (arr.length <= 1) return arr;
  
    const animations = [];
    const aux = arr.slice();

    if (type === OptimizedVersion.OPTIMIZED)
      bubbleSortOptimized(arr, aux, animations);
    else 
      bubbleSortUnoptimized(arr, aux, animations);
    return animations;
};
  
const bubbleSortOptimized = (arr, aux, animations) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (aux[j] > aux[j+1]) {
        animations.push([j, j+1, CompStages.FIRST_COMPARE]);
        animations.push([j, j+1, CompStages.SECOND_COMPARE]);
        animations.push([j, aux[j+1], CompStages.SWAP]);
        animations.push([j+1, aux[j], CompStages.SWAP]);
        let temp = aux[j];
        aux[j] = aux[j+1];
        aux[j+1] = temp;
      }
    }
  }
};

const bubbleSortUnoptimized = (arr, aux, animations) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1; j++) {
      if (aux[j] > aux[j+1]) {
        animations.push([j, j+1, CompStages.FIRST_COMPARE]);
        animations.push([j, j+1, CompStages.SECOND_COMPARE]);
        animations.push([j, aux[j+1], CompStages.SWAP]);
        animations.push([j+1, aux[j], CompStages.SWAP]);
        let temp = aux[j];
        aux[j] = aux[j+1];
        aux[j+1] = temp;
      }
    }
  }
};