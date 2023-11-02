import people from "../../data/people.json";

// Faxian is the first person in the list.
export const initialState = {
  people,
  currentPerson: 0
};

export const peopleCurrentPerson = (state = initialState) => {
  if (state.currentPerson || state.currentPerson === 0) {
    return state.currentPerson;
  } else {
    return initialState.currentPerson;
  }
}
