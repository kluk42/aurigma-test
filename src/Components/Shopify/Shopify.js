import React from 'react';
import SvgShopifyBackoffice from '../SvgShopifyBackoffice/SvgShopifyBackoffice';

function Shopify() {
  return (
        <section className="shopify">
            <div className="shopify__text-container">
                <h2 className="shopify__header">Product customization for Shopify</h2>
                <p className="shopify__text">Want to offer your clients an easy way to order personalized paper and promotional items. Our team is here to help you navigate the maze of offering web-to-print directly to your customers.</p>
                <button className="shopify__contact-button">Contact us</button>
            </div>
            <SvgShopifyBackoffice className="shopify__img"/>
        </section>
  );
}

export default Shopify;
