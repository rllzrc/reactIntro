import React from 'react';

// export const Pet = ({ name, animal, breed }) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, animal),
//     React.createElement("h2", {}, breed)
//   ]);
// };

// * changed to:
// * useful for debugging so stack trace to find that pet has the error
// * default export for components is always the component
export default function Pet ({ name, animal, breed }) {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, name),
      React.createElement("h2", {}, animal),
      React.createElement("h2", {}, breed)
    ]);
}; 
