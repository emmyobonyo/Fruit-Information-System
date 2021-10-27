import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../../Redux/displayData/displayDataSlice';
import Navigation from '../Navigation/Navigation';

function DisplayData() {
  const fruits = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Navigation homePage={fruits.map((fruit) => fruit.homePage)} />
      <h1>Home</h1>
      { fruits.map((fruit) => (
        <div key={fruit.id}>
          <Link to={`/${fruit.name}`}>
            <h2>{ fruit.name }</h2>
          </Link>
          <h4>{ fruit.family }</h4>
        </div>
      )) }
    </div>
  );
}

export default DisplayData;
