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
              <h4>
                USD Price: ${displayedCurrency.price_usd}
              </h4>
              <h4>
                Market Cap: ${displayedCurrency.market_cap_usd}
              </h4>
              <h4>
                1hr Change: {displayedCurrency.percent_change_1h}%
              </h4>
              <h4>
                24hr Change: {displayedCurrency.percent_change_24h}%
              </h4>
              <h4>
                Total Supply: {displayedCurrency.total_supply}
              </h4>
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
