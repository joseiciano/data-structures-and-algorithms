import { CompStages } from '../Visualizer/enums.js';

export const InsertionSort = arr => {
  const animations = [];
  const aux = arr.slice();

  insertionSort(aux, animations);
  return animations;
};

const insertionSort = (aux, animations) => {
  for (let i = 1; i < aux.length; i++) {
    animations.push([i, i, CompStages.FIRST_COMPARE]);
    animations.push([i, i, CompStages.SECOND_COMPARE]);
    let start = aux[i];
    let j = i;

    for (j = i; j > 0 && start < aux[j - 1]; j--) {
      animations.push([j, j - 1, CompStages.FIRST_COMPARE]);
      animations.push([j, aux[j - 1], CompStages.SWAP]);
      animations.push([j - 1, aux[j], CompStages.SWAP]);
      animations.push([j, j - 1, CompStages.SECOND_COMPARE]);
      aux[j] = aux[j - 1];
    }

    animations.push([j, start, CompStages.SWAP]);
    aux[j] = start;
  }
};
