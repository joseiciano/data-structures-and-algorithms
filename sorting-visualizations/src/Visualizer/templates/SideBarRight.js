import React from 'react';
import { reveal as Menu } from 'react-burger-menu';

const SideBarRight = props => {
  const showSettings = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Menu
        pageWrapId={props.pageWrapId}
        outerContainerId={props.outerContainerId}
        styles={styles}
        width={240}
        right
      >
        <a id='home' className='menu-item' href='/'>
          Home
        </a>
        <br />

        <a id='about' className='menu-item' href='/'>
          About
        </a>
        <br />

        <a id='contact' className='menu-item' href='/'>
          Sorting Algorithms
        </a>
        <br />

        <a onClick={() => showSettings()} className='menu-item--small' href='/'>
          Data Structures
        </a>
        <br />
      </Menu>
    </div>
  );
};

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '30px',
    top: '10px'
  },
  bmBurgerBars: {
    background: '#F0FFFF'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

export { SideBarRight };
