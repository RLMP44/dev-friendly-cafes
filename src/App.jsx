// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes

import Navbar from './components/Navbar/';
import CafeList from './components/CafeList/CafeList';
import Sidebar from './components/Sidebar/Sidebar';
import React from 'react';
import './App.css';

// export first so it can be rendered elsewhere
export default function App() {
  // react hooks for states
  // cafes is the state
  // setCafes is the function that changes the state (cafes)
  // setCafes([..., ..., ...])
  const [cafes, setCafes] = React.useState([]);
  // lets you run code one time at rendering and that is all
  // takes 2 arguments, JS function and empty array
  React.useEffect(() => {
    const url = 'https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes';
    fetch(url).then(response => response.json())
    .then(data => {
    setCafes(data);
    // don't need to iterate anymore
    // data.each( cafeData => {
    //   setCafes(cafeData);
    // });
    });
  }, []);

  return(
    <div className='app-frame'>
      <Navbar />
      <div className='app-body'>
        <Sidebar />
        <CafeList cafes={cafes}/>
      </div>
    </div>

  );
}
