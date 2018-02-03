import React from 'react';

import {
  FooterDiv,
  FooterSection,
  FooterDonateSection
} from '../styles/General';

const Footer = props => {
  return (
    <FooterDiv>
      <FooterSection>
        <i style={{ padding: '0 3px' }} className="fab fa-facebook-f fa-3x" />
        <i style={{ padding: '0 3px' }} className="fab fa-twitter fa-3x" />
        <i style={{ padding: '0 3px' }} className="fab fa-youtube fa-3x" />
      </FooterSection>
      <FooterDonateSection>
        <h5>Please Support!</h5>
        <i class="fab fa-btc fa-2x">1MH877g8TkG414gB2PmaKthqAfTHcoYu1H</i>
        <i class="fab fa-ethereum fa-2x">
          0x73560d520739fa02c65F4b7B426A2750F4f6A373
        </i>
        <p>LTC: LcCG5HXoU3MHcbft3jBUNhFn685JBHuFWd</p>
      </FooterDonateSection>
    </FooterDiv>
  );
};

export default Footer;
