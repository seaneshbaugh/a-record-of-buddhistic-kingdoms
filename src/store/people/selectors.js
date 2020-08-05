import people from "../../data/people.json";

// Faxian is currently the 10th person in the list of people. TODO: Maybe
// dynmically find the index for Faxian?

export const initialState = {
  people,
  currentPerson: 9
};

export const peopleCurrentPerson = (state = initialState) => {
  if (state.currentPerson || state.currentPerson === 0) {
    return state.currentPerson;
  } else {
    return initialState.currentPerson;
  }
}
