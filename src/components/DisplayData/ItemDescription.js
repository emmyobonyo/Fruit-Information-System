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
          <div className="item-header">
            <img src={`./assets/${fruit.name}.png`} alt={fruit.name} />
            <h1>{ fruit.name }</h1>
          </div>
          <h5 className="item-paragraph">{` Some more information about ${fruit.name}'s`}</h5>
          <div className="item-table">
            <table>
              <tr>
                <th>id</th>
                <td>{ fruit.id }</td>
              </tr>
              <tr>
                <th>Genus</th>
                <td>{ fruit.genus }</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{ fruit.name }</td>
              </tr>
              <tr>
                <th>Family</th>
                <td>{ fruit.family }</td>
              </tr>
              <tr>
                <th>Order</th>
                <td>{ fruit.order }</td>
              </tr>
              <tr>
                <th>Carb %</th>
                <td>{ fruit.carbs }</td>
              </tr>
              <tr>
                <th>Protien %</th>
                <td>{ fruit.protein }</td>
              </tr>
              <tr>
                <th>Fat %</th>
                <td>{ fruit.fat }</td>
              </tr>
              <tr>
                <th>Sugar %</th>
                <td>{ fruit.sugar }</td>
              </tr>
              <tr>
                <th>Calories %</th>
                <td>{ fruit.calories }</td>
              </tr>
            </table>
          </div>
        </div>
      )) }
    </div>
  );
}

ItemDescription.propTypes = {
  fruits: PropTypes.string.isRequired,
};

export default ItemDescription;
