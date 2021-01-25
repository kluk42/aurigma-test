import React, { useState } from 'react';
import Accordion from '../Accordion/Accordion';

function FooterAccordion() {
    const [ activeName, setActiveName ] = useState('');

    const nameSetter = (name) => {
        setActiveName(name);
    }
  return (
    <section className="footer-accordion">
        <Accordion name="Features" activeName={activeName} activeNameSetter={nameSetter}>
            <ul className="footer-accordion__links-list">
                    <li className="footer-accordion__links-list-item">
                        <a href='/' className="footer-accordion__link footer-accordion__link-text">W2P Process Tailored to Your Business</a>
                    </li>
                    <li className="footer-accordion__links-list-item">
                        <a href='/' className="footer-accordion__link">Personalize Anything</a>
                    </li>
                    <li className="footer-accordion__links-list-item">
                        <a href='/' className="footer-accordion__link">Working with Photos</a>
                    </li>
                    <li className="footer-accordion__links-list-item">
                        <a href='/' className="footer-accordion__link">Working with Logos and Clipart</a>
                    </li>
                    <li className="footer-accordion__links-list-item">
                        <a href='/' className="footer-accordion__link">Working with Texts</a>
                    </li>
            </ul>
        </Accordion>
        <Accordion name="Get Started" activeName={activeName} activeNameSetter={nameSetter}>
          <ul className="footer-accordion__links-list">
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">W2P Process Tailored to Your Business</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Personalize Anything</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Photos</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Logos and Clipart</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Texts</a>
                </li>
            </ul>
        </Accordion>
        <Accordion name="Products" activeName={activeName} activeNameSetter={nameSetter}>
          <ul className="footer-accordion__links-list">
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">W2P Process Tailored to Your Business</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Personalize Anything</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Photos</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Logos and Clipart</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Texts</a>
                </li>
            </ul>
        </Accordion>
        <Accordion name="Verticals" activeName={activeName} activeNameSetter={nameSetter}>
          <ul className="footer-accordion__links-list">
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">W2P Process Tailored to Your Business</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Personalize Anything</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Photos</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Logos and Clipart</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Texts</a>
                </li>
            </ul>
        </Accordion>
        <Accordion name="Company" activeName={activeName} activeNameSetter={nameSetter}>
          <ul className="footer-accordion__links-list">
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">W2P Process Tailored to Your Business</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Personalize Anything</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Photos</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Logos and Clipart</a>
                </li>
                <li className="footer-accordion__links-list-item">
                    <a href='/' className="footer-accordion__link">Working with Texts</a>
                </li>
            </ul>
        </Accordion>
    </section>
  );
}

export default FooterAccordion;