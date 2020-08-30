import React from 'react';
import { Bio } from './components/bio';
import { Contact } from './components/contact';
import { SectionHeader } from './components/header';
import { Navbar } from './components/navbar';
import { Skills } from './components/skills';
import { TileRow } from './components/tiles';
import PROJECTS_DATA from './data/projects.json';

function App () {
  return (
    <div className='main'>
      <Navbar />
      <Bio />
      <SectionHeader
        name='Work'
        color='#a366f2'
      />
      <TileRow
        tiles={[
          {
            object: PROJECTS_DATA['omega3'],
            width: 3
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
      <SectionHeader
        name='Skills'
        color='#a366f2'
      />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;