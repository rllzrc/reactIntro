// * original version of a component construction
// const Pet = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Dalton"),
//     React.createElement("h2", {}, "Dog"),
//     React.createElement("h2", {}, "Shihtzu"),
//   ]);
// };

// * passing as props instead of having the parameters passed down
// * into App each time separately, this is so you have multiple instacnes of the stamp w different info in it
// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed)
//   ]);
// }

// * using object destructuring 
// * this prevents the whole props.name ordeal 

// * this is going to import the default export from the react package

import React from 'react';

// react-dom has a specfic export called render and import just that --> import just a specific feature from it
// similar to destructuring, helps you be more explicit
// remove React-Dom from below and just leave as render
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement(
    "div",
    { id: "something-important"},
    
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { 
        name: "Datlon", 
        animal: "Dog", 
        breed: "Shihtzu"
      }), 
      React.createElement(Pet, { 
        name: "Oreo", 
        animal: "Dog", 
        breed: "Maltese Mix"
      }),
      React.createElement(Pet, { 
        name: "Kurt", 
        animal: "Cat", 
        breed: "Mixed"
      })
    ]);
};

// * since import took place, no need to reference ReactDOM.render
// ReactDOM.render(
//   React.createElement(App),
//   document.getElementById('root')
// );

render(React.createElement(App), document.getElementById('root'));