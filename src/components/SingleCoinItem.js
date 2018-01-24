import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  SingleCoinDiv,
  SingleCoinImg,
  CoinImg,
  Change24,
  Change1,
  Stats,
  MktCap
} from '../styles/Coins';

import { imageList } from '../imageList';
import { setActiveProfileImage } from '../actions';

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

class SingleCoinItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '/assets/crypto.png'
    };
  }
  componentDidMount = () => {
    let checkCoinImg = imageList.find(
      val => val.symbol === this.props.coindata.symbol
    );
    if (!checkCoinImg) {
      return;
    }
    if (!checkCoinImg.image) {
      return;
    }
    let url = `https://www.cryptocompare.com/${checkCoinImg.image}`;

    this.setState(() => {
      return { url };
    });
  };
  displayActiveProfile = () => {
    this.props.setActiveProfileImage(this.state);
  };
  render = () => {
    let { coindata } = this.props;

    return (
      <SingleCoinDiv>
        <SingleCoinImg>
          <Link
            onClick={this.displayActiveProfile}
            to={`/profile/${coindata.id}`}
          >
            <CoinImg src={this.state.url} />
          </Link>
          <p>
            {coindata.name}{' '}
            <span style={{ backgroundColor: 'black', color: 'white' }}>
              {coindata.symbol}
            </span>
          </p>
          <Stats>Market Cap:</Stats>
          <MktCap>
            ${numberWithCommas(coindata.market_cap_usd)}
          </MktCap>
        </SingleCoinImg>
        <Stats>
          ${coindata.price_usd}
        </Stats>
        <Change1 coindata={coindata}>
          {coindata.percent_change_1h}%
        </Change1>
      </SingleCoinDiv>
    );
  };
}

export default connect(null, { setActiveProfileImage })(SingleCoinItem);
