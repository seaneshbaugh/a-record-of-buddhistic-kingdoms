export const PEOPLE_SET_CURRENT_PERSON = "PEOPLE_SET_CURRENT_PERSON";

export const peopleSetCurrentPerson = (personIndex) => ({
  type: PEOPLE_SET_CURRENT_PERSON,
  payload: {
    personIndex
  }
});
