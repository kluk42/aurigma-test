import React from 'react';
import FooterLinks from '../FooterLinks/FooterLinks';
import FooterLogos from '../FooterLogos/FooterLogos';
import FooterAccordion from '../FooterAccordion/FooterAccordion';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterLinks />
        <FooterAccordion />
        <FooterLogos />
      </div>
    </footer>
  );
}

export default Footer;