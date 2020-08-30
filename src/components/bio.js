/**
 * Biography, intro page
 */

import React from 'react';

function Bio () {
  return (
    <div className='bio'>
      <div className='bio-header'>
        ❤️ clean code ❤️ hacking ❤️ teaching
      </div>
      <div className='bio-subheader'>
        Hi! I'm Michael.

        I studied ECE and CS at Carnegie Mellon, where I learned about
        everything tech, from chip design/fab, FPGAs, to systems, machine
        learning, and algorithms.

        I'm currently working at Facebook, but I continue to tutor on the
        side. I regularly write articles to help people learn about math and
        CS, and recently, I've been making tools to help people manage stocks
        and finances.
      </div>
    </div>
  );
}

export { Bio };