import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import DisplayData from './components/DisplayData/DisplayData';
import store from './Redux/configureStore'; 

it('should return the home page', () => {
  const homePage = render(<Router><Provider store={store}><DisplayData /></Provider></Router>);
  expect(homePage).toMatchSnapshot();
  expect(homePage.queryByText(/Home/)).toBeInTheDocument();
})
