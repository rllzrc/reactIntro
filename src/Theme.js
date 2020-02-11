export default function theme(state = 'darkblue', action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return action.payload;
      default: 
        return state;
  }
}

// other reducers created to make/dispatch actions
// * reducers are synchronous: cant be async
// * must be PURE functions with NO SIDE EFFECTS
// * reducers also must have a default state