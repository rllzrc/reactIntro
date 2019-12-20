import React, { useState } from 'react';

// * to create a more generalized HOOK ~
// * a generic dropdown menu instead of repeating yourself
// * replaces the animal and breed dropdown to be more generalized
// * to make testing easier and ensure functionality 
// custom hook we're going to make
const useDropdown = (label, defaultState, options) => {

  // * default state is whatever the user passes in
  const [state, setState] = useState(defaultState);

  // id has to be something unique
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`

  // this is the component that we are going to make
  // {lanel} on line 19 is coming in from the parameter passed
  // onBlur = 
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
      id={id}
      value={state}
      onChange={event => setState(event.target.value)}
      onBlur={event => setState(event.target.value)}
      disabled={options.length === 0}
      >
        <option>All</option>
        {options.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </label>
  );
  
  // * we can use this just like a hook
  // * it will give you the state, dropDwn = handles all of the setting and unsetting of the state
  // * for later, return setState function so we can programmatically update it without using the dropdown

  return [state, Dropdown, setState];

};

// * to be able to use in other files
export default useDropdown;