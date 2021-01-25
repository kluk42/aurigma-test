import React from 'react';
import SvgRocketLaunch from '../SvgRocketLaunch/SvgRocketLaunch';

function Booster() {
  return (
    <section className="booster">
        <h2 className="booster__header">Boost your business with web-to-print</h2>
        <SvgRocketLaunch className="booster__img" />
        <ul className="advantages-list">
            <li className="advantages-list__item">
                    <h3 className="advantage__header">Quick start</h3>
                    <p className="advantage__content">Using our services, you can launch or update your online storefront promptly and start exploring a new channel for your business.</p>
            </li>
            <li className="advantages-list__item">
                    <h3 className="advantage__header">No pain to maintain</h3>
                    <p className="advantage__content">You don’t have to deal with servers and programming to operate you storefront.</p>
            </li>
            <li className="advantages-list__item">
                    <h3 className="advantage__header">Web-to-print experts</h3>
                    <p className="advantage__content">We have extensive knowledge in web-to-print and are able to implement complex personalization workflows for any kind of product.</p>
            </li>
            <li className="advantages-list__item">
                    <h3 className="advantage__header">Flexible hosting</h3>
                    <p className="advantage__content">You can use our shared infrastructure, your own servers, or even cloud hosting. We can handle the set up so you could focus on selling..</p>
            </li>
        </ul>
    </section>
  );
}

export default Booster;
