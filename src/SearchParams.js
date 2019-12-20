import React, { useState, useEffect } from 'react';

import pet, { ANIMALS } from '@frontendmasters/pet';

import useDropdown from './useDropdown';

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

  // * generalized via the useDropdown component
  // const [animal, setAnimal] = useState("dog");

  // const [breed, setBreed] = useState("");

  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);

  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" 
          value={location}
          placeholder="Location" 
          onChange={event => setLocation(event.target.value)}/> 
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
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

export default SearchParams;

