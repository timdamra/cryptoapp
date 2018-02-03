import React from 'react';

import {
  FooterDiv,
  FooterSection,
  FooterSubSection,
  FooterFont
} from '../styles/General';

const Footer = props => {
  return (
    <FooterDiv>
      <FooterSection>
        <FooterSubSection>
          <i style={{ padding: '0 6px' }} className="fab fa-facebook-f fa-3x" />
          <i style={{ padding: '0 6px' }} className="fab fa-twitter fa-3x" />
          <i style={{ padding: '0 6px' }} className="fab fa-youtube fa-3x" />
        </FooterSubSection>
      </FooterSection>
      <FooterSection>
        <FooterFont>Please Support!</FooterFont>
        <FooterFont>BTC: 1MH877g8TkG414gB2PmaKthqAfTHcoYu1H</FooterFont>
        <FooterFont>ETH: 0x73560d520739fa02c65F4b7B426A2750F4f6A373</FooterFont>
        <FooterFont>LTC: LcCG5HXoU3MHcbft3jBUNhFn685JBHuFWd</FooterFont>
        <FooterFont>BCH: 12GwFsS9Ce4Fr5jUePcQfCm1aMeGxFhqVA</FooterFont>
      </FooterSection>
    </FooterDiv>
  );
};

export default Footer;
