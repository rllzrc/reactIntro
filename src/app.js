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
//import Pet from './Pet';
import SearchParams from './SearchParams';

import { Router } from '@reach/router';
import Details from './Details';
const App = () => {

  // * using regular react/JS WITHOUT JSX
  // return React.createElement(
  //   "div",
  //   { id: "something-important"},
    
  //   [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, { 
  //       name: "Datlon", 
  //       animal: "Dog", 
  //       breed: "Shihtzu"
  //     }), 
  //     React.createElement(Pet, { 
  //       name: "Oreo", 
  //       animal: "Dog", 
  //       breed: "Maltese Mix"
  //     }),
  //     React.createElement(Pet, { 
  //       name: "Kurt", 
  //       animal: "Cat", 
  //       breed: "Mixed"
  //     })
  //   ]);

  // * after import of React, using JSX attributes
  // return (
  //   <div>
  //     <h1 id="something-important">Adopt Me!</h1>
  //     <Pet name="Dalton" animal="Dog" breed="Shihtzu" />
  //     <Pet name="Oreo" animal="Dog" breed="Maltese Mix" />
  //     <Pet name="Kurt" animal="Cat" breed="Mixed" />
  //   </div>
  // );

  // * with utilizing hooks/creating a search component
  return (
    <div>
      <header>
        <Link to='/'>Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path='/' />
        <Details path='/details/:id' />
      </Router>
    </div>
  );


};

// * since import took place, no need to reference ReactDOM.render
// ReactDOM.render(
//   React.createElement(App),
//   document.getElementById('root')
// );

// * before wrapping App
// render(React.createElement(App), document.getElementById('root'));

render(<App />, document.getElementById("root"));