import React from 'react';
import SvgDiscuss from '../SvgDiscuss/SvgDiscuss';
import SvgTag from '../SvgTag/SvgTag';
import SvgShoppingCart from '../SvgShoppingCart/SvgShoppingCart'


function Guidelines() {
  return (
    <section className="guidelines">
        <h2 className="guidelines__header">How we work with custom projects</h2>
        <ul className="guidelines__list">
            <li className="guidelines__list-item">
                <article className="guideline">
                    <SvgDiscuss className="guideline__icon" />
                    <h3 className="guideline__header">We create</h3>
                    <p className="guideline__text">We collect the requirements of your project. What kind of products you want to sell online and how do you want users to personalize it.</p>
                </article>
            </li>
            <li className="guidelines__list-item">
                <article className="guideline">
                    <SvgTag className="guideline__icon" />
                    <h3 className="guideline__header">Discuss</h3>
                    <p className="guideline__text">We develop ready-to-go online storefront with online personalization capabilities based on your requirements.</p>
                </article>
            </li>
            <li className="guidelines__list-item">
                <article className="guideline">
                    <SvgShoppingCart className="guideline__icon" />
                    <h3 className="guideline__header">Discuss</h3>
                    <p className="guideline__text">When the storefront is ready, you can start selling to your customers right away.</p>
                </article>
            </li>
        </ul>
        
    </section>
  );
}

export default Guidelines;
