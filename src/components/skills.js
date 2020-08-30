/**
 * Display what skills I have
 */

import React from 'react';
import SKILLS_DATA from '../data/skills.json';
import { InlineMath } from 'react-katex';

/**
 * Builds the skills table
 */
class Skills extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='skills'>
        {
          SKILLS_DATA.map(entry => (
            <div className='skills-column'>
              <div className='skills-title'>
                {entry.title}
              </div>
              <div className='skills-description'>
                {entry.description}
              </div>
              <div className='skills-tools'>
                {
                  entry.tools.map(tool => (
                      <div className='skills-tools-item'>
                        {tool == 'LaTeX' ? <InlineMath math='\LaTeX' /> : tool}
                      </div>
                    ))
                }
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export { Skills };