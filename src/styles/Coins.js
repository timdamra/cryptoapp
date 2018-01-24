import React from 'react';
import styled from 'styled-components';

export const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SingleCoinDiv = styled.div`
  border-bottom: 2px solid silver;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SortButtons = styled.ul`
  border: 1px solid silver;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 4px 2px;
  list-style: none;

  @media screen and (min-width: 960px) {
    font-size: 1rem;
  }
`;

export const SortOption = styled.li`
  &:hover {
    cursor: pointer;
    color: #85cbfc;
  }

  &:active {
    text-shadow: 2px 2px 2px green;
  }
`;

export const SingleCoinImg = styled.div`width: 30%;`;

export const CoinImg = styled.img`
  max-width: 40px;
  max-height: 40px;
`;

export const Stats = styled.p`
  width: 30%;
  font-weight: bold;
  font-size: 0.8rem;

  @media screen and (min-width: 960px) {
    font-size: 1rem;
  }
`;

export const MktCap = styled.p`
  width: 30%;
  font-weight: bold;
  font-size: 0.7rem;

  @media screen and (min-width: 960px) {
    font-size: 0.9rem;
  }
`;

export const Change24 = styled.p`
  color: ${props => (props.coindata.percent_change_24h < 0 ? 'red' : 'green')};
  font-weight: bold;
`;

export const Change1 = styled.p`
  color: ${props => (props.coindata.percent_change_1h < 0 ? 'red' : 'green')};
  font-weight: bold;
  font-size: 0.8rem;

  @media screen and (min-width: 960px) {
    font-size: 1rem;
  }
`;
