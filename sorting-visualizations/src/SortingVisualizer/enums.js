const BarColors = {
  PRIMARY: 'turquoise',
  SECONDARY: 'red',
  PASSING: 'blue',
  IS_SORTED: 'purple',
  PIVOT: 'gold'
};

const SortTypes = {
  BUBBLE: 'Bubble',
  INSERTION: 'Insertion',
  SELECTION: 'Selection',
  QUICK: 'Quick',
  MERGE: 'Merge',
  RADIX: 'Radix',
  HEAP: 'Heap'
};

const CompStages = {
  FIRST_COMPARE: BarColors.SECONDARY,
  SECOND_COMPARE: BarColors.PRIMARY,
  SWAP: '#FFA07A',
  FINAL_PASS_SETCURRENT: BarColors.PASSING,
  FINAL_PASS_SETPAST: BarColors.IS_SORTED
};

export { BarColors, SortTypes, CompStages };
