// const initialState = [];
// const FETCH_DATA = 'covidTracker/displayData/FETCH_DATA';

const fetchData = () => async () => {
  const response = await fetch('https://api.covid19tracking.narrativa.com/api/2021-10-24/country/spain');
  const data = await response.json();
  const newData = [];
  Object.keys(data).forEach((dataStat) => {
    newData.push(data)
  })
};

export default fetchData;
