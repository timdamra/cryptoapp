import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Nav,
  NavItem,
  DesktopNav,
  DesktopNavTabsContainer,
  NavDropDown,
  NavImg
} from '../styles/General';

const NavMenu = props => {
  return (
    <Nav>
      <NavImg onClick={props.handleClick} src="/assets/menu.png" />
      {props.isOpen
        ? <NavDropDown>
            <NavItem>
              <Link
                onClick={props.handleClickMenuItem}
                style={{
                  textDecoration: 'none',
                  color: 'black'
                }}
                to="/"
              >
                <h4>Home</h4>
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={props.handleClickMenuItem}
                style={{
                  textDecoration: 'none',
                  color: 'black'
                }}
                to="/calendar"
              >
                <h4>ICO Calendar</h4>
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={props.handleClickMenuItem}
                style={{
                  textDecoration: 'none',
                  color: 'black'
                }}
                to="/buzz"
              >
                <h4>Coin Buzz</h4>
              </Link>
            </NavItem>
          </NavDropDown>
        : false}
      <DesktopNav>
        <div>
          <Link
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
            to="/"
          >
            <h1>
              <u>BLOCKCHAIN INDEX</u>
            </h1>
          </Link>
        </div>
        <DesktopNavTabsContainer>
          <NavItem>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
              to="/"
            >
              <h4
                style={{
                  padding: '3px',
                  border: '2px solid black',
                  borderRadius: '3px'
                }}
              >
                HOME
              </h4>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
              to="/calendar"
            >
              <h4
                style={{
                  padding: '3px',
                  border: '2px solid black',
                  borderRadius: '3px'
                }}
              >
                ICO CALENDAR
              </h4>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
              to="/buzz"
            >
              <h4
                style={{
                  padding: '3px',
                  border: '2px solid black',
                  borderRadius: '3px'
                }}
              >
                COIN BUZZ
              </h4>
            </Link>
          </NavItem>
        </DesktopNavTabsContainer>
      </DesktopNav>
    </Nav>
  );
};

Nav.propTypes = {
  isOpen: PropTypes.bool
};

export default NavMenu;
