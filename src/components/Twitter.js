import React from 'react';

import { TwitterDiv, TwitterItem, TwitterImg } from '../styles/Twitter';

const Twitter = props => {
  return props.isTwitterOpen
    ? <TwitterDiv>
        <TwitterItem>
          <TwitterImg
            onClick={props.handleTwitterClick}
            src="/assets/down.png"
          />
        </TwitterItem>
        {props.twitterList &&
          props.twitterList.map((val, i) => {
            return (
              <TwitterItem key={i * 2}>
                <TwitterImg src={val.urlToImage} />
                <h4>
                  {val.name}
                </h4>
                <a href={`https://twitter.com/${val.screen_name}`}>
                  <p>
                    {val.status.text}
                  </p>
                </a>
              </TwitterItem>
            );
          })}
      </TwitterDiv>
    : <TwitterDiv>
        <TwitterItem>
          <TwitterImg
            onClick={props.handleTwitterClick}
            src="/assets/down.png"
          />
          <h4>Twitter Buzz</h4>
        </TwitterItem>
      </TwitterDiv>;
};

export default Twitter;
