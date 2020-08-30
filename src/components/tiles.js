/**
 * Creates the tiles for the webpage
 */

import React from 'react';

class TileObject {

}

class TileRow extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="tile-row">
        {
        this.props.tiles.map(curr_entry =>
            (
              <Tile
                info={curr_entry.object}
                width={curr_entry.width}
                key={curr_entry.object.name}
              />
            )
          )
        }
      </div>
    )
  }
}

class Tile extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      slide: 0
    };
  }

  render() {
    return (
      <div className="tile"
        style={{flex: `${this.props.width}`}}
      >
        <img src={this.props.info.img[0]}></img>
      </div>
    )
  }
}

export { TileRow, Tile};