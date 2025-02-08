import {  useEffect, useState } from 'react';

export function Slider({children, activeIndex, vertical= false, className}) {
  return (
    <div className={`overflow-hidden relative w-full h-full ${className}`}>
      {children.map((item, index) => {
        return (
          <div className="slide absolute w-full h-full shrink-0 transition ease-in-out duration-1000" key={index} style={{transform: `translate${vertical ? 'Y' : 'X'}(${(index-activeIndex)*101}%)`}}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
