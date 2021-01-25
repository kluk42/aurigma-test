import React, { useEffect, useRef } from 'react';

function Accordion({ children, name, activeName, activeNameSetter }) {
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = name === activeName ? `${contentRef.current.scrollHeight}px` : '0px';
      }, [contentRef, activeName, name])

    const handleClick = () => {
        activeNameSetter(() => {
            return activeName === name ? '' : name
        });
    }
    
  return (
    <div className="accordion">
        <div className="accordion__header" onClick={handleClick}>
            <h2 className="accordion__title">{name}</h2>
            <i id="chevron" className={`accordion__chevron fa fa-chevron-down ${name === activeName ? 'accordion__chevron_state_rotated' : ''}`}></i>
            {/* <p className={`accordion__chevron ${name === activeName ? 'accordion__chevron_state_rotated' : ''}`}></p> */}
        </div>
        <div ref={contentRef} className="accordion__content">
            {children}
        </div>
    </div>
  );
}

export default Accordion;