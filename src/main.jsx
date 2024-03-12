import './index.css';

import React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from "./App";

// arrow function
// const Hello = () => {}

// function Hello({name, age}) {
//   return (
//     // class reserved for JavaScript classes, so must be className for HTML
//     // each react component can only return one HTML element
//     // fragments <> </> are empty divs that you can use in react
//     //<>
//     <div className='container'>
//       <h1>Hello {name} you are {age}</h1>
//       <h2>Biiiiiiitch</h2>
//     </div>
//     // </>
//   );
// }

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
