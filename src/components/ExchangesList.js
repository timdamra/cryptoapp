import React from 'react';
import PropTypes from 'prop-types';

import { ExchangesListDiv, ExchangesListItem } from '../styles/Exchanges';

const ExchangesList = props => {
  return (
    <ExchangesListDiv>
      {props.exchanges &&
        props.exchanges.map((val, i) => {
          return (
            <ExchangesListItem key={i * 2}>
              <h4>
                {val.MARKET}
              </h4>
            </ExchangesListItem>
          );
        })}
    </ExchangesListDiv>
  );
};

ExchangesList.propTypes = {
  exchanges: PropTypes.array
};

export default ExchangesList;
