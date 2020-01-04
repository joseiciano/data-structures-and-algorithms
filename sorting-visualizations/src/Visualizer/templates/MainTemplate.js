import React from 'react';
import { SideBarLeft } from './SideBarLeft.js';
import { SideBarRight } from './SideBarRight.js';
import { NavBar } from './NavBar.js';

const MainTemplate = props => {
  return (
    <div id='outer-container' style={styles.backdrop}>
      <SideBarLeft outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
      <SideBarRight outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
      <main id='page-wrap'>
        <NavBar />
        <div className='main-window'>{props.screen}</div>
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

export default MainTemplate;
