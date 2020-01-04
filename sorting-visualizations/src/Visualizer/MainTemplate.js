import React from 'react';
import { SideBarLeft } from './templates/SideBarLeft.js';
import { SideBarRight } from './templates/SideBarRight.js';
import { NavBar } from './templates/NavBar.js';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer.js';

const MainTemplate = () => {
  return (
    <div id='outer-container' style={styles.backdrop}>
      <SideBarLeft outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
      <SideBarRight outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
      <main id='page-wrap'>
        <NavBar />
        <div className='main-window'>
          <SortingVisualizer />
        </div>
      </main>
      <br />
    </div>
  );
};

const styles = {
  backdrop: {
    position: 'fixed',
    backgroundColor: '#222',
    color: ' #e6e6e6',
    borderColor: '#e6e6e6',
    height: '100%',
    width: '100%'
  },
  mainWindow: {
    position: 'fixed',
    width: '100%'
  }
};
export { MainTemplate };
