import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CoinList from './CoinList';
import NavMenu from './Nav';
import Profile from './Profile';
import Calendar from './Calendar';
import Research from './Research';
import NewsContainer from './NewsContainer';
import Footer from './Footer';
import { Content, Container, Title } from '../styles/General';

const NotFound = () => <h4>Hot Dog! We could not find this page, sorry!</h4>;

export default class App extends Component {
  state = {
    isOpen: false
  };
  handleClick = () => {
    this.setState(prevState => {
      let isOpen = !prevState.isOpen;
      return { isOpen };
    });
  };
  handleClickMenuItem = () => {
    this.setState(() => {
      return { isOpen: false };
    });
  };
  render = () => {
    return (
      <div>
        <Content>
          <NavMenu
            handleClickMenuItem={this.handleClickMenuItem}
            handleClick={this.handleClick}
            isOpen={this.state.isOpen}
          />
          <Container>
            <Title>
              <h2>BLOCKCHAIN INDEX</h2>
            </Title>
            <Switch>
              <Route exact path="/" component={CoinList} />
              <Route path="/profile/:symbol" component={Profile} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/research/:symbol" component={Research} />
              <Route path="/buzz" component={NewsContainer} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Content>
        <Footer />
      </div>
    );
  };
}
