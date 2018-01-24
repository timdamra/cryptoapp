import React from 'react';
import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

export const CalendarEventList = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media screen and (min-width: 940px) {
    flex-flow: row wrap;
    justify-content: center;
  }
`;

export const CalendarEvent = styled.div`
  padding: 4px;
  border: 1px solid silver;
  box-shadow: 3px 3px 3px silver;

  @media screen and (min-width: 1024px) {
    width: 42%;
  }

  @media screen and (min-width: 1440px) {
    width: 30%;
  }
`;

export const CalendarButtonControl = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 5vh 0;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid silver;
`;

export const CalendarButton = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 3px 10px;
  border-radius: 2px;
  margin: auto;
  font-weight: bolder;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 2px 2px 2px orange;
    color: orange;
  }
`;
