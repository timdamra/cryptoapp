import React from 'react';
import styled from 'styled-components';

export const Nav = styled.div`
  width: 100%;
  margin: 0;
  padding: 4px 0;
  position: fixed;
  top: 0;
  background-color: #85cbfc;
  z-index: 10;

  @media screen and (min-width: 769px) {
    padding: 2vh 0;
  }
`;

export const DesktopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
`;

export const Container = styled.div`
  max-width: 70vw;
  margin: auto;
  padding-top: 18vh;
  margin-top: 8vh;

  @media screen and (min-width: 769px) {
    max-width: 50%;
    padding-top: 12vh;
    margin-top: 6vh;
  }
`;

export const Content = styled.div`
  flex: 1 0 auto;

  @media screen and (min-height: 648px) {
    min-height: 800px;
  }
`;

export const NavItem = styled.div`
  width: 80%;
  margin: auto;
  padding: 3px;
  font-size: 1rem;
  border-top: 1px solid gray;

  @media screen and (min-width: 769px) {
    text-align: center;
    font-size: 1.4rem;
    border-top: none;
  }
`;

export const DesktopNavTabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const NavDropDown = styled.div`
  border-top: 1px solid black;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const NavImg = styled.img`
  max-width: 80px;
  max-height: 70px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const FooterDiv = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 8vh;
  background-color: #85cbfc;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row wrap;
  justify-content: center;
`;

export const FooterDonateSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
