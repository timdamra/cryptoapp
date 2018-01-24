import React from 'react';

import { RedditDiv, RedditItem, RedditImg } from '../styles/Reddit';

const Reddit = props => {
  return props.isRedditOpen
    ? <RedditDiv>
        <RedditItem>
          <RedditImg onClick={props.handleRedditClick} src="/assets/down.png" />
        </RedditItem>
        {props.redditList &&
          props.redditList.map((val, i) => {
            return (
              <RedditItem key={i * 2}>
                <a href={val.data.url}>
                  <h4>
                    {val.data.title}
                  </h4>
                </a>
              </RedditItem>
            );
          })}
      </RedditDiv>
    : <RedditDiv>
        <RedditItem>
          <RedditImg onClick={props.handleRedditClick} src="/assets/down.png" />
          <h4>Reddit Buzz</h4>
        </RedditItem>
      </RedditDiv>;
};

export default Reddit;
