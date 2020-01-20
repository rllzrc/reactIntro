import React from 'react';
import { Link } from '@reach/router';

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


const Pet = props => {
  const { name, animal, breed, media, location, id } = props;

  let hero = 'http://placecorgi.com/300/300';
  if(media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className='pet'>
      <div className='image-container'>
        <img src={hero} alt={name} />
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};






// export default function Pet ({ name, animal, breed }) {

//   // * using pure React without JSX
//     // return React.createElement("div", {}, [
//     //   React.createElement("h1", {}, name),
//     //   React.createElement("h2", {}, animal),
//     //   React.createElement("h2", {}, breed)
//     // ]);
  
//     // * using JSX syntax
//     // * basically just the shorter version of the above
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{animal}</h2>
//       <h2>{breed}</h2>
//     </div>
//   );
// }
