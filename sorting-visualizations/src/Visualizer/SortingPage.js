import React from 'react';
import MainTemplate from './templates/MainTemplate';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';

const SortingPage = () => {
  const sort = SortingVisualizer();
  return (
    <div>
      <MainTemplate screen={sort} />
    </div>
  );
};

export default SortingPage;
