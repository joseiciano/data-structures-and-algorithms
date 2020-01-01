import { CompStages } from '../Visualizer/enums.js';

export const SelectionSort = (arr, type) => {
  const animations = [];
  const aux = arr.slice();

  selectionSort(aux, animations);
  return animations;
};

const selectionSort = (aux, animations) => {
  for (let i = 0; i < aux.length; i++) {
    let min = i;
    animations.push([min, min, CompStages.FIRST_COMPARE]);
    animations.push([min, min, CompStages.SECOND_COMPARE]);

    for (let j = i + 1; j < aux.length; j++) {
      animations.push([j, min, CompStages.FIRST_COMPARE]);
      animations.push([j, min, CompStages.SECOND_COMPARE]);
      if (aux[j] < aux[min]) {
        min = j;
      }
    }

    animations.push([i, min, CompStages.FIRST_COMPARE]);
    animations.push([i, min, CompStages.SECOND_COMPARE]);
    animations.push([i, aux[min], CompStages.SWAP]);
    animations.push([min, aux[i], CompStages.SWAP]);

    let temp = aux[min];
    aux[min] = aux[i];
    aux[i] = temp;
  }
};
