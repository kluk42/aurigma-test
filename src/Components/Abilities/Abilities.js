import React from 'react';
import SvgArrows from '../SvgArrows/SvgArrows';

function Abilities() {
  return (
    <section className="abilities">
        <div className="abilities__text-section">
            <h2 className="abilities__header">Get a truly unique storefront</h2>
            <p className="abilities__text">There is no shortage of web-to-print solutions that offer standard personalization workflows for printed products. However, if you want to offer a product with a unique scenario, things can get complicated. Such projects often require a tremendous amount of custom work and can take many months to be completed. We have our own web-to-print technology stack as well as the expertise to implement any product customization use case.</p>
        </div>
        <SvgArrows className="abilities__img" />
    </section>
  );
}

export default Abilities;