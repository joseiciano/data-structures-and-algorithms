import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './Visualizer/HomePage';
import SortingPage from './Visualizer/SortingPage';

const Home = () => {
  return <div>HOMEPAGE</div>;
};
const About = () => {
  return <div>ABOUTPAGE</div>;
};
const Users = () => {
  return <div>USERSPAGE</div>;
};
export default function App() {
  return (
    <SortingPage />
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to='/'>Home</Link>
    //         </li>
    //         <li>
    //           <Link to='/about'>About</Link>
    //         </li>
    //         <li>
    //           <Link to='/users'>Users</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Switch>
    //       <Route path='/about'>
    //         <About />
    //       </Route>
    //       <Route path='/users'>
    //         <Users />
    //       </Route>
    //       <Route path='/'>
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}
