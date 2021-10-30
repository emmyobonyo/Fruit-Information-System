import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DisplayData from './components/DisplayData/DisplayData';
import ItemDescription from './components/DisplayData/ItemDescription';
import store from './Redux/configureStore';

it('should return the home page', () => {
  const homePage = render(<Router><Provider store={store}><DisplayData /></Provider></Router>);
  expect(homePage).toMatchSnapshot();
  expect(homePage.queryByText(/All Fruits/)).toBeInTheDocument();
});

it('should return the Apple', () => {
  const home = render(<MemoryRouter><Route path="/Apple"><Provider store={store}><ItemDescription fruits="Apple" /></Provider></Route></MemoryRouter>);
  expect(home).toMatchSnapshot();
});

it('should return the Apple', () => {
  const home = render(<MemoryRouter><Route path="/Apple"><Provider store={store}><ItemDescription fruits="Apple" /></Provider></Route></MemoryRouter>);
  expect(home.findByText(/Apple/)).toBeTruthy();
});
