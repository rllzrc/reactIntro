import React, { useState, useEffect } from 'react';

import pet, { ANIMALS } from '@frontendmasters/pet';

import Results from './Results';

import ThemeContext from './ThemeContext';

import useDropdown from './useDropdown';

// * replace ThemeContext import now that redux is installedˀ

import { connect } from 'react-redux';

// * useEffect addition --> going to take the place of several lifecycle hooks --> takes place of componentDidMount, componentWillUnmount, and componentDidUpdate

// * added { useState } to be imported from React as well
// * this enables the location to be more dynamic isntead of hardcoded to just Seattle, that way you're able type in text
// * REACT is watching for state changes and since location was Seattle, that is why it kept it as is

// * when you type, it kicks off a reRender, serach param reRenders, then you have location, setLocation
// * location is the current state of location
// * setLocation = updater for that piece of state
// everytime you state, event is the event that happened on the input then setLocation on whatever is inside that input which then updates the state, so when reRendered location will be updated to what it is  --> useState("Seattle, WA"); is the DEFAULT state

// * search box to find various pets from API
// * input inside of the label (great for accessibility)
const SearchParams = () => {
  // const location = "Seattle, WA";

  // * this is what HOOKS look like ^_____^
  // * must ABIDE by with HOOKS, all of them begin with "use" ****
  // * examples: useState, useEffect, useCallback, useMemo

  // * another way to have stateful logic with React is with these hooks ~ ****
  // * useState --> creating a hook, when ya get is back ya get an array of two things:
  // * 1. the current state, second thing is an updater function for that particular piece of statement
  // this is destructuring 
  // bc you know this is an array, will always give back an array
  // first item is always state and second is updater function

  // * this is SUPPLANTING the need for set stte for these function components --> way to do state with hooks ~ ***
  const [location, setLocation] = useState("Seattle, WA");
ˀ
  // * generalized via the useDropdown component
  // const [animal, setAnimal] = useState("dog");

  // const [breed, setBreed] = useState("");

  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);

  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  const [pets, setPets] = useState([]);

  // * always returns a promise that will resolve upon function completion 
  // * await --> signals wait for all of this stuff to finish and then give me back that data
  async function requestPets(){
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  // * disconnected from render happens
  // * scheduling this function to run after the render happens
  // does not happen immediately, as soon as searchParams renders the first time then it will run useEffect
  // * WHY?!?!?! you don't want to slow down the first render
  // * you wanna immediately show something and then send req to API, Front End Optimization logic...

  // * line 62 is the same as const breedStrings = breeds.map((breedObj) => breedObj.name);

  // * line 65 --> when invoking useEffect, must list all of its dependencies bc it will be invoked every time render is called so by declaring its dependencies it will ONLY run when these dependencies change 

  useEffect(() => {
    //pet.breeds("dog").then(console.log, console.error);
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) =>{
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form 
        onSubmit={event => {
        event.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input id="location" 
          value={location}
          placeholder="Location" 
          onChange={event => setLocation(event.target.value)}/> 
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor='location'>
          Theme
          <select 
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value='peru'>Peru</option>
            <option value='darkblue'>Dark Blue</option>
            <option value='chartreuse'>Chartreuse</option>
            <option value='mediumorchid'>Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};





// * before creating a more generalized version of useDropdown component ****
/* <label htmlFor='animal'> 
          Animal
          <select 
            id="animal"
            value={animal}
            onChange={event => setAnimal(event.target.value)}
            onBlur={event => setAnimal(event.target.value)}>
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>{animal}</option>))}
            </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value = {breed}
            onChange = {event => setBreed(event.target.value)}
            onBlur = {event => setBreed(event.target.value)}
            disabled = {breeds.length === 0}
          >

            <option>All</option>
            {breeds.map(breedString => (
              <option key={breedString} value={breedString}>  {breedString}
              </option>
            ))}
          </select>
        </label> */

//export default SearchParams;

// const mapStateToProps = ({ theme, location }) => ({
//   theme,
//   location
// });

// const mapDispatchToProps = dispatch => ({
//   setLocation(location) {
//     dispatch(changeLocation(location));
//   },
//   setTheme(theme){
//     dispatch(changeTheme(theme));
//   }
// });


export default connect(mapStateToProps)(SearchParams);