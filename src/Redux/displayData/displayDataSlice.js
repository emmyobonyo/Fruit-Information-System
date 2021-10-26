const initialState = [];
const FETCH_DATA = 'covidTracker/displayData/FETCH_DATA';

export const fetchData = () => async (dispatch) => {
  const response = await fetch('https://radiant-retreat-45087.herokuapp.com/https://www.fruityvice.com/api/fruit/all');
  const fruits = await response.json();
  const newFruits = [];
  fruits.forEach((fruit) => {
    newFruits.push({
      id: fruit.id,
      name: fruit.name,
      family: fruit.family,
    });
  });
  dispatch({ type: FETCH_DATA, newFruits });
};

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.newFruits;
    default:
      return state;
  }
};

export default fruitsReducer;
