import { CompStages, OptimizedVersion } from '../Visualizer/enums.js';

export const BubbleSort = (arr, type) => {
  const animations = [];
  const aux = arr.slice();

  if (type === OptimizedVersion.OPTIMIZED) bubbleSortOptimized(aux, animations);
  else bubbleSortUnoptimized(aux, animations);
  return animations;
};

const bubbleSortOptimized = (aux, animations) => {
  for (let i = 0; i < aux.length; i++) {
    for (let j = 0; j < aux.length - i - 1; j++) {
      if (aux[j] > aux[j + 1]) {
        animations.push([j, j + 1, CompStages.FIRST_COMPARE]);
        animations.push([j, j + 1, CompStages.SECOND_COMPARE]);
        animations.push([j, aux[j + 1], CompStages.SWAP]);
        animations.push([j + 1, aux[j], CompStages.SWAP]);

        let temp = aux[j];
        aux[j] = aux[j + 1];
        aux[j + 1] = temp;
      }
    }
  }
};

const bubbleSortUnoptimized = (aux, animations) => {
  for (let i = 0; i < aux.length; i++) {
    for (let j = 0; j < aux.length - 1; j++) {
      if (aux[j] > aux[j + 1]) {
        animations.push([j, j + 1, CompStages.FIRST_COMPARE]);
        animations.push([j, j + 1, CompStages.SECOND_COMPARE]);
        animations.push([j, aux[j + 1], CompStages.SWAP]);
        animations.push([j + 1, aux[j], CompStages.SWAP]);
        let temp = aux[j];
        aux[j] = aux[j + 1];
        aux[j + 1] = temp;
      }
    }
  }
};
