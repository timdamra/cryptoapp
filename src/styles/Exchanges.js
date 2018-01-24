import React from 'react';
import styled from 'styled-components';

export const ExchangesContainerDiv = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const ExchangesListDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const ExchangesListItem = styled.div`
  color: blue;
  font-size: 1.2rem;
  text-shadow: 4px;
  margin: 0 4px;
  text-decoration-line: underline;
`;
