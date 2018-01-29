import React from 'react';
import styled from 'styled-components';

export const CurrencyDiv = styled.div`text-align: center;`;

export const CurrencyTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

export const CurrencyImg = styled.img`
  max-width: 120px;
  max-height: 80px;
`;

export const CurrencyNumbers = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 4vh;
`;
export const CurrencyNumbersDiv = styled.div`
  border: 1px solid gray;
  box-shadow: 5px 5px 5px gray;
  padding: 4px;
  margin-top: 2vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ChartDiv = styled.div`
  width: 80%;

  @media screen and (min-width: 1024px) {
    width: 65%;
  }
`;

export const SocMedImg = styled.img`
  max-width: 80px;
  max-height: 80px;
  &:hover {
    cursor: pointer;
  }
`;
