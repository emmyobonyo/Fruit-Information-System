const initialState = [];
const FETCH_DATA = 'covidTracker/displayData/FETCH_DATA';
const FETCH_FRUIT_DATA = 'covidTracker/displayData/FETCH_FRUIT_DATA';
const FILTER_FRUIT_DATA = 'covidTracker/displayData/FILTER_DATA';

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
    fat: fruitItem.nutritions.fat,
    calories: fruitItem.nutritions.calories,
    sugar: fruitItem.nutritions.sugar,
    homePage: false,
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
      order: fruit.family,
      homePage: true,
    });
  });
  dispatch({ type: FETCH_DATA, newFruits });
};

export const filterFruitData = (input) => async (dispatch) => {
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
  const filteredFruits = newFruits.filter((fruit) => (
    fruit.name.toLowerCase().includes(input.toLowerCase())
  ));
  dispatch({ type: FILTER_FRUIT_DATA, filteredFruits });
};

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.newFruits;
    case FETCH_FRUIT_DATA:
      return action.fruitDetails;
    case FILTER_FRUIT_DATA:
      return action.filteredFruits;
    default:
      return state;
  }
};

export default fruitsReducer;
