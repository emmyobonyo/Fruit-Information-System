/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFruitData } from '../../Redux/displayData/displayDataSlice';
import Navigation from '../Navigation/Navigation';

function ItemDescription({ fruits, homePage }) {
  const fruit = fruits;
  const fruitItem = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFruitData(fruit));
  }, []);
  return (
    <div>
      <Navigation title={fruit} homePage={homePage} />
      { fruitItem.map((fruit) => (
        <h1 key={fruit.id}>{ fruit.name }</h1>
      )) }
    </div>
  );
}

ItemDescription.propTypes = {
  fruits: PropTypes.string.isRequired,
  homePage: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default ItemDescription;
