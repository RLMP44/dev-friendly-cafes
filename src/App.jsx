// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes

import './App.css';
import React from 'react';
import Navbar from './components/Navbar/';
import Sidebar from './components/Sidebar/Sidebar';
import CafeList from './components/CafeList/CafeList';

// export first so it can be rendered elsewhere
export default function App() {
  // react hooks for states
  // cafes is the state
  // setCafes is the function that changes the state (cafes)
  // setCafes([..., ..., ...])
  const [cafes, setCafes] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  // lets you run code one time at rendering and that is all
  // takes 2 arguments, JS function and empty array
  React.useEffect(() => {
    const url = 'https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes';
    const params = (keyword !== '') ? `?title=${keyword}` : "";
    fetch(url + params)
      .then(response => response.json())
      .then(data => {
        console.log('calling api');
      setCafes(data);
    // don't need to iterate anymore
    // data.each( cafeData => {
    //   setCafes(cafeData);
    // });
    });
  }, [keyword]);

  return(
    <div className='app-frame'>
      <Navbar setKeyword={setKeyword}/>
      <div className='app-body'>
        <Sidebar setCafes={setCafes}/>
        <CafeList cafes={cafes}/>
      </div>
    </div>

  );
}
