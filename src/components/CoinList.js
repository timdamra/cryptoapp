import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FoldingCube } from 'styled-spinkit';

import { CoinContainer, SortButtons, SortOption } from '../styles/Coins';
import SingleCoinItem from './SingleCoinItem';
import { fetchCurrencyList } from '../actions';

export class CoinList extends Component {
  state = {
    sortBy: 'market_cap_usd'
  };
  componentDidMount = () => {
    this.props.fetchCurrencyList();
  };
  handleSortBy = evt => {
    let value = evt.target.textContent;

    switch (value) {
      case 'Price':
        this.setState({ sortBy: 'price_usd' });
        break;
      case '1hr Change%':
        this.setState({ sortBy: 'percent_change_1h' });
        break;
      default:
        this.setState({ sortBy: 'market_cap_usd' });
    }
  };
  render = () => {
    return (
      <div>
        <CoinContainer>
          <SortButtons>
            <SortOption onClick={this.handleSortBy}>Name</SortOption>
            <SortOption onClick={this.handleSortBy}>Price</SortOption>
            <SortOption onClick={this.handleSortBy}>1hr Change%</SortOption>
          </SortButtons>
          {this.props.currencyList.coins
            ? this.props.currencyList.coins
                .sort((a, b) => {
                  return b[this.state.sortBy] - a[this.state.sortBy];
                })
                .slice(0, 50)
                .map((val, i) => {
                  if (val.market_cap_usd) {
                    return <SingleCoinItem coindata={val} key={val.id} />;
                  }
                })
            : <FoldingCube />}
          <h3 style={{ padding: '5px 0' }}>
            **Disclaimer: This Web App only serves to display prices & other
            data from the global CryptoCurrency market and NOT as investment
            advice in any way
          </h3>
        </CoinContainer>
      </div>
    );
  };
}

const mapStateToProps = ({ currencyList }) => {
  return {
    currencyList
  };
};

export default connect(mapStateToProps, { fetchCurrencyList })(CoinList);
