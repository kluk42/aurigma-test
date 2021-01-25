import React from 'react';
import SvgAurigmaLogo from '../SvgAurigmaLogo/SvgAutigmaLogo';
import SvgAptechPrintLogo from '../SvgAptechPrintLogo/SvgAptechPrintLogo';
import SvgRedhoTtechnologyLogo from '../SvgRedhoTtechnologyLogo/SvgRedhoTtechnologyLogo';

function FooterLogos() {
  return (
    <section className="footer-logos">
      <SvgAurigmaLogo className="footer-logos__aurigma" />
      <p className="footer-logos__text">&#169; 2019 Aurigma Inc. <a href="/" className="footer-logos__link">Copyright Notice</a> and <a href="/" className="footer-logos__link">Privacy Policy</a></p>
      <div className="footer-logos__awards">
        <SvgAptechPrintLogo className="footer-logos__award footer-logos__award_type_ap-tech" />
        <SvgRedhoTtechnologyLogo className="footer-logos__award footer-logos__award_type_red-hot" />
      </div>
    </section>
  );
}

export default FooterLogos;