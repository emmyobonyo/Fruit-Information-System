import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { filterFruitData } from '../../Redux/displayData/displayDataSlice';
import './Navigation.css';

function Navigation({ title }) {
  const dispatch = useDispatch();
  const filterFruits = (e) => {
    const input = e.target.value;
    dispatch(filterFruitData(input));
  };
  Navigation.defaultProps = {
    title: 'Home',
  };
  return (
    <div>
      <nav className="navigation">
        <div className="left-navigation">
          { title === 'Home' && (
            <h3>FRUITS</h3>
          ) }
          { title !== 'Home' && (
            <>
              <Link to="/">
                <i className="fas fa-angle-left fa-2x" />
              </Link>
              <h3>{ title }</h3>
            </>
          ) }
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Filter by country" onChange={(e) => { filterFruits(e); }} />
          <i className="fas fa-angle-right fa-2x" />
        </div>
        <div className="right-navigation">
          <i className="fas fa-microphone" />
          <i className="fas fa-cog" />
        </div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  title: PropTypes.string,
};

export default Navigation;
