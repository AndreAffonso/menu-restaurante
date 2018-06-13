import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRestaurant, fetchMenu } from '../../actions/restaurantActions';

// CONSTANTS
import { RESTAURANT_URL, MENU_URL } from '../../helpers/constants';

import { Spinner, LoginButton } from './styles';
import Menu from '../Menu';
class Restaurant extends Component {
  state = {
    waiting: false
  };

  componentWillMount() {
    this.props.fetchRestaurant(RESTAURANT_URL);
  }

  handleLogin = () => {
    this.props.fetchMenu(MENU_URL);
    this.setState({ waiting: true });
  };

  render() {
    const { restaurant, menu } = this.props;
    const { waiting } = this.state;
    return (
      <div>
        <h1>{restaurant.name}</h1>
        <h3>{restaurant.street}</h3>
        <img src={restaurant.bannerUrl} alt="restaurant logo" />
        <br />
        {menu.length ? (
          <Menu items={menu} />
        ) : waiting ? (
          <Spinner />
        ) : (
          <LoginButton onClick={this.handleLogin}>Login </LoginButton>
        )}
        {console.log(menu)}
      </div>
    );
  }
}

Restaurant.propTypes = {
  fetchRestaurant: PropTypes.func.isRequired,
  fetchMenu: PropTypes.func,
  menu: PropTypes.array
};

const mapStateToProps = state => ({
  restaurant: state.posts.restaurant,
  menu: state.posts.restaurantMenu
});

export default connect(
  mapStateToProps,
  { fetchRestaurant, fetchMenu }
)(Restaurant);
