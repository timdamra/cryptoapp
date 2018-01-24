import React, { Component } from 'react';
import axios from 'axios';

import ExchangesList from './ExchangesList';
import { ExchangesContainerDiv } from '../styles/Exchanges';

class ExchangesContainer extends Component {
  state = {
    display: false,
    exchanges: []
  };
  componentDidMount = () => {
    axios
      .get(`/exchanges/${this.props.displayedCurrency.symbol}`)
      .then(response => {
        this.setState({
          exchanges: response.data.exchanges
        });
      })
      .catch(err => console.log(err));
  };
  render = () => {
    return (
      <ExchangesContainerDiv>
        <h2>Markets for this coin</h2>
        <ExchangesList exchanges={this.state.exchanges} />
      </ExchangesContainerDiv>
    );
  };
}

export default ExchangesContainer;
