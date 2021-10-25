import React from 'react';
import fetchData from '../../Redux/displayData/displayDataSlice';

function DisplayData() {
  fetchData();
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default DisplayData;
