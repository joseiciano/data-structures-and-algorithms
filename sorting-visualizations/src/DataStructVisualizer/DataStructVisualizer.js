import React, { useState, useEffect } from 'react';

const DATA_STRUCTS = {
  ARRAYS: 'Arrays',
  LINKED: 'Linked Lists',
  BST: 'Binary Search Trees',
  TRIE: 'Tries',
  GRAPH: 'Graphs'
};

const MIN = 10;
const MAX = 200;
const SCALE = 1.2;
const DATA_SIZE = 30;

const DataStructVisualizer = () => {
  const [data, setData] = useState([]);
  const [dataMax, setDataMax] = useState(0);

  const resetData = () => {
    let arr = Array.from({ length: DATA_SIZE }, (_, __) => intInRange(MIN, MAX));
    setData(arr);
    setDataMax(MAX);
  };

  const showData = dataType => {};
  return (
    <div className='container'>
      <div className='sorts'>
        {Object.keys(DATA_STRUCTS).map((key, idx) => (
          <button
            className='sort-btn'
            style={styles.sortButtons}
            onClick={() => console.log(DATA_STRUCTS[key])}
          >
            {DATA_STRUCTS[key]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DataStructVisualizer;
