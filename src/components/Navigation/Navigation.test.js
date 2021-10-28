import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import store from '../../Redux/configureStore';

it('should return the navigation', () => {
  const navigation = render(<Router><Provider store={store}><Navigation /></Provider></Router>);
  expect(navigation).toMatchSnapshot();
});
