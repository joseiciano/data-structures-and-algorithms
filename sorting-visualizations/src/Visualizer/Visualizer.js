import React, { useState, useEffect } from 'react';
import { BubbleSort } from '../sortingAlgos/BubbleSort.js';
import { CocktailSort } from '../sortingAlgos/CocktailSort.js';
import { InsertionSort } from '../sortingAlgos/InsertionSort.js';
import { SelectionSort } from '../sortingAlgos/SelectionSort.js';
import { QuickSort } from '../sortingAlgos/QuickSort.js';
import { MergeSort } from '../sortingAlgos/MergeSort.js';
import { RadixSort } from '../sortingAlgos/RadixSort.js';
import { HeapSort } from '../sortingAlgos/HeapSort.js';
import { BarColors, SortTypes, CompStages } from './enums.js';
import './Visualizer.css';

const ANIMATION_SPEED_MS = 55; // Change for animation speed increase/decrease
const SLOW_ANIMATIONS = ANIMATION_SPEED_MS * 5;
const DEFAULT_NUM_BARS = 10; // Change for number of bars in array
// const DEFAULT_NUM_BARS = 156; // Change for number of bars in array
const SCALE = 1.2;

const Visualizer = () => {
  const [array, setArray] = useState([]);
  const [numEle, setNumEle] = useState(DEFAULT_NUM_BARS);
  const [sortName, setSortName] = useState('');

  const resetArray = numBars => {
    setArray(Array.from({ length: numBars }, (_, __) => intInRange(10, 200)));
  };

  const intInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const sort = sortType => {
    setSortName(sortType);

    let animations = [];
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
        console.log('SORTSTAGE = ' + sortStage);
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

  const updateNumEle = e => {
    if (isNum(e.target.value)) {
      setNumEle(e.target.value);
    }
  };

  const isNum = str => /^\d+$/.test(str);

  return (
    <div
      className='array-container'
      style={{
        position: 'relative',
        margin: 'auto',
        width: `80%`,
        paddingTop: '0px',
        border: '1px solid black'
      }}
    >
      {sortName === '' ? (
        <h2>Click a button to view a sort</h2>
      ) : (
        <h2>Currently viewing {sortName} sort</h2>
      )}

      <div className='array-bars' style={{ display: 'inline-block', height: `${Math.max(array)}px` }}>
        {array.map((value, idx) => (
          <div
            className='array-bar'
            key={idx}
            style={{
              display: 'inline-block',
              margin: '0 1px',
              width: `5px`,
              backgroundColor: CompStages.SECOND_COMPARE,
              height: `${value * SCALE}px`,
              border: '1px solid black'
            }}
          ></div>
        ))}
      </div>

      <div className='update-array'>
        <input value={numEle} onChange={updateNumEle} />
        <button onClick={() => resetArray(numEle)}>Generate New Array</button>
      </div>

      <div className='sorts'>
        <button className='sort-btn' onClick={() => sort(SortTypes.BUBBLE)}>
          Bubble Sort
        </button>
        <button className='sort-btn' onClick={() => sort(SortTypes.COCKTAIL)}>
          Cocktail Sort
        </button>
        <button className='sort-btn' onClick={() => sort(SortTypes.INSERTION)}>
          Insertion Sort
        </button>
        <button className='sort-btn' onClick={() => sort(SortTypes.SELECTION)}>
          Selection Sort
        </button>
        <button className='sort-btn' onClick={() => sort(SortTypes.QUICK)}>
          Quick Sort
        </button>
        <button className='sort-btn' onClick={() => sort(SortTypes.MERGE)}>
          Merge Sort
        </button>
        <button className='sort-btn' onClick={() => sort(SortTypes.RADIX)}>
          Radix Sort
        </button>
        <button className='sort-btn' onClick={() => sort(SortTypes.HEAP)}>
          Heap Sort
        </button>
      </div>
    </div>
  );
};

export default Visualizer;
