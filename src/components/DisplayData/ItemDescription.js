/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFruitData } from '../../Redux/displayData/displayDataSlice';
import Navigation from '../Navigation/Navigation';
import './itemDescription.css';

function ItemDescription({ fruits }) {
  const fruit = fruits;
  const fruitItem = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFruitData(fruit));
  }, []);
  return (
    <div>
      <Navigation title={fruit} />
      { fruitItem.map((fruit) => (
        <div key={fruit.id}>
          <img src={`./assets/${fruit.name}.png`} alt={fruit.name} />
          <h1>{ fruit.name }</h1>
        </div>
      )) }
    </div>
  );
}

ItemDescription.propTypes = {
  fruits: PropTypes.string.isRequired,
};

export default ItemDescription;
