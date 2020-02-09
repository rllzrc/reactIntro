export default function location(state = 'Seattle, WA', action) {
  switch(action.type) {
    case "CHANGE_LOCATION":
      return action.payload;
      default:
        return state;
  }
}

// * this is the reducer, under reducer file is combo func that makes it easier; no need to write your own root reducer...delegate all changes in location to this specific reducer...

// * takes in an old state, action, and combines those things to make a state

// * reducer must have a default state! ES6 uses default params = redux will initialize store this way 