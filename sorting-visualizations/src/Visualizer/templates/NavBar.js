import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' style={{ padding: '25px' }}>
        <Navbar.Brand href='#home' style={styles.maintext}>
          Navbar
        </Navbar.Brand>
        <Nav className='text' style={styles.subtext}>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

const styles = {
  maintext: {
    position: 'fixed',
    width: '22px',
    left: '5%'
  },
  subtext: {
    position: 'fixed',
    left: '9%',
    top: '8px'
  }
};
