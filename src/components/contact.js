/**
 * Contact info
 */

import React from 'react';
import svg_github from '../img/github.svg';
import svg_linkedin from '../img/linkedin.svg';

function Contact () {
  return (
    <div className='contact'>
      <img src={svg_github}></img>
      <img src={svg_linkedin}></img>
    </div>
  );
}

export { Contact };