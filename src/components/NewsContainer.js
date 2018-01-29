import React, { Component } from 'react';
import { connect } from 'react-redux';

import Reddit from './Reddit';
import Twitter from './Twitter';
import { fetchRedditList, fetchTwitterList } from '../actions';

const mapStateToProps = ({ redditLists, twitterList }) => {
  return { redditLists, twitterList };
};

class NewsContainer extends Component {
  state = {
    isTwitterOpen: false,
    isRedditOpen: false
  };
  componentDidMount = () => {
    this.props.fetchTwitterList();
    this.props.fetchRedditList();
  };
  handleTwitterClick = () => {
    this.setState(prevState => {
      let isTwitterOpen = !prevState.isTwitterOpen;
      return { isTwitterOpen };
    });
  };
  handleRedditClick = evt => {
    this.setState(prevState => {
      let isRedditOpen = !prevState.isRedditOpen;
      return { isRedditOpen };
    });
  };
  render = () => {
    return (
      <div>
        <Twitter
          isTwitterOpen={this.state.isTwitterOpen}
          handleTwitterClick={this.handleTwitterClick}
          twitterList={this.props.twitterList}
        />
        <Reddit
          isRedditOpen={this.state.isRedditOpen}
          handleRedditClick={this.handleRedditClick}
          redditList={this.props.redditLists}
        />
      </div>
    );
  };
}

export default connect(mapStateToProps, { fetchRedditList, fetchTwitterList })(
  NewsContainer
);
