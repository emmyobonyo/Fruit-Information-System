const initialState = [];
const FETCH_DATA = 'covidTracker/displayData/FETCH_DATA';
const FETCH_FRUIT_DATA = 'covidTracker/displayData/FETCH_FRUIT_DATA';

export const fetchFruitData = (fruit) => async (dispatch) => {
  const response = await fetch(`https://radiant-retreat-45087.herokuapp.com/https://www.fruityvice.com/api/fruit/${fruit}`);
  const fruitItem = await response.json();
  const fruitDetails = [];
  fruitDetails.push({
    id: fruitItem.id,
    genus: fruitItem.genus,
    name: fruitItem.name,
    family: fruitItem.family,
    order: fruitItem.order,
    carbs: fruitItem.nutritions.carbohydrates,
    protein: fruitItem.nutritions.protein,
  });
  dispatch({ type: FETCH_FRUIT_DATA, fruitDetails });
};

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
    case FETCH_FRUIT_DATA:
      return action.fruitDetails;
    default:
      return state;
  }
};

export default fruitsReducer;
