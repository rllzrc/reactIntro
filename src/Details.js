import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import { navigate } from './Carousel';
import Modal from './Modal';
// const Details = () => {
//   return <h1>hi lulz</h1>
// };

// can't use hooks with classes
// * utilizing class components
// * component did mount is v similar to useEffect
// * it runs when it first starts up, but then it stops after that one time

class Details extends React.Component {
  // state = { loading: true };
  state = { loading: true, showModal: true };
  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);

  render() {
    if(this.state.loading) {
      return <h1> loading...</h1>
    }
  

  // const { animal, breed, location, description, media, name } = this.state;

  const {
    animal,
    breed,
    location,
    description,
    media,
    name,
    showModal,
  } = this.state;

  return (
    <div className='details'>
      <Carousel media={media} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              // style={{ backgroundColor: theme }}
              onClick={this.toggleModal}
              style={{ backgroundColor: theme }}
            >
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <h1>Would you like to adopt {name}?</h1>
            <div className='buttons'>
              <button onClick={this.adopt}>Yes</button>
              <button onClick={this.toggleModal}>No, I am a monster lulz</button>
            </div>
          </Modal>
        ) : null }
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