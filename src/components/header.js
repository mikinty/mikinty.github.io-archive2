/**
 * Section headers
 */

import React from 'react';

class SectionHeader extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div
        className='header-section'
        style={
          {'background-color': this.props.color}
        }
      >
        {this.props.name}
      </div>
    );
  }
}

export { SectionHeader };