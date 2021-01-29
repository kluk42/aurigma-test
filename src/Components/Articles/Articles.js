import React from 'react';
import SvgHumans from '../SvgHumans/SvgHumans';
import SvgTag from '../SvgTag/SvgTag';
import SvgShoppingCart from '../SvgShoppingCart/SvgShoppingCart'


function Articles() {
  return (
    <section className="articles">
        <h2 className="articles__header">Learn more about custom web-to-print</h2>
        <ul className="articles__list">
            <li className="articles__list-item">
                <div className="article">
                    <a href="/"><SvgHumans className="article__icon" /></a>
                    <a href="/" className="article__link">Blog: Creating custom personalization workflows</a>
                    <p className="article__text">Read about hurdles of implementing non-standard personalization workflows for web-to-print project.</p>
                </div>
            </li>
            <li className="articles__list-item">
                <div className="article">
                    <a href="/">
                        <SvgTag className="article__icon" />
                    </a>
                    <a href="/" className="article__link">White-paper: Creating custom personalization workflows</a>
                    <p className="article__text">Read about hurdles of implementing non-standard personalization workflows for web-to-print project.</p>
                </div>
            </li>
            <li className="articles__list-item">
                <div className="article">
                    <a href="/">
                        <SvgShoppingCart className="article__icon" />
                    </a>
                    <a href="/" className="article__link">Webinar: Creating custom personalization workflows</a>
                    <p className="article__text">Read about hurdles of implementing non-standard personalization workflows for web-to-print project.</p>
                </div>
            </li>
        </ul>
        
    </section>
  );
}

export default Articles;
