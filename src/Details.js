import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

// const Details = () => {
//   return <h1>hi lulz</h1>
// };

// can't use hooks with classes
// * utilizing class components
// * component did mount is v similar to useEffect
// * it runs when it first starts up, but then it stops after that one time

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }

  render() {
    if(this.state.loading) {
      return <h1> loading...</h1>
    }
  

  const { animal, breed, location, description, media, name } = this.state;

  return (
    <div className='details'>
      <Carousel media={media} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  )

  }
}

export default Details;
export default function DetailsErrorBoundary(props){
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}