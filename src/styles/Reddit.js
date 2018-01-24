import React from 'react';
import styled from 'styled-components';

export const RedditDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RedditItem = styled.div`
  color: #749acc;
  border-bottom: 1px solid silver;
  padding: 4px;
  text-align: center;
`;

export const RedditImg = styled.img`
  max-width: 80px;
  max-height: 80px;
  &:hover {
    cursor: pointer;
  }
`;
