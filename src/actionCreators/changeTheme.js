export default function changeTheme(theme) {
  return { type: "CHANGE_THEME", payload: theme };
}


// * action creators = functions that the UI gives to the store to effect change aka actions

// * these functions create actions

// * simplest form: create an objet and return it, some inline into react components, preferred method above since it makes REFACTORING simple