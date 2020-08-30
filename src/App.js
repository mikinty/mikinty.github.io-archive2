import React from 'react';
import { TileRow, Tile } from './components/tiles';
import PROJECTS_DATA from './data/projects.json';

function App () {
  return (
    <div className="main">
      <TileRow
        tiles={[
          {
            object: PROJECTS_DATA['omega3'],
            width: 4
          },
          {
            object: PROJECTS_DATA['marco'],
            width: 1
          }
        ]}
      />
      <TileRow
        tiles={[
          {
            object: PROJECTS_DATA['100_proof'],
            width: 1
          },
          {
            object: PROJECTS_DATA['bomb_defuser'],
            width: 1
          }
        ]}
      />
      <TileRow
        tiles={[
          {
            object: PROJECTS_DATA['osu'],
            width: 1
          }
        ]}
      />
    </div>
  )
}

export default App;