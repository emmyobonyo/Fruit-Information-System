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
      <Navigation />
      <div className="all-fruits">
        <img src="./assets/banana.png" alt="banana" />
        <h1>All Fruits</h1>
      </div>
      <ul>
        { fruits.map((fruit) => (
          <li key={fruit.id}>
            <img className="li-image" src={`./assets/${fruit.name}.png`} alt={fruit.name} />
            <div className="li-text">
              <Link to={`/${fruit.name}`}>
                <h4>{ fruit.name }</h4>
              </Link>
              <p>{`Family: ${fruit.family}` }</p>
            </div>
          </li>
        )) }
      </ul>
    </div>
  );
}

export default DisplayData;
