import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/displayData/displayDataSlice';

function DisplayData() {
  const fruits = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <h1>Fruits</h1>
      { fruits.map((fruit) => (
        <div key={fruit.id}>
          <h2>{ fruit.name }</h2>
          <h4>{ fruit.family }</h4>
        </div>
      )) }
    </div>
  );
}

export default DisplayData;
