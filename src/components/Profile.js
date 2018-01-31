import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from '../styles/General';
import CandleStick from './CandleStick';
import {
  CurrencyDiv,
  CurrencyTitle,
  CurrencyImg,
  CurrencyNumbers,
  CurrencyNumbersDiv,
  SocMedImg,
  ChartDiv
} from '../styles/Profile';
import ExchangesContainer from './ExchangesContainer';

export class Profile extends Component {
  render = () => {
    const displayedCurrency = this.props.currencyList.coins.find(
      val => val.symbol === this.props.activeProfileSymbol
    );

    return (
      <CurrencyDiv>
        <CurrencyTitle>
          <h1>
            {displayedCurrency.name} ({displayedCurrency.symbol})
          </h1>
          <CurrencyImg src={this.props.activeProfileImage} />
        </CurrencyTitle>
        <CurrencyNumbers>
          <CurrencyNumbersDiv>
            <div>
              <p>
                USD Price: {displayedCurrency.price_usd}
              </p>
              <p>
                Market Cap: {displayedCurrency.market_cap_usd}
              </p>
              <p>
                1hr Change%: {displayedCurrency.percent_change_1h}
              </p>
              <p>
                24hr Change%: {displayedCurrency.percent_change_24h}
              </p>
              <p>
                Total Supply: {displayedCurrency.total_supply}
              </p>
            </div>
            <ChartDiv>
              <CandleStick />
            </ChartDiv>
          </CurrencyNumbersDiv>
          <ExchangesContainer displayedCurrency={displayedCurrency} />
        </CurrencyNumbers>
      </CurrencyDiv>
    );
  };
}

Profile.propTypes = {
  currencyList: PropTypes.shape({
    coins: PropTypes.array.isRequired
  })
};

const mapStateToProps = ({
  activeProfileImage,
  activeProfileSymbol,
  currencyList
}) => {
  return {
    activeProfileImage,
    activeProfileSymbol,
    currencyList
  };
};

export default connect(mapStateToProps)(Profile);
