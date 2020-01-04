import React, { useState, useEffect } from 'react';
import { BubbleSort } from './sortingAlgos/BubbleSort.js';
import { CocktailSort } from './sortingAlgos/CocktailSort.js';
import { InsertionSort } from './sortingAlgos/InsertionSort.js';
import { SelectionSort } from './sortingAlgos/SelectionSort.js';
import { QuickSort } from './sortingAlgos/QuickSort.js';
import { MergeSort } from './sortingAlgos/MergeSort.js';
import { RadixSort } from './sortingAlgos/RadixSort.js';
import { HeapSort } from './sortingAlgos/HeapSort.js';
import { BarColors, SortTypes, CompStages } from './enums.js';

const ANIMATION_SPEED_MS = 55; // Change for animation speed increase/decrease
const SLOW_ANIMATIONS = ANIMATION_SPEED_MS * 1;
const DEFAULT_NUM_BARS = 197; // Change for number of bars in array
// const DEFAULT_NUM_BARS = 156; // Change for number of bars in array
const SCALE = 1.2;
const MIN = 10;
const MAX = 200;

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [Elements, setElements] = useState(DEFAULT_NUM_BARS);
  const [sortName, setSortName] = useState('');
  const [arrayMax, setArrayMax] = useState(0);

  const resetArray = numBars => {
    let arr = Array.from({ length: numBars }, (_, __) => intInRange(MIN, MAX));
    const arrBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < arrBars.length; i++) {
      const btnStyle = arrBars[i].style;
      btnStyle.backgroundColor = BarColors.PRIMARY;
    }
    setArray(arr);
    setArrayMax(MAX);
    setSortName('');
  };

  const intInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const sort = sortType => {
    setSortName(sortType);

    let animations = [];
    console.log('ARRAY CURRENTLY = ' + array);
    switch (sortType) {
      case SortTypes.BUBBLE:
        animations = BubbleSort(array).concat(passThroughSortedArray(array));
        break;
      case SortTypes.COCKTAIL:
        animations = CocktailSort(array).concat(passThroughSortedArray(array));
        break;
      case SortTypes.INSERTION:
        animations = InsertionSort(array).concat(passThroughSortedArray(array));
        break;
      case SortTypes.SELECTION:
        animations = SelectionSort(array).concat(passThroughSortedArray(array));
        break;
      case SortTypes.QUICK:
        animations = QuickSort(array).concat(passThroughSortedArray(array));
        break;
      case SortTypes.MERGE:
        animations = MergeSort(array).concat(passThroughSortedArray(array));
        break;
      case SortTypes.RADIX:
        animations = RadixSort(array).concat(passThroughSortedArray(array));
        break;
      case SortTypes.HEAP:
        animations = HeapSort(array).concat(passThroughSortedArray(array));
        break;
      default:
    }

    for (let i = 0; i < animations.length; i++) {
      const arrBars = document.getElementsByClassName('array-bar');
      const sortStage = animations[i][2];
      if (sortStage === CompStages.SWAP) {
        setTimeout(() => {
          const [bar, newHeight] = animations[i];
          const barStyle = arrBars[bar].style;
          barStyle.height = `${newHeight * SCALE}px`;
        }, i * SLOW_ANIMATIONS);
      } else if (sortStage === CompStages.FIRST_COMPARE || sortStage === CompStages.SECOND_COMPARE) {
        const [b1, b2, color] = animations[i];
        const b1Style = arrBars[b1].style;
        const b2Style = arrBars[b2].style;
        setTimeout(() => {
          b1Style.backgroundColor = color;
          b2Style.backgroundColor = color;
        }, i * SLOW_ANIMATIONS);
      } else {
        const [bar, _, color] = animations[i];
        const barStyle = arrBars[bar].style;
        setTimeout(() => {
          barStyle.backgroundColor = color;
        }, i * SLOW_ANIMATIONS);
      }
    }
  };

  const passThroughSortedArray = arr => {
    let animations = [];
    for (let i = 0; i < arr.length; i++) {
      animations.push([i, i, CompStages.FINAL_PASS_SETCURRENT]);
      if (i !== arr.length - 1) {
        animations.push([i, i, CompStages.FINAL_PASS_SETPAST]);
      }
    }

    return animations;
  };

  const updateElements = e => {
    if (isNum(e.target.value)) {
      setElements(e.target.value);
    }
  };

  const isNum = str => /^\d+$/.test(str);

  useEffect(() => {
    resetArray(Elements);
  }, []);

  return (
    <div className='array-container' style={styles.arrayContainer}>
      {sortName === '' ? (
        <h2>Click a button to view a sort</h2>
      ) : (
        <h2>Currently viewing {sortName} Sort</h2>
      )}

      <div
        className='array-bars'
        style={{
          position: 'relative',
          border: '1px solid black'
        }}
      >
        {array.map((value, idx) => (
          <div
            className='array-bar'
            key={idx}
            style={{
              position: 'relative',
              backgroundColor: `${BarColors.PRIMARY}`,
              height: `${value}px`,
              width: '5px',
              display: 'inline-block',
              margin: '0 1px',
              top: '6px'
            }}
          ></div>
        ))}
      </div>

      <div className='update-array' style={styles.arrayOptions}>
        <input
          value={Elements}
          style={{ position: 'relative', border: '1px solid black' }}
          onChange={updateElements}
        />
        <button
          style={{ position: 'relative', border: '1px solid black' }}
          onClick={() => resetArray(Elements)}
        >
          Generate New Array
        </button>
      </div>

      <div className='sorts'>
        {Object.keys(SortTypes).map((key, idx) => (
          <button className='sort-btn' style={styles.sortButtons} onClick={() => sort(SortTypes[key])}>
            {SortTypes[key]} Sort
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  arrayContainer: {
    position: 'relative',
    margin: 'auto',
    left: '50px',
    top: '100px',
    width: '80%',
    padding: '10px',
    border: '1px solid black'
  },
  sortButtons: {
    position: 'relative',
    border: '1px solid black',
    left: '20%'
  },
  arrayOptions: {
    position: 'relative',
    left: '36%'
  }
};

export default SortingVisualizer;
