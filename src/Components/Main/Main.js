import React from 'react';
import Shopify from '../Shopify/Shopify';
import Guidelines from '../Guidelines/Guidelines';
import Booster from '../Booster/Booster';
import Abilities from '../Abilities/Abilities';
import Articles from '../Articles/Articles';
import ContactSuggestion from '../ContactSuggestion/ContactSuggestion';

function Main() {
  return (
    <main className="main">
        <Shopify />
        <Guidelines />
        <Booster />
        <Abilities />
        <Articles />
        <ContactSuggestion />
    </main>
  );
}

export default Main;
