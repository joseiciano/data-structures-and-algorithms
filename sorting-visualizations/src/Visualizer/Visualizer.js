import React, { useState, useEffect } from 'react';
import { getBubbleSortAnimations } from '../algorithms/BubbleSort.js';
import { getInsertionSortAnimations } from '../algorithms/InsertionSort.js';
import { BarColors, SortTypes, CompStages, OptimizedVersion } from './enums.js';
import './Visualizer.css';

const ANIMATION_SPEED_MS = 1; // Change for animation speed increase/decrease
const DEFAULT_NUM_BARS = 200; // Change for number of bars in array
const SCALE = 1.5;

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

    let finished = false;
    let animations = [];
    if (sortType === SortTypes.BUBBLE)
      animations = getBubbleSortAnimations(array, OptimizedVersion.OPTIMIZED);
    else if (sortType === SortTypes.INSERTION) animations = getInsertionSortAnimations(array);

    for (let i = 0; i < animations.length; i++) {
      const arrBars = document.getElementsByClassName('array-bar');
      const sortStage = animations[i][2];
      if (sortStage === CompStages.SWAP) {
        setTimeout(() => {
          const [bar, newHeight] = animations[i];
          const barStyle = arrBars[bar].style;
          barStyle.height = `${newHeight * SCALE}px`;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [b1, b2, compCol] = animations[i];
        const b1Style = arrBars[b1].style;
        const b2Style = arrBars[b2].style;
        const color = compCol === CompStages.FIRST_COMPARE ? BarColors.SECONDARY : BarColors.PRIMARY;
        setTimeout(() => {
          b1Style.backgroundColor = color;
          b2Style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const updateNumEle = e => {
    if (isNum(e.target.value)) setNumEle(e.target.value);
  };

  const isNum = str => /^\d+$/.test(str);

  useEffect(() => {
    resetArray(numEle);
  }, []);

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
      {array.map((value, idx) => (
        <div
          className='array-bar'
          key={idx}
          style={{
            display: 'inline-block',
            margin: '0 1px',
            width: `5px`,
            backgroundColor: BarColors.PRIMARY,
            height: `${value * SCALE}px`
          }}
        ></div>
      ))}
      <div className='update-array'>
        <input value={numEle} onChange={updateNumEle} />
        <button onClick={() => resetArray(numEle)}>Generate New Array</button>
      </div>

      <div className='sorts'>
        <button onClick={() => sort(SortTypes.BUBBLE)}>Bubble Sort</button>
        <button onClick={() => sort(SortTypes.BUBBLE)}>Insertion Sort</button>
        <button onClick={() => sort(SortTypes.BUBBLE)}>Selection Sort</button>
        <button onClick={() => sort(SortTypes.BUBBLE)}>Quick Sort</button>
        <button onClick={() => sort(SortTypes.BUBBLE)}>Merge Sort</button>
        <button onClick={() => sort(SortTypes.BUBBLE)}>Radix Sort</button>
        <button onClick={() => sort(SortTypes.BUBBLE)}>Heap Sort</button>
      </div>
    </div>
  );
};

export default Visualizer;
